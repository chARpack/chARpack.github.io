---
title: Implementing Network Messages
---

# General
In chARpack, collaborative building is enabled by sending network messages from the client to the server and the server to the clients whenever a relevant change happens, such as moving or merging a molecule.
Specific network messages are implemented for each use case, such as **bcastMoveMolecule** on the server and the corresponding **getMoleculeMoved** on the client side.
The events causing a network message to be sent are handled by the *EventManager* script.

## Event Manager
In most use cases, if you have an entirely new type of interaction that needs to be synchronized between clients, you will need to start by editing the **EventManager** script.
In the *Delegates* section, add some new lines in the form of:
```csharp
public delegate void YourNewAction(.../*some arguments*/);
public event YourNewAction OnNewEventHappend;
public void DoNewAction(.../*some arguments*/)
    {
        OnNewEventHappened?.Invoke(.../*some arguments*/);
    }
```
The arguments for these methods are going to be things that describe all relevant parts of your interaction: in many cases, this might include molecule or atom IDs.

In order for your new event to get called, add a call to ```EventManager.Singleton.DoNewAction(...)``` to wherever your interaction happens (e.g. the call to ```EventManager.ChangeMolData(molecule)``` is placed at the end of the **MergeMolecule** method in *GlobalCtrl*).

## Message Enums
The enums in *MessageEnums.cs* contain short descriptions of all events that can be networked (usually the same as the method names on the server and client, respectively).
Add an entry ```newEventHappened``` to **ClientToServerID** and an entry ```bcastNewEventHappened``` to **ServerToClientID**.
These entries are used by message handlers to correctly identify the type of message that was received.

## Client Side
Next, you will need to implement the actual network messages. On the client side, this includes listeners and often also send methods.

Edit the *NetworkManagerClient* script.
If your change is intended to be sent to all clients (which is most often the case), implement a method in the *Sends* section:
```csharp
public void sendNewAction(.../*some arguments*/)
{
    Message message = Message.Create(MessageSendMode.Reliable, ClientToServerID.newEventHappened);
    message.AddXYZ(...);
    Client.Send(message);
}
```
The arguments for the method are going to be the same as you used in the *EventManager* method.
The **AddXYZ** method is a placeholder for things such as **AddUShort** and **AddVector3** (these are implemented for all the most common types of data you may need to send).
Use as many *Add* methods as you need for your arguments; note that the order in which you add the arguments will later be important for interpretation on the server side.

In order for your new network message to be sent when an event happens, add the line <code>EventManager.Singleton.OnNewEventHappened += sendNewAction;</code> to the **Start** method.

You also need to implement a corresponding listener so the client can interpret a message from the server correctly.
Add a new method to the *Listen* section:
```csharp
    [MessageHandler((ushort)ServerToClientID.bcastNewEventHappened)]
    private static void getNewEvent(Message message)
    {
        var client_id = message.GetUShort();
        var args = message.GetXYZ();

        if (client_id != NetworkManagerClient.Singleton.Client.Id)
        {
            // Attempt to handle the event on the client, e.g. move the molecule specified in the received message
            tryDoNewAction();
            if (/*event could not be correctly processed*/)
            {
                // Log error and attempt world sync if the event can't be correctly handled
                Debug.LogError($"[NetworkManagerClient:getNewEvent] Molecule with id {mol_id} does not exist.\nRequesting world sync.");
                NetworkManagerClient.Singleton.sendSyncRequest();
            }
        }

    }
```
The first section extracts the arguments from the received message, the second one replicates the event that occurred on the server (unless the client itself caused the event to be networked).

## Server Side
On the server side, the process is quite similar: Edit the *NetworkManagerServer* script and add a new method to the *Messages* section.
```csharp
public void bcastNewEventHappened(.../*some arguments*/)
{
    // Broadcast to other clients
    Message message = Message.Create(MessageSendMode.Reliable, ServerToClientID.bcastNewEventHappened);
    message.AddUShort(0);
    message.AddXYZ(.../*some arguments*/)
    Server.SendToAll(message);
}
```
Then add a line to the **Start** method so the network event is triggered at the appropriate time: <code>EventManager.Singleton.OnNewEventHappened += bcastNewEventHappened;</code>

Now add a new method to the *MessageHandler* section: 
```csharp
    [MessageHandler((ushort)ClientToServerID.newEventHappened)]
    private static void getNewEventHappened(ushort fromClientId, Message message)
    {
        var args = message.getXYZ();
        // replicate the event on the server (by calling the corresponding method)
        tryDoNewAction();
        if (/*event could not be correctly processed (most often due to molecules with specific ID not being found)*/)
        {
            Debug.LogError($"[NetworkManagerServer:getNewEventHappened] Molecule with id {molecule_id} does not exist.\nSynchronizing world with client {fromClientId}.");
            NetworkManagerServer.Singleton.sendAtomWorld(GlobalCtrl.Singleton.saveAtomWorld(), fromClientId);
            return;
        }

        // Broadcast to other clients
        Message outMessage = Message.Create(MessageSendMode.Unreliable, ServerToClientID.bcastNewEventHappened);
        outMessage.AddUShort(fromClientId);
        outMessage.AddXYZ(args);
        NetworkManagerServer.Singleton.Server.SendToAll(outMessage);
    }
```
