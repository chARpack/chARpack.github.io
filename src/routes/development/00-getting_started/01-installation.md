---
title: Installation
---

## Unity
Since chARpack is developed using the game engine Unity, we first need to install it.
Go to the <a href="https://unity.com/download" target="_blank">download page of Unity</a> and download Unity Hub on your computer.
Unity Hub is a management tool that will help you download and install different versions of Unity.
Once the download is complete, run the installer and follow the on-screen instructions to install Unity Hub.
Here we need to install the correct version of Unity which is <a href="unityhub://2022.3.27f1/73effa14754f" target="_blank">2022.3.27f1</a>.
You can also download the newest version of Unity and update the project, but this is **not recommended**.
Download and install version <a href="unityhub://2022.3.27f1/73effa14754f" target="_blank">2022.3.27f1</a> of Unity.
Make sure that you add the modules **Universal Windows Platform Build** and **Windows Build Support (IL2CPP)** to be able to deploy chARpack on the HoloLens2.
To be able to run builds for Android devices like the Meta Quest series, add **Android Build Support** and the connected modules.

> Unity also installs **Visual Studio (VS) 2022 Community Edition**  by default.
> If you want to develop Unity apps, you'll need to add the package **Game development with Unity**.
> To be able to deploy chARpack on the HoloLens2 also install the VS module **Universal Windows Platform development**\*.

\* In recent versions of Visual Studio, this module has been replaced by the **WinUI Application Development** workload, which, among others, contains the necessary
*Universal Windows Platform tools* and a Windows SDK.

For an already installed Visual Studio, you have to add the modules mentioned above via the **Visual Studio Installer**.
Open the installer by selecting `Tools > Get Tools and Features` and click on **Modify** at your preferred version of Visual Studio.
Enable the modules and **Modify** in the bottom right corner to install them.

## Download
To load chARpack into Unity you first need to download chARpack from our <a href="https://github.com/KoehnLab/chARpack" target="_blank">GitHub repository</a>.
You click on the green Button **code** and select `Download ZIP` or you use git to clone the project to your disk
```bash
git clone --recursive --depth=1 https://github.com/KoehnLab/chARpack.git
```

## Prepare the Project
Open Unity Hub and select the **Projects** tab.
Use the dropdown next to the button **Open** and select **Add project from disk**.
Put in the location to the root folder of your copy of chARpack and confirm the selection.
The project should now show in the list of projects.

> Before we can start the project, we first need to apply some more steps.

Since chARpack runs on the HoloLens2, we need to add Microsoft's MRTK tarballs.

### MRTK
Because of their size, MRTK tarballs are not checked into the git repository.
Therefore, the used MRTK packages have to be reinstalled.
Download and run the <a href="https://www.microsoft.com/en-us/download/details.aspx?id=102778" target="_blank">MixedRealityFeatureTool</a> and select chARpack's root folder as **Project Path**.
Click **Discover Features** and activate the following features:

```
Mixed Reality Toolkit >
Mixed Reality Toolkit Foundations
Mixed Reality Toolkit Extensions
Mixed Reality Toolkit Examples
Mixed Reality Toolkit Standard Assets

Platform Support >
Mixed Reality OpenXR Plugin
```
All these features should also appear with the tag "Version x.x.x currently installed".
Click **Get Features** and confirm that step by clicking **Import**.

### OpenBabel
In the current version of chARpack, OpenBabel should automatically be downloaded and installed if it is not already found on the system.
If this is unsuccessful for some reason, you may need to perform a manual installation:

For server support of OpenBabel please install the <a href="https://github.com/openbabel/openbabel/releases/latest" target="_blank">latest</a> version (x64 exe).
Take the `OBDotNet.dll` from the OpenBabel install directory and copy it into `Assets/plugins`.
If your system if having trouble to detect all necessary DLLs, check if the OpenBabel install path is added to your `PATH`.
On Windows go to "Edit the system environment variables"; under "Environment Variables..." add the OpenBabel install path to your "Path" variable in the system variables.
On Linux add the OpenBabel install path to your `PATH` variable.

### NuGet
Download the file `NuGetForUnity.*.unitypackage` from the latest release of <a href="https://github.com/GlitchEnzo/NuGetForUnity/releases/latest" target="_blank">NuGet for Unity</a> (Note: Look for the release page of that project, no need to clone the source tree).
To be able to install the `.unitypackage` file of **NuGetForUnity** you have to start the project for the first time.

> Go to UnityHub and single click the project to start it.

This process can take a while.
During the startup Unity will show you an error message, since not all components are installed yet.
For now, you can click **Ignore** and continue with the installation process.
Drag-and-drop the `.unitypackage` into the **Project** section of your Unity window to install it.
A pop-up should open and shows you the files that will be added to the project, click **Import**.
This should add a **NuGet** option to the menu bar of Unity.
<img src="/images/manual/nuget_menu_bar.png" alt="NuGet Menu Bar" class="mx-auto max-w-xl" />

> Note: If the NuGet option is not available right away, simply close and reload the project.

In case Unity still complains about missing packages, please check the NuGet package manager and verify the installation of the following packages.
Click on 
```
NuGet > Manage NuGet Packages
```
to open the package manager.
In the search bar type in the following packages one by one and install them
```
MathNet.Numerics
Microsoft.MixedReality.QR
Microsoft.VCRTForwarders.140
pythonnet
```

### UWP
Next, go to the menu bar of Unity and click
```
File > Build Settings ...
```
<img src="/images/manual/build_settings.png" alt="Build Settings" class="mx-auto max-w-xl" />

Select the option **Universal Windows Platform** on the left and click on **Switch Platform**.

<img src="/images/manual/switch_platform.png" alt="Switch Platform" class="mx-auto max-w-xl" />

## Test Run
Now chARpack should be set up for the first test run.
In the **Project** window of Unity go to
```
Assets > Scenes
```
and double click **LoginScreenScene**.
Press the play button (top center of the Unity window) for running the test.

> If the content of the **LoginScreenScene** or the **MainScene** occur in purple, you'll need to upgrade the MRTK Standard Shader to Universal Render Pipeline (URP).

Running
```
Mixed Reality > Toolkit > Utilities > Upgrade MRTK Standard Shader to Universal Render Pipeline
```
should fix the problem, and you will be able to see the GUI when running the program.

### Interactions inside Unity editor
Now chARpack is running inside Unity editor.
To interact with the menus you can hold `shift` to simulate the left hand and `space bar` to simulate the right hand.
The keys `W`, `A`, `S` and `D` can be used to move in the scene.
`E` will move you up and `Q` will move you down.
Holding `right click` lets you look around in the scene.
Another important interaction is the `mousewheel`.
Scrolling with the mouse wheel moves the currently activated hand forward and backward.
Using the mouse wheel makes it easy to press buttons in chARpack.

Alternatively, both buttons and molecules in the scene can be interacted with using mouse clicks.

For instructions on deploying chARpack to your device, see the <a data-sveltekit-reload href="/development/00-getting_started/02-deployment">Deployment</a> section.