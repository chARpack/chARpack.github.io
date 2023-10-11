---
title: Login Screen
---

## Pressing Buttons
Pressing a button on the HoloLens2 may feel a bit off the first time you're using it.
The best way is to pretend it's a real button and try to press it all the way through.
When your finger gets close to the button, you should see some visual feedback.
When the button got pressed successfully you'll be notified by a kind of clicking sound.


## Menus
Entering chARp you're put into a menu environment, where you can choose the mode of operation.

<img src="/images/manual/login_screen.png" alt="Login Screen Menu" class="mx-auto max-w-md" />

The **Login Menu** is designed as a so called **Near Menu**, which means by default it will follow you around.
To stop that behavior press the **Follow Me** button.
This lets the menu stay in the same position in the room.
By grabbing the Login Menu on top or the boarders, you can place it somewhere else in the room.
Pressing the **Follow Me** button again lets the menu follow you around again.
The button **Quit** obviously closes chARp.

#### Normal
Pressing the button **Normal** puts you into the main building environment.
For more details on this mode see the section [Normal Mode](/manual/02-normal_mode) of the manual.

#### Connect
The button **Connect** lets you connect to a chARp server that is hosted in your network.
The number in brackets behind the text gives an indication of how many servers are visible at the moment in the network.

#### Host
**Host** will start a dedicated server on the device or an instance of chARp on your workstation.

> It is recommended to start the server via Unity on your workstation and not on the device.

This is because not all features of the server are supported on the HoloLens2.
Additionally, running a server on the HoloLens2 can only work by starting chARp twice, once as dedicated server and once to connect as a client.

#### Scan QR
The button **Scan QR** lets you scan room anchors for collaboration in the same room.

#### Debug Log
Pressing the **Debug Log** button opens the debug window (see below).
Similar to the functions of the **Login Menu** the debug log has a follow me function and can be placed by grabbing the top bar.

<img src="/images/manual/debug_log.png" alt="Debug Log" class="mx-auto max-w-sm" />

Each entry of the debug log is clickable to get access to the stack trace.
Using a scroll gesture like on a smart phone lets you scroll through the contents of the debug log.
Behind some message you will see a number in brackets.
This number indicates how often this message was written to the log.
If there is a severe problem, the number behind an error message will rise quickly.
Normal debug output is displayed in white text, warnings in orange and error messages are displayed in red color.
Checking the debug log and stack trace of the messages makes analyzing errors on the device significantly easier.

> If you encounter any unexpected errors, please let us know via the **Issue Tracker** in our GitHub repository.

Just use the **Go to GitHub** button in the navigation bar on top.