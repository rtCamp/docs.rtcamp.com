---
comments: false
date: 2013-07-10 13:13:08+00:00
layout: page
slug: templating-system
title: Templating System
---

**Note:** You may [try this quick-fix first](https://rtcamp.com/rtmedia/docs/developer/templating-system/theme-media-tab/), which solved more than 90% theme compatibility issue.


The templating system in rtMedia works in a standard way.


## Customising Templates


To customise the templates, just copy the `/wp-content/plugins/rtmedia/templates/` or `/wp-content/plugins/buddypress-media/templates/` directory to your current theme's directory and rename it **rtmedia**.

If rtMedia finds the relevant template inside the `{your_theme}/rtmedia/` directory, that is loaded instead of the one included with the plugin.

After this, you can modify the template files to your need.


## Template Files






  * main.php


  * media/album-gallery.php


  * media/album-gallery-item.php


  * media/album-single-edit.php


  * media/media-gallery.php


  * media/media-gallery-item.php


  * media/media-single.php


  * media/media-single-edit.php


  * upload/uploader.php




main.php
    The main template responsible for the rtMedia template outputs
album-gallery.php
    Displays a list of albums
album-gallery-item.php
    Displays a single item in the list on album-gallery.php
album-single-edit.php
    Displays the edit screen of an album
media-gallery.php
    This template is used to display lists of media, when using the shortcode or on a BuddyPress component.
media-gallery-item.php
    Used to render each media item/album in a gallery view
media-single.php
    Used for displaying a single media item (for example, in the lightbox)
media-single-edit.php
    Displays the edit screen for a single media
uploader.php
    Used for displaying the _Anywhere_ uploader using the shortcode or on BuddyPress components



## Important Notes


Since, a lot of features of rtMedia depend on javascript, it is not advisable to change the markup a lot. It is also not advisable to remove any class or id definitions. At the most, additional classes should be added. Any additional data that needs to be displayed in any of the templates should be via appropriate hooks and filters.

{% include themes/rtcamp/modules/child-pages.html context=page.url depth=1 %}
