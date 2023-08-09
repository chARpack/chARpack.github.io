---
title: Using Unity
---

## General
Unity is a well-known game development engine. 
chARp uses it as a development basis since it provides many useful functionalities.
This is only intended as a short introduction; for more detailed explanations, see the [Unity documentation](https://docs.unity.com/).

Unity has two basic modes: editor mode and game mode.
Editor mode is where you develop, make permanent changes and spend most of your time.
Game mode is basically a test mode that simulates how chARp would run in its current configuration on a HoloLens.

## The Unity editor
The layout of the Unity editor can be confusing at first, so a short overview might be useful:

<img src="/images/development/unity_editor.png" alt="Unity Editor" class="mx-auto max-w-xl" />

1. **Command bar**
You can find project settings and build options, create game objects, define preferences and much more from this bar.
2. **Toolbar**
This bar provides some basic settings for the game and most importantly the **Play**, **Pause** and **Stop** buttons for controlling game mode.
3. **Scene view**
You can navigate the current scene in this view. It shows a lot more detail than game mode, e.g. the local coordinate systems of selected objects or box colliders
(box colliders are used to detect when an object "collides" with something else, for example when the player touches it).

<img src="/images/development/scene_view.png" alt="Scene View" class="mx-auto max-w-xl" />

4. **Game view**
In editor mode, this window is not too interesting; in game mode, this is where the game runs and you can interact with it.
5. **Hierarchy**
The hierarchy shows the objects in the current scene, hierarchically ordered by parent-child-relations or the structure (child objects) of the currently selected object.
6. **Inspector**
The Inspector allows you to view the properties of any object, prefab, texture etc.
This includes Transforms (where the object is located), components (scripts that describe its behaviour), child objects and more.
7. **Console**
The console gives you important background information: If there are any errors (during compilation or at runtime), they will appear here.
If you have decided to log certain actions with messages, they will also be shown here.
8. **Project view**
This gives you an overview over all the files and folders included in the project.
Clicking any file will open it in the Inspector so you can view its properties.

Of course you can customize the appearence of the editor to your liking. Simply click and drag the title of a window to relocate it or drag on its borders to resize it.

## Scripting
Scripts are files attached to game objects, mostly to describe their behaviour in the scene.

Unity uses C# (C Sharp) as a programming language. If you followed the described installation process, **Visual Studio 2019 Community Edition** should already be installed on your computer, as well as the modules **Game development with Unity** and **Universal Windows Platform development**. We recommend using it as your code editor.
Double click on a script in the Project view to open it in your editor.

Any script intended to work with Unity needs the line 
```csharp
using UnityEngine;
```
at the top. This is already included by default if you create a new script by right clicking in the project view (in the folder your script should be placed in), then selecting `Create > C# Script`.

The object a script is attached to can be accessed from within the script under the name `gameObject`.

### Components
The scripts attached to a GameObject (any object in any scene) are often referred to as components.
You may sometimes wish to access a method from a specific component of the GameObject you are currently working with:
```csharp
currentObject.GetComponent<UsefulComponent>().doSomething();
```

## Prefabs
Prefabs are "prefabricated" objects; you can interpret them as a recipe for making a specific kind of object.
Any time you need an object made from this recipe, you **Instantiate** the prefab.

If you want an instance of a prefab permanently in a scene, you can simply drag it into the Hierarchy of the selected scene. 
You can then edit it (some changes require "unpacking" the prefab first, which means removing the objects connection to its prefab), add or remove components etc.
Some prefabs already contain custom scripts and methods that will be called on specific events (e.g. a button being clicked).
However, remember to only use methods from the scripts that are attached to the prefab itself.

Prefabs can be instantiated within scripts:
```csharp
GameObject myPrefab = (GameObject)Resources.Load("path/to/prefab");
Instantiate(myPrefab);
```
The **Instantiate** command also accepts intended position and rotation of the prefab instance as optional arguments.