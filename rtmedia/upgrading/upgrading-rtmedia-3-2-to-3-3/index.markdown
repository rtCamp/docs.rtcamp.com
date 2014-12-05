---
title: Upgrading from rtMedia 3.2.x to 3.3.x
---

This upgrade guide applies to you **only** if you have overridden [rtMedia template files](https://rtcamp.com/rtmedia/docs/developer/templating-system/).


## Markup Changes


In rtMedia 3.3.x (3.2.13 to be exact), we made changes to the following template files:



	
  * media-single.php

	
  * media-single-edit.php

	
  * album-single-edit.php




## New Hooks Added


We also added new hooks in the following templates:


### Inside media-single.php


When single media is displayed in a lightbox:



	
  * rtmedia_action_buttons_after_media

	
  * rtmedia_actions_before_description

	
  * rtmedia_actions_before_comments


When single media is displayed without lightbox, on its own page:

	
  * rtmedia_actions_before_description

	
  * rtmedia_actions_without_lightbox




### Inside album-gallery.php





	
  * rtmedia_after_album_gallery_title




### Inside media-gallery.php





	
  * rtmedia_after_media_gallery_title


If you are using any template file from the above list in your theme, you may need to change template files to provide a seamless rtMedia experience for your users.

If you have any questions, feel free to use [our free support forum](https://rtcamp.com/support/forum/rtmedia/).
