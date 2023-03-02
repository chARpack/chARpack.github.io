---
title: Menu
---

## Overview
The **Normal Mode** is the standard working environment of chARp.
Here you can build and change molecules, inspect and manipulate structures and, load and save data.
Below the main menu of the normal mode is shown.

<img src="/images/manual/normal_mode_menu.png" alt="Normal Mode Menu" class="mx-auto max-w-md" />

Similar to the **Login Menu** you can toggle the follow me mode using the **Pin Button**.
The button **Exit** brings you back to the login screen.

### Toggle Log
The **Toggle Log** button shows and hides the debug log.
Note: changing scenes does not clear the debug log for easier error detection.

#### Toggle Mesh
This button turns the rendering of the spatial awareness of [OpenXR](https://www.khronos.org/OpenXR/) on and off.
The real world surroundings are detected by your device in a (usually) 2.5 second interval.
Toggling the button does not turn on/off the detection of your surroundings, just the rendered wireframe overlay.

### Toggle Force Field
chARp calculates forces in the background to empirically simulate a semi-realistic molecule behavior.
The forces are integrated using a simple [Euler integration](https://en.wikipedia.org/wiki/Euler_method).
The force field is developed to be responsive, lightweight, and makes it easy to handle objects in the chARp Molecular Builder environment.
Toggling the force field off, stops any calculations in the background and lets every part of the molecule move unhindered (without any force feedback).
This mode comes in handy, when creating a bond within a molecule, but the force field makes it difficult to bring these two dummies together.

### Undo
Does what you would expect.
Pressing the **Undo** button once or multiple times will bring the scene back to a state before the last interaction steps.

### Clear All Molecules
Triggering the **Clear All Molecules** button empties the scene completely.
All atoms and molecules are deleted.

### Replace Dummies
Each spawned atom is created with bonded dummy atoms.
These dummy atoms can be switched to Hydrogen atoms with the **Replace Dummies** button.

### Create Atom
As already mentioned, atoms are created with dummies attached.
These dummies are used to create bonds or to be switched out for Hydrogen atoms.

> Currently in development: Create any atom you want, not only carbon.

The number of dummies depends on the hybridization of the atom.

> Currently in development: Change the hybridization of a selected atom.

### Save/Load
The **Save/Load** button opens another dialog that shows you all the molecule files on your device.
Loading a file adds its contents, which consists of one or multiple molecules, to the scene.
Saving to a file saves the whole content of the current scene.
The files are stored in chARp's internal molecules/scene format.
For saving or loading to different file formats, you need to connect your device to a dedicated chARp server.
Check the later chapters for more information on how to do that.

### Layer Selection
> Deprecated