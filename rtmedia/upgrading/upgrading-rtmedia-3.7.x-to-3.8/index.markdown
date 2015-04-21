---
title: Upgrading from rtMedia 3.7.x to 3.8
---

This upgrade guide applies if you have overridden [rtMedia template files](http://docs.rtcamp.com/rtmedia/developer/themes/templating-system/) or created custom themes or plugins using rtMedia plugin hooks/filters.


In rtMedia 3.8, we made changes to the following template files. Use rtMedia templates from buddypress-media folder and override with your existing templates under theme folder. Make sure to cross check and diff the code.
	
* /media/album-gallery-item.php	
* /media/album-gallery.php	
* /media/album-single-edit.php	
* /media/media-gallery-item.php	
* /media/media-gallery.php	
* /media/media-single-edit.php	
* /media/media-single.php
* /upload/uploader.php
 

## Markup Changes

We have removed [foundation](http://foundation.zurb.com/) from rtMedia code. The `rtp-foundation-js` handler is no more in rtMedia code. If you want to continue with foundation, then you must need to include own foundation files and do required changes. 

**Following CSS classes introduced**

* `rtm-load-more`  it used in pagination on media gallery.
* `rtm-media-options-list` used in rtMedia options under media gallery section.
* `rtm-tabs` for all the tabs provided by rtMedia plugin.
* `rtm-media-type-XXX` class added on media-single.php *(where xxx is media type audio/video/)*

If you are using any template file from the above list in your theme, you may need to change template files to provide a seamless rtMedia experience for your users.

If you have any questions, feel free to use [our free support forum](http://community.rtcamp.com/category/rtmedia/).
