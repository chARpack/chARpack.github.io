---
title: Transition Modes and Options
---

chARpack offers three different ways to transfer (transition) molecules between AR and desktop:

### Desktop2D

### Full3D
In this mode, molecules are animated moving in 3D when transitioning to make the interaction feel natural.
By default, molecule scale and rotation are also animated.

### Instant
This mode makes molecules transition instantly from desktop to AR and vice versa; in 2D, they appear in the center of the screen
whereas in AR it appears at the chosen *Immersive Target*.

## Interactions to initiate transition
There are multiple ways available to transition molecules; by default, all of them are active, but you can choose
to only use one of them in the settings on the server.

If the transition is successful, you should hear a ringing confirmation sound.

### Button Press

**AR to Desktop:** Look straight at the desired molecule and then press the **Space** key on your keyboard to transfer.

**Desktop to AR:** Move the **Hover Cursor** over the molecule you want to transfer so its bounding box turns orange 
and then press the **Space** key to move it out of the screen.

### Close Grab
Move your index finger close to the screen. 
Once it is close enough, you should see an arc going from your finger tip to a projected position on the desktop.
Move this arc over a molecule and perform a normal grab gesture with your index finger and thumb to move it to AR while grabbed.

### Distant Grab
Move the **Hover Cursor** over the molecule, then touch your middle finger to your thumb to move a molecule to AR.

### Onscreen Pull
Move the **Hover Cursor** over the molecule you want and perform a normal grab gesture (putting your index finger and thumb together).
You can now pull the molecule on the screen towards you; if you pull it far enough, it leaves the screen and appears in the AR environment. 

### Throw
Grab a corner of the bounding box of the molecule to be transferred to the screen and make a throwing gesture towards the screen; 
the molecule should be transferred to the desktop.

### Flick
Flick your index finger towards a molecule (in direct proximity of your hand). This means you start from a position similar to the grab 
gesture and then straighten your index finger fast. This should move the molecule to the screen.

### Catch
Move the **Hover Cursor** over the molecule to transition and curl your index finger, middle finger and thumb like you are catching a 
small ball to move it to AR.

## Other Options
In the server settings, you can influence some more behaviours of asynchronous mode, for example the *Immersive Target* (where in the
AR environment a molecule should appear when transitioning from the desktop), the *Desktop Target* (where on the desktop the molecule 
should appear) and some animation parameters.

