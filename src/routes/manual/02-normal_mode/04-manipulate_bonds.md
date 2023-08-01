---
title: Manipulate Bonds
---

## Single Bonds
The next step from selecting a single atom is to select two connected atoms.
Successfully highlighting two connected atoms with the click gesture, highlights the two atoms and their bond in a different color.
Additionally, the tool tip frame now displays information about the bond between the atoms.
The **Modify** button opens a dialog with text input fields, where you're able to change the parameters of the bond.
For a single bond these parameters are the equilibrium distance of the atoms and the strength of the bond.

## Angle Bond
Selecting a third atom that is connected to one of the other two already selected ones, again swaps the information in the tool tip for the information of the corresponding angle bond that is formed by the three selected atoms.
In the same way as for the single bond the equilibrium angle and the strength of the bond are modifiable.


## Torsion Bond
Selecting a forth atom that is connected to one of the three already selected ones, gives the option to manipulate the torsion bond term.
Torsion bonds are characterized by their dihedral angle.
Three atoms form a plane in 3D space, therefore the plane of the first three atoms and the plane of the last three atoms are oriented with an angle in between them.
This angle is again modifiable by the equilibrium angle parameter, as well as the corresponding bond strength.
The case of four consecutively connected atoms is also known as a proper torsion.
The improper torsion describes any other combination of four atoms that are connected but not consecutively.

## Selection on Force Field
If your selection has a bond term in the force field, this bond term is highlighted and made available for manipulation.
In case your for example four atom selection is not highlighted as torsion, there is also no torsion term for these four atoms in the force field.
