---
title: Interacting with Molecules
---

## Moving Atoms
There are two basic ways of interaction with the molecule and atom data in the scene.
The fist and probably most intuitive way is to grab an atom with two fingers (the index finger and the thumb) and move it as if you're holding it with your hand.
Here you can completely close the gap between the fingers or leave it a little open (up to 10 mm).
With activated force field, the rest of the molecule follows the dragged atom.
The currently grabbed atom is highlighted by a blue halo around it.
While interacting with atoms, you can use both hands to grab two different atoms and, for example, bring them together.

<img src="/images/manual/atom_interaction.png" alt = "Atom interaction" class="mx-auto max-w-md" />

## Moving the whole molecule
When moving your hand close to the molecule, the edges of an enclosing bounding box are showing.
The corners of this bounding box are a bit larger, what emphasizes their ability to be interacted with.
Grabbing the corner again with two fingers (index and thumb) shows the whole box around the molecule and changes its color to blue;
While holding the corner, you can move the whole atom without inducing any forces.
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