## rtMedia for Advanced Users

rtMedia can be used anywhere in the form of an **uploader** and a **gallery**.

#### rtMedia Uploader

* Use the shortcode `[rtmedia_uploader]` in any WordPress area like a post, page or custom post.
* Use template tag`<?php rtmedia_uploader() ?>` in relevant areas of your themes files
* Every upload is associated with the context, which can be a BuddyPress profile/group, WordPress post/page, custom post type or another plugin.
* rtMedia tries to guess context for WordPress, BuddyPress and bbPress areas. For other plugins, an API can be used to define context.

The uploader shortcode can be used in any WordPress area, such as a page as follows:

[![rtMedia uploader on page](https://rtcamp.com/wp-content/uploads/2013/08/rtMediaUploaderOnPage.png)](https://rtcamp.com/wp-content/uploads/2013/08/rtMediaUploaderOnPage.png)

More details on the [uploader shortcode can be found in the documentation page](/shortcodes/upload-shortcode.md)

#### rtMedia Gallery

* You can display a media gallery anywhere on your site using: Shortcode`[rtmedia_gallery]` or template tag `<?php rtmedia_gallery(); ?>`.
* The gallery can be usually accessed by appending`/media`at the end of a WordPress URL. If it is a valid context, media uploaded from rtMedia Uploader will show up, as you can see in the picture below.

![media display](https://cloud.githubusercontent.com/assets/1140051/7677571/c5db12c6-fd6a-11e4-9a2f-b2e5fca90ec6.png)

More details on the [gallery shortcode can be found in the documentation page](/shortcodes/gallery-shortcode.md).
