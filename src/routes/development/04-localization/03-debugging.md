---
title: Debugging common issues
---

## Problems using the "Track Changes" functionality
### Translation overwriting original text
Sometimes when using the *Track Changes* functionality in `Window > Asset Management > Localization Scene Controls`
you may encounter the following issue: when entering the translation for a second locale (e.g. German) and then switching
back to the locale you used before, the text shown is the one you entered for the second locale.

This is usually due to the *Game Object Localizer* component not tracking to the correct entry (or not tracking to any
entry at all) in the string table. To fix this, open `IconAndText > TextMeshPro` of the object you intend to localize.
At the bottom, you should find the *Game Object Localizer* component.

Example usage of the *Game Object Localizer* component on the **Delete Me** button:
<img src="/images/development/game_object_localizer.png" alt="Game Object Localizer" class="mx-auto max-w-xl" />

When this issue occurs, the *Text* field usually points to **None**, meaning the *Entry* field (nested under *Text*) is empty.
The problem is fixed by clicking on the drop-down menu next to *Text* and explicitly selecting the string table entry corresponding
to your object. If such an entry does not exist because something went wrong earlier, you may need to select **Add Table Entry** and
enter the translations you wish to use.
