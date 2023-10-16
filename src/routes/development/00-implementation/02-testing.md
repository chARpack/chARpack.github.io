---
title: Testing Changes
---

In order to ensure the program functions as expected, test whether the following functions and features still work after every major change:

## Creating, moving and merging molecules
chARps most fundamental functions are interactions with atoms and molecules. 
They should be unaffected by most changes, but always test the basic actions like creating, merging, deleting, moving and splitting.

## Selecting and deselecting
The selection of Atoms and molecules is outlined differently to selecting bonds.
Also, each type of selection spawns a different types of tool tip.

## Networking
When implementing a new feature, consider whether it will need to be broadcast to other collaborators and if so, test whether the communication works correctly.

## Tool tip functionalities

### Copy
The copy function should create a duplicate of the current selected molecule slightly above it.

### Scale
Pressing the scale button should create a scaling slider which can be used to scale the molecule up or down.

### Freeze
This button should the molecule/atom in a frozen state, meaning it cannot be moved or otherwise manipulated.
The indicator on the button should change color when pressed. 
The atoms in the molecule should also gain a different texture when frozen and return to their normal state when unfrozen.

### Toggle Dummies
This button should replace all dummies with hydrogen atoms or the other way around.

### Delete
When clicking this button, the molecule should disappear along with all tool tips, sliders or other objects not associated with the rest of the scene.

### Close
When pressed, this button should close the tool tip.

Only the **Delete** and the **Close** button should cause the tool tip to disappear.

## Working with scaled and rotated molecules
Molecules having a different scale than the default can sometimes cause problems.
Make sure they can be manipulated just like their unscaled versions.
Testing changes in the Unity editor usually spawns molecules without any rotation applied.
However, moving molecules on the HoloLens will always apply a rotation.
Therefore, make sure your implementation is independent of the current molecule rotation.