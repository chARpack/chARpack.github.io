---
title: Testing Changes
---

In order to ensure the program functions as expected, it is advisable that after every major change or new functionality implemented,
you test whether the following still work:

## Creating, moving and merging molecules
ChARps most fundamental functions are interactions with atoms and molecules. 
They should be unaffected by most changes, but always test the basic actions like creating, merging, deleting, moving and splitting.

## Selecting and deselecting
Atoms, bonds and molecules are outlined in different colors when selected. This also spawns different types of tool tips.

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

## Working with scaled molecules
Molecules having a different scale than the default can sometimes cause problems. Make sure they can be manipulated just like their unscaled versions.