---
title: Interacting with Molecules
---

## Moving Atoms
There are two basic ways of interaction with the molecule and atom data in the scene.
The first and probably most intuitive way is to grab an atom with two fingers (the index finger and the thumb) and move it as if you're holding it with your hand.
Here you can completely close the gap between the fingers or leave it a little open (up to 10 mm).
With activated force field, the rest of the molecule follows the dragged atom.
The currently grabbed atom is highlighted by a blue halo around it.
While interacting with atoms, you can use both hands to grab two different atoms and, for example, bring them together.

<img src="/images/manual/atom_interaction.png" alt = "Atom interaction" class="mx-auto max-w-md" />

## Moving the whole molecule
When moving your hand close to the molecule, the edges of an enclosing bounding box are showing.
The corners of this bounding box are a bit larger, which emphasizes their ability to be interacted with.
Grabbing the corner again with two fingers (index and thumb) shows the whole box around the molecule and changes its color to blue;
While holding the corner, you can move the whole molecule without inducing any forces.
Additionally, the rotation of the hand can be utilized for easy positioning of the molecule.

<img src="/images/manual/box_interaction.png" alt="Box interaction" class="mx-auto max-w-md" />

## Create Bonds
Every atom is created with dummy atoms corresponding to their current hybridization.
Using the interaction methods explained above, the dummy atoms of two different molecules can be overlapped.
That should color the two dummies blue.
When the currently grabbed molecule/atom is released while blue, a bond is created.
Creating bonds also works within a single molecule.

<img src="/images/manual/merge.gif" alt="Merge" class="mx-auto max-w-md" />

## Selection
You can select a single or multiple atoms.
For this, you grab the atom just for a brief moment.
The current threshold for the interaction is set to below 200ms, which should give a similar behavior like a mouse click.
The selection highlights the atom and spawns a tool tip.
The tool tip consists of a small frame that shows information and provides the ability for manipulation, and a line that connects the selected atom/object and the tool tip frame.
To deselect an atom, either click on the atom again or press the close button (X) in the tool tip frame.

<img src="/images/manual/select.gif" alt="Select" class="mx-auto max-w-md" />

## Interaction mode
For ease of use, a chain selection functionality has been implemented: When active, a blue line is shown in your finger direction.
Grabbing an atom in this mode will automatically select the entire chain of atoms in this direction. You can therefore move all its atoms at once.
By default, this interaction mode is inactive. You can toggle the behaviour by pressing the **Chain mode** button in your left palm.

<img src="/images/manual/chain_mode.gif" alt="Chain Mode" class="mx-auto max-w-md" />

## Measurement mode
In **Measurement mode** you can measure the distance or the angle between specific atoms that can also be from two different molecules.
This feature can help you to analyze the structure of a molecule or position molecules and atoms in the scene relative to each other.
Measurement mode freezes the entire scene so input can not accidentally change any position or rotation of atoms an molecules anymore.

By applying a selection gesture on an atom, a measurement will be initialized.
At first, the measurement will be attached to the tip of your index finger until you select another atom and thereby fix the measurement.
A simple measurement between two atoms will draw a dashed line between them, labelled with their current distance in Angstrom.
Adding another measurement to an atom that already is part of a measurement, shows the angle between their respective distance lines.
The applied measurements are updated live when manipulating atoms or molecules again when outside of the Measurement mode.

<img src="/images/manual/measurement.gif" alt="Measurment Mode" class="mx-auto max-w-md" />

