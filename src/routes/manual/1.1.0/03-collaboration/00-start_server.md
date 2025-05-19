---
title: Start Server
---

## Collaboration
The package chARpack also supports collaboration with multiple client devices.
Currently, this restricts the list of devices to the HoloLens2.
However, we're planning on increasing the pool of supported devices and also allow hybrid environments, such as AR and VR in the same scene.

## Hosting
When you run your installation of chARpack on a normal desktop machine, you automatically enter the *Server Scene*, meaning your machine can now act as a server for all other client devices.
Make sure the machine that operates the server is reachable in the network and from the devices.
The connection operates on port 9050 and the LAN discovery on port 9051.
If you want to connect to a machine outside of your network make also sure that port 9050 is forwarded to the machine that acts as server.
