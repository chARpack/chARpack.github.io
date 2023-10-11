---
title: Settings
---

<img src="/images/manual/settings.png" alt="Settings Menu" class="mx-auto max-w-md" />

All toggle buttons in the settings are equipped with a colored square indicating whether they are currently set to "on" or "off".

### Toggle Mesh
This button turns the rendering of the spatial awareness of [OpenXR](https://www.khronos.org/OpenXR/) on and off.
The real world surroundings are detected by your device in a (usually) 2.5 second interval.
Toggling the button does not turn on/off the detection of your surroundings, just the rendered wireframe overlay.

### Toggle Log
The **Debug Log** button shows and hides the debug log.
Note: changing scenes does not clear the debug log for easier error detection.

### Toggle Force Field
chARp calculates forces in the background to empirically simulate a semi-realistic molecule behavior.
The forces are integrated using a simple [Euler integration](https://en.wikipedia.org/wiki/Euler_method).
The force field is developed to be responsive, lightweight, and makes it easy to handle objects in the chARp Molecular Builder environment.
Toggling the force field off, stops any calculations in the background and lets every part of the molecule move unhindered (without any force feedback).
This mode comes in handy, when creating a bond within a molecule where the force field makes it difficult to bring these two dummies together.

### Hand Toggles
The three buttons on the second row change the hand visuals.
You can have your hand rendered as a mesh, joint visuals or no rendering of the hand tracking.

### Toggle Hand Menu
This button enables or disables use of the hand menu. By default, the menu is enabled for user comfort; if you prefer not using it, you can turn it off using this button.
However, this will also disable the **Chain mode** and **Measurement mode** button since they are part of the hand menu functionality.

### Switch language
This button switches the application's language between German and English.

### Gaze highlighting
Eye tracking is used by chARp to highlight the atom the user is currently looking at. This behaviour is, however, optional and can be toggled using this button.

### Bond Stiffness
The bond stiffness parameter changes the number of force field iterations and therefore the felt stiffness of the molecule.
The number of iterations changes how fast the molecule will go into its minimal state.
A lower number makes the molecules feel rubbery, higher numbers will keep the structure intact.
 > Note: A higher number of iterations means more computational power goes into the force field calculation/iteration.
 > If you experience performance issues, please turn this parameter to 0.
 > This usually happens for scenes with large molecules.

### Repulsion scale
The repulsion scale parameter changes the weighting of the Van der Waals radius for the hard sphere potential in force field computations.
For a high repulsion scale, atoms easily start to move by the proximity of close atoms.
A low repulsion scale may make some changes possible that aren't with a higher number.
However, too low a repulsion scale may cause molecules to get tangled.