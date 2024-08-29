---
title: General
---

While many collaborative scenarios require scene content to be synchronised between clients and the server, 
chARpack also provides an alternative hybrid desktop/AR environment.
When **Async Mode** is active, molecules and atoms are not automatically networked between client and server.

In this mode, you can create molecules on the device or the server as normal, but they will not show up on the other side.
You can now manipulate it as you wish; if you want to transfer it from the desktop to AR or vice versa, you will
need to perform one of the actions specified in <a data-sveltekit-reload href="/manual/04-async_mode/01-transition-modes">Transition Modes and Options</a>.

It also provides the ability to interact with molecules on the desktop from the AR environment;
by pointing at the screen, you can control a *Hover Cursor* which highlights molecules it passes over.