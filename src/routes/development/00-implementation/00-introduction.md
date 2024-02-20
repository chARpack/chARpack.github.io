---
title: Introduction
---

## How to develop in chARpack?

In this development guide we explain the fundamental implementation details about chARpack.

## Overview

For a short introduction to the Unity functionalities most commonly used in this project, have a look at our small introduction <a data-sveltekit-reload href="/development/00-implementation/01-unity">Using Unity</a>.

### Important scripts
chARpack is built using many scripts for specific purposes (e.g. a settings script for the settings menu).
However, there are some larger and more important scripts:
- **GlobalCtrl**: This script controls and coordinates most functionalities in the **MainScene**.
It provides the implementation for molecule creation and manipulation, core computations and features like the *Undo* functionality.
- **Molecule**,**Atom** and **Bond**: These scripts contain the characteristic data of molecules, atoms and chemical bonds.
This includes things like a list of connected atoms, a list of bonds in the molecule, methods for spawning tooltips (when selecting a molecule/atom/bond),
the way molecules respond when grabbed or clicked and their interactions with the force field.
- **Login**: Provides the functionality of the **Login** menu (connecting to a server, establishing a common coordinate system by scanning a QR code etc.)
- **ForceField**: Contains different ways to compute and apply the force field to molecules in the scene so they behave realistically.

The folder *HoloLens* contains scripts specifically for the use case of the HoloLens 2.
Most notably, the **myScrollObject** script provides the functionality of a scrollable menu used in both the atom menu and the hand menu.

### Prefabs
The *prefabs* folder contains a few useful prefabs. 

<img src="/images/development/prefabs.png" alt="Prefabs" class="mx-auto max-w-xl" />

Besides the basics like **Atom** and **Bond**, there are also some that are more generally useful.
If you intend to make a new menu, for example, you may find the **CloseMeButton** prefab to be of interest. Other buttons include a **DeleteMeButton** and a **CopyMeButton**.
They contain the HoloLens' **PressableButton** functionality (e.g. touch interactability and the visualizations for pressing the button) as well as icons corresponding
to their respective use cases and a localized main label (text in German and English).
A **SettingsButton** prefab in the specific format used by the settings menu is also provided.

To use a prefab, you only need to instantiate it and assign a method (see the <a data-sveltekit-reload href="/development/04-localization/02-example">button creation example</a> for more details).

There are also prefabs for the different types of menus, tooltips and more.

### Scenes
The project currently contains three different scenes for separate purposes.

#### Main Scene
<img src="/images/development/main_scene.png" alt="Main Scene" class="mx-auto max-w-xl" width="600"/>

This scene provides all the features that are available on the AR device.
However, some functions are only featured on the server.

If you are currently editing something that happens during runtime, you will most likely test it by running the **Main Scene**.

#### Login Scene
<img src="/images/development/login_scene.png" alt="Login Scene" class="mx-auto max-w-xl" width="600"/>

The **Login Scene** is normally only used for a short time during runtime: when starting chARpack.
It provides the interface for connecting to a server for collaboration, accessing the debug log, or scanning a QR code and entering the **Main Scene**.

#### Server Scene
<img src="/images/development/server_scene.png" alt="Server Scene" class="mx-auto max-w-xl" width="600"/>

The **Server Scene** contains the framework for collaboration and is the central node for any network traffic.
In addition, it manages network connections, tracks interactions in the atom world and broadcasts them to other users to keep collaborators synchronized.
Also, the **Server Scene**  provides the ability to interact with molecules/menus using mouse and keyboard.