---
title: Manipulate Equilibrium Structures
---

Apart from exploring the conformational space of the molecules, you can also manipulate the underlying force-field terms in order to enforce specific bond lengths, angles or torsions. Note, that the actual values of the bonds etc. may differ from the equilibrium value due to internal strain. This applies particularly to bonds and torsions. You may use the values for the force constants to drive the structure towards the desired value (other geometry parameters, e.g. bond angles, may change then).

## Bonds
In the previous section one atom was selected, but you can also continue with selecting. 
Successfully highlighting two connected atoms with the click gesture, highlights the two atoms and their bond in a different color.
The tool tip frame now displays information about the bond between the atoms.
The **Modify** button opens a dialog with text input fields, where you are able to change the parameters of the bond.
For a bond these parameters are the equilibrium distance of the atoms and the strength (force constant) of the bond.

## Angles
Selecting a third atom that is connected to one of the other two already selected ones, again swaps the information in the tool tip for the information of the corresponding angle that is formed by the three selected atoms.
Again the equilibrium angle and the strength of the angle term in the force field are modifiable. The higher the force constant, the more the actual angle (including strain) will approach the equilibrium value. Note that too high force constants may create issues with the numerical integration of the equations of motion that are solved in the background.


## Torsions
Selecting a fourth atom that is connected to one of the three already selected ones, gives the option to manipulate the torsion term.
Torsion bonds are characterized by their dihedral angle. 
(Three atoms define a plane in 3D space, therefore the plane of the first three atoms and the plane of the last three atoms are oriented with an angle in between them.)
In case of torsions you can modify the barrier height, the multiplicity *n* of the torsion (number of minima along a full rotation) and the equilibrium phase angle (which determines the equilibrium dihedral angle; note that after ±360°/*n* the potential has another minimum). 
The case of four consecutively connected atoms is also known as a proper torsion.
The improper torsion describes any other combination of four atoms that are connected but not consecutively.

## Selection on Force Field
If your selection has a bond term in the force field, this bond term is highlighted and made available for manipulation.
In case your, for example, four atom selection is not highlighted as torsion, there is also no torsion term for these four atoms in the force field.
