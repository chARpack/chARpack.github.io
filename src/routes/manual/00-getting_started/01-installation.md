---
title: Installation
---

## Disclaimer
The here described installation process is for developers.
Currently, non-dev users have to go through the same installation process.
However, in the future we're going to offer a binary installation that makes chARp a lot more accessible.


## Unity
Since chARp is developed using the game engine Unity, we first need to install it.
Go to the <a href="https://unity.com/download" target="_blank">download page of Unity</a> and download Unity Hub on your computer.
Unity Hub is a management tool that will help you download and install different versions of Unity.
Once the download is complete, run the installer and follow the on-screen instructions to install Unity Hub.
Here we need to install the correct version of Unity which is <a href="unityhub://2021.3.12f1/8af3c3e441b1" target="_blank">2021.3.12f1</a>.
You can also download the newest version of Unity and update the project, but this is **not recommended**.
Download and install version <a href="unityhub://2021.3.12f1/8af3c3e441b1" target="_blank">2021.3.12f1</a> of Unity.
Make sure that you add the modules **Universal Windows Platform Build** and **Windows Build Support (IL2CPP)** to be able to deploy chARp on the HoloLens2.

> Unity also installs **Visual Studio (VS) 2019 Community Edition**  by default.
> If you want to develop Unity apps, you'll need to add the package **Game development with Unity**.
> To be able to deploy chARp on the HoloLens2 also install the VS module **Universal Windows Platform development**.

For an already installed Visual Studio, you have to add the modules mentioned above via the **Visual Studio Installer**.
Open the installer and click on **Modify** at your preferred version of Visual Studio.
Enable the modules and **Modify** in the bottom right corner to install them.

## Download
To load chARp into Unity you first need to download chARp from our <a href="https://github.com/UniStuttgart-VISUS/chARpMolecularBuilder" target="_blank">GitHub repository</a>.
You click on the green Button **code** and select `Download ZIP` or you use git to clone the project to your disk
```bash
git clone --depth=1 https://github.com/UniStuttgart-VISUS/chARpMolecularBuilder.git
```

## Prepare the Project
Open Unity Hub and select the **Projects** tab.
Use the dropdown next to the button **Open** and select **Add project from disk**.
Put in the location to the root folder of your copy of chARp and confirm the selection.
The project should now show in the list of projects.

> Before we can start the project, we first need to apply some more steps.

Since chARp runs on the HoloLens2, we need to add Microsoft's MRTK tarballs.

### MRTK
Because of their size, MRTK tarballs are not checked into the git repository.
Therefore, the used MRTK packages have to be reinstalled.
Download and run the <a href="https://www.microsoft.com/en-us/download/details.aspx?id=102778" target="_blank">MixedRealityFeatureTool</a> and select chARp's root folder as **Project Path**.
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
For server support of OpenBabel please install the <a href="https://github.com/openbabel/openbabel/releases/latest" target="_blank">latest</a> version (x64 exe).
Take the `OBDotNet.dll` from the OpenBabel install directory and copy it into `Assets/plugins`.
If your system if having trouble to detect all necessary DLLs, check if the OpenBabel install path is added to your `PATH`.
Under Windows go to "Edit the system environment variables" under "Environment Variables..." add the OpenBabel install path to your "Path" variable in the system variables.
Under Linux add the OpenBabel install path to your `PATH` variable.

### NuGet
Download the `.unitypackage` from the latest release of <a href="https://github.com/GlitchEnzo/NuGetForUnity/releases/latest" target="_blank">NuGet for Unity</a>.
To be able to install the `.unitypackage` file of **NuGetForUnity** you have to start the project for the first time.

> Got to UnityHub and single click the project to start it.

This process can take a while.
During the startup Unity will show you an error message, since not all components are installed yet.
For now, you can click **Ignore** and continue with the installation process.
Drag-and-drop the `.unitypackage` into the **Project** section of your Unity window to install it.
A pop-up should open and shows you the files that will be added to the project, click **Import**.
This should add a **NuGet** option to the standard bar of Unity.
Click on 
```
NuGet > Manage NuGet Packages
```
to open the package manager.
In the search bar type in the following packages one by one and install them
```
Microsoft.MixedReality.QR
Microsoft.VCRTForwarders.140
```

### UWP
Next, go to the standard bar of Unity and click
```
File > Build Settings ...
```
Select the option **Universal Windows Platform** on the left and click on **Switch Platform**.

## Test Run
Now chARp should be set up for the first test run.
In the **Project** window of Unity go to
```
Assets > Scenes
```
and double click **LoginScreenScene**.
Press the play button (top center of the Unity window) for running the test.

### Interactions inside Unity editor
Now chARp is running inside Unity editor.
To interact with the menus you can hold `shift` to simulate the left hand and `space bar` to simulate the right hand.
The keys `W`, `A`, `S` and `D` can be used to move in the scene.
`E` will move you up and `Q` will move you down.
Holding `right click` lets you look around in the scene.
Another important interaction is the `mousewheel`.
Scrolling with the mouse wheel moves the currently activated hand forward and backward.
Using the mouse wheel makes it easy to press buttons in chARp.

## Deploy on Device
The basic steps are also fund on the official Microsoft page [here](https://learn.microsoft.com/en-us/windows/mixed-reality/develop/advanced-concepts/using-visual-studio?tabs=hl2).
When the test was successful, you're now ready to deploy chARp to your HoloLens2.
Again, go to 
```
File > Build Settings ...
```
This time, click on **Build**, which opens a folder dialog.
Create a folder named **build** inside the chARp project folder and select it using the dialog.
Unity should start the **Building Player** process.
When finished, got to the freshly created **build** folder and open the `.sln` file that is located there.
This will start up Visual Studio.
In the solution explorer, right click **chARpMolecularBuilder (Universal Windows)** and select **Set as Startup Project**.
Set **Release** as solution configuration and **ARM64** as solution platforms.
Choose **Remote Machine** as device.

### IP of your HoloLens2
To be able to deploy chARp via WiFi, you need to connect your machine that runs Unity to the same network (or a reachable network) as the HoloLens2.
Open the WiFi options on the HoloLens2 and click on **Adaptor Settings**.
Scroll down until you can find the devices IP address.

> Make sure that your HoloLens2 is in [Developer Mode](https://learn.microsoft.com/en-us/windows/mixed-reality/develop/advanced-concepts/using-the-windows-device-portal).

### Back to VS
Right click **chARpMolecularBuilder (Universal Windows)** in the solution explorer again and go to **Properties**.
Make sure you're on the same configuration and platform as set earlier.
Go to the section **Debugging** and put your devices IP address into the field **Machine Name**.
Confirm these settings by clicking **OK**.
In the main bar, click on **Debug** and run the build + deploy by selecting **Start Without Debugging**.

> Running this for the first time requires you to pair your HoloLens2 with Visual Studio.<br>
> Check the [Microsoft documentation](https://learn.microsoft.com/en-us/windows/mixed-reality/develop/advanced-concepts/using-the-windows-device-portal) for instructions.

Successfully deploying chARp on the HoloLens2 should start it automatically.
Now you're ready to use chARp.