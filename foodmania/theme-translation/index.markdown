---
title: Theme Translation in Foodmania
---


## Translation Basics
WordPress uses the GNU gettext localization framework for translation.

Foodmania theme contains a language file with the file ending `.pot` which you can use to translate the theme. This is the template file that contains a reference to each text string in your theme that needs translation. This file does not contain any translation.

Now the only thing you have to do is to create a new `.po` file from the `.pot` catalog file, translate all text strings and save the `.po` file with your <a href="http://codex.wordpress.org/WordPress_in_Your_Language" target="_blank">language code</a>. There are different ways to do this.

## Translating Using Codestyling Plugin
You can translate Foodmania by using the <a href="http://wordpress.org/extend/plugins/codestyling-localization/" target="_blank">Codestyling Localization </a> plugin. You can easily manage and edit all gettext translation files `(*.po/*.mo)` directly out of WordPress Admin Center without any need of an external editor.

After you have installed and activated the plugin, simply go to `Tools > Localization` (shown in your language) and translate the theme from your WordPress backend following the <a href="http://www.code-styling.de/english/development/wordpress-plugin-codestyling-localization-en" target="_blank">plugin instructions</a>.

## Translating Using Poedit
POEdit is a fantastic program that gives you the ability to create your `.pot` file, and also provides an easy to use GUI that can be used to make your `.po` and, more importantly, your `.mo` files too.

1. Install <a title="Poedit downloads" href="http://www.poedit.net/download.php" target="_blank">Poedit</a>.

2. Open Poedit and go to `File > catalog from POT file` and select the POT in theme’s languages folder.

3. Translating a line of text is really easy – just select a word or phrase, enter your translation and click “Update.”

4. When you’ve finishing translating, simply save your file. Poedit will automatically create both .po and .mo files in your theme’s languages folder.

5. Now that your theme has been translated, you can upload it to your WordPress install either using FTP or by logging into your WordPress site and uploading your theme by going to Appearance > Themes > Install Themes (after you’ve zipped your theme, of course).

## Setting Up WordPress
If you don’t use WordPress in your language so far, you have to tell WordPress which language to use to activate the theme translation.

You can do this by editing the `wp-config.php` file (the file is located in the main directory of your WordPress files) and defining the WPLANG constant. Your file should already contain `define('WPLANG', '');` but if it does not, you can add it in.

You simply need to add your language and locale code into the define. If you were to translate your theme into German, you would have this:
`define('WPLANG', 'de_DE');`

Your translation is complete!