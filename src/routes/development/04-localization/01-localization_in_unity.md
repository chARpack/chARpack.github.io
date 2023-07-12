---
title: Unity's localization features
---

## General
Unity offers built-in support for multi language interfaces.
For further information and guides, check the <a href="https://docs.unity3d.com/Packages/com.unity.localization@1.3/manual/Installation.html" target="_blank">official documentation</a>.
In this localization section of the development guide we discuss the implementation of localization into chARp.

## Adding locales
The molecular builder currently supports English and German languages, while English is the default locale.
To implement further locale support, go to `Edit > Project Settings > Localization` and select *Locale generator*.
Check the boxes next to all locales you wish to add and select *Generate Locales*.
Locales are saved in `Assets/Locales`.
Now you need to add translations for the new locale in all string tables and asset tables.
Also, edit the *switchLanguage* method in `Assets/scripts/appSettings.cs` since the current implementation only uses two languages.

> How to switch the default language?

## Adding translations
In the current version of chARp , two string tables contain all translations for the project.
In the localization table editor labels and their translations can be added or existing labels can be edited.
The editor is accessed via `Window > Asset Management > Localization Tables`.
Under the tab *Edit Table Collection* you can find the already existing tables.
With the drop-down menu *Selected Table Collection* you switch between the tables.
*Elements* contains the names of all atoms that can be instantiated, *My Strings* contains everything else.

<img src="/images/development/locale_tables.png" class="mx-auto max-w-xl" />

To add content, select **Add new entry** and enter translations for each locale as well as a unique key.
In most cases, e.g. if you are only translating a single word, the simplest way is to use the English word as the key.

## Adding tables
The project uses only two tables at the moment, with *My Strings* storing most of the data.
If you need a new table for a specific purpose, go to `Window > Asset Management > Localization Tables` and select the *New Table Collection* tab.
Choose a table type, while the options are *String Table Collection* to localize text, *Asset Table collection* to localize other things like textures.
After that, give the table a name and select **Create**.
Localization tables are also saved in `Assets/Locales`.
You can now access and edit the new table as described above.
For easier access of the new string table from a script, you can create a new helper method like `GlobalCtrl.GetLocalizedString(text)` that uses your new table instead of *My Strings*.
