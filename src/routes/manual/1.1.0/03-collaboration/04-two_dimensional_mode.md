---
title: Two-Dimensional Mode
---

In the server settings panel, you can activate **2D Mode**.
In this mode, the camera shows the scene in an orthographic instead of a perspective view and molecules can be represented by their structure formulas instead of the usual three-dimensional visualization.
Activating this mode automatically turns off the force field; you can manually reactivate it in the settings.

The normal three-dimensional visualization:
<img src="/images/manual/3d_mode.png" alt="3D Mode" class="mx-auto max-w-md"/>

Looks like this when 2D mode is activated:
<img src="/images/manual/2d_mode.png" alt="2D Mode" class="mx-auto max-w-md"/>

You can also morph molecules in 2D mode from their structure formula representation to a normal 3D representation while staying in orthographic view. 
To do this, open the debug console (see the **Info** panel for the keyboard shortcut) and enter *morphMol3D* to morph to 3D or *morphMol2D* to morph back to structure formula representation.
Note that 2D mode does not support the cartoon-style shading used by default for molecules in the server scene and uses a more realistic shading approach instead.