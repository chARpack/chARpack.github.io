---
title: Start Server
---

## Collaboration
The package chARp also supports collaboration with multiple client devices.
Currently, this restricts the list of devices to the HoloLens2.
However, we're planning on increasing the pool of supported devices and also allow hybrid environments, such as AR and VR in the same scene.

## Hosting
It is recommended to either start the server scene in the Unity editor or run a build of chARp on a normal desktop machine.
Make sure the machine that operates the server is reachable in the network and from the devices.
The connection operates on port 9050 and the LAN discovery on port 9051.
If you want to connect to a machine outside of your network make also sure that port 9050 is forwarded to the machine that acts as server.
In case you cannot operate on these two ports, you have to go to
```
Assets > scripts > networking > LoginData.cs
```
and change the port information in this file.
To be able to benefit from these changes, all compiled and deployed versions of chARp have to be recompiled and redeployed.

When everything is set up to start the server either start the server scene directly by double clicking 
```
Assets > Scenes > ServerScene
```
in Unity editor directly, or press the **Host** button in the login screen.
