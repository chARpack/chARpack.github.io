---
title: Menu
---

## Overview
The **Normal Mode** is the standard working environment of chARp.
Here you can build and change molecules, inspect and manipulate structures and load and save data.
Below the main menu of the normal mode is shown.

<img src="/images/manual/normal_mode_menu.png" alt="Normal Mode Menu" class="mx-auto max-w-md" />

Similar to the **Login Menu** you can toggle the follow me mode using the **Pin Button**.
The button **Exit** brings you back to the login screen.

### Undo
Does what you would expect.
Pressing the **Undo** button once or multiple times will bring the scene back to a state before the last interaction steps.

### Clear All Molecules
Triggering the **Clear All Molecules** button empties the scene completely.
All atoms and molecules are deleted.

### Create Atom
Pressing the **Create Atom** Button spawns a scrollable atom menu at a fixed position within your current view.
This menu can be navigated using the up and down arrows to the right; pressing a button within this menu creates a new atom of the chosen type.

<img src="/images/manual/atom_menu.png" alt="Atom Menu" class="mx-auto max-w-md" />

As already mentioned, atoms are created with dummies attached.
These dummies are used to create bonds or to be switched out for Hydrogen atoms.
The number of dummies depends on the hybridization of the atom.

### Creation Hybridization
When pressing the **Create Atom** button, the displayed number (here 1) is as the hybridization for the freshly created atom.
The numbers correspond to the following hybridizations:

 * 1: sp
 * 2: sp2
 * 3: sp3

The Hybridization can also be adjusted after creation.

### Save/Load
The **Save/Load** button opens another dialog that shows you all the molecule files on your device.
Loading a file adds its contents, which consists of one or multiple molecules, to the scene.
Saving to a file saves the whole content of the current scene.
The files are stored in chARp's internal molecules/scene format.
For saving or loading to different file formats, you need to connect your device to a dedicated chARp server.
Check the later chapters for more information on how to do that.

### Settings
Opens the settings menu.