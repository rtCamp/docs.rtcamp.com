## Upgrading To rtMedia 3.5

This upgrade guide applies to you only if you have overridden [rtMedia template files](../developers/themes/templating-system.html).


## Markup Changes

We have made changes in the markup to the following templates:

* media-single-edit.php
* album-single-edit.php
* playlist-single-edit.php ( [rtMedia Playlists](https://rtcamp.com/products/rtmedia-playlists/) )

## New Hooks Added

### Title and Tab Content hooks

We have added two new hooks:

1. *rtmedia_add_edit_tab_title* - Use this hook to add the tab title.
2. *rtmedia_add_edit_tab_content* - Use this hook to add the content for the tab.

In following templates:

* media-single-edit.php
* album-single-edit.php
* playlist-single-edit.php ( [rtMedia Playlists](https://rtcamp.com/products/rtmedia-playlists/) )

### Playlist Gallery Hook

We also added two new hooks in playlist-gallery-item.php:

1. rtmedia_before_item
2. rtmedia_after_item

If you are using any template file from the above list in your theme, you may need to change template files to provide a seamless rtMedia experience for your users.

If you have any questions, feel free to use [our free support forum here](http://community.rtcamp.com/c/rtmedia).
