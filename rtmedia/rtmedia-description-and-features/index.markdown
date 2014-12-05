---
date: 2013-08-19 09:06:34+00:00
excerpt: This is the user documentation page for rtMedia.
layout: page
slug: rtmedia-description-and-features
title: rtMedia End-User Documentation
---

## Overview of rtMedia


rtMedia is a comprehensive media plugin for WordPress to help users organize their media elements, namely, photos, audio and video. A number of premium add-ons are also available to enhance the free version.

The plugin is developed to be mobile friendly and has been tested on iPhone/iPad. Android, BlackBerry and Windows Mobile.


## Checklist


This list of questions will help you understand how rtMedia will boost your media experience with WordPress:



	
  * Are you thinking of organizing media galleries on your WordPress site, and linking them to author profiles?

	
  * Do you run a niche community using BuddyPress, and have felt the need to associate photos, audio and video with members activities?

	
  * Do you run the bulletin board plugin bbPress, and wish to attach media during forum discussions?

	
  * Did you or your niche community members shoot videos with your favorite camera, and need to display them on your WordPress site?


If your answer to any of these questions is 'yes', rtMedia is for you.


## Server Requirements


You'll need to check with your site's administrator if the following conditions are fulfilled:



	
  * The cURL and GD libraries should be enabled.

	
  * WordPress 3.0 or later needs to be running.

	
  * PHP 5.3 or above should be installed.




## Installation


Installing rtMedia is easy. Choose from two options to install the plugin:



	
  * Log in to your website's admin dashboard.

	
    * On your admin sidebar, go to Plugins->Add New

	
    * Click the 'Search' tab, and in the search bar, type 'rtMedia' and click 'Install Now' when you find the relevant result.

	
    * On the next screen, click on 'Activate Plugin'




	
  * Go to [rtMedia's plugin directory page on WordPress.org]( http://wordpress.org/plugins/buddypress-media/) and click the download button.

	
    * On your admin sidebar, go to Plugins->Add New

	
    * Click the 'Upload' tab, and choose the file you downloaded.

	
    * Click the 'Install Now' button, and wait for your site to complete the installation.





Using rtMedia


### rtMedia with standalone WordPress


In the first place, you'll want to check out the settings tabs of rtMedia in your site's admin backend.

In your admin backend, go to rtMedia->Settings.

![rtMedia General Settings](https://rtcamp.com/wp-content/uploads/2013/08/rtMediaSettingsGeneral.png)


### rtMedia for advanced users


rtMedia can be used anywhere in the form of an **uploader** and a **gallery**.


#### rtMedia Uploader





	
  * Use the shortcode `[[rtmedia_uploader]]` in any WordPress area like a post, page or custom post.

	
  * Use template tag`<?php rtmedia_uploader() ?>` in relevant areas of your themes files

	
  * Every upload is associated with the context which can be a BuddyPress profile/group, WordPress post/page, custom post type or another plugin.

	
  * rtMedia tries to guess context for WordPress, BuddyPress and bbPress areas. For other plugins, an API can be used to define context.


[caption id="attachment_44472" align="alignnone" width="668"]![rtMedia uploader on page](https://rtcamp.com/wp-content/uploads/2013/08/rtMediaUploaderOnPage.png) The uploader shortcode can be used in any WordPress area, such as a page like this one.[/caption]



	
  * More details on the [uploader shortcode can be found in the documentation page](https://rtcamp.com/rtmedia/docs/common/shortcodes/uploader-shortcode/).




#### rtMedia Gallery





	
  * You can display a media gallery anywhere on your site using: Shortcode`[[rtmedia_gallery]]` or template tag `<?php rtmedia_gallery(); ?>`.

	
  * The gallery can be usually accessed by appending`/media`at the end of a WordPress URL. If it's a valid context, media uploaded from rtMedia Uploader will show up, as you can see in the picture below.


[caption id="attachment_44184" align="alignnone" width="549"]![/media at the end of a URL ](https://rtcamp.com/wp-content/uploads/2013/08/mediaAtEndOfURL.png) Appending /media at the end of a URL will display the media gallery associated with that URL.[/caption]



	
  * More details on the [gallery shortcode can be found in the documentation page](https://rtcamp.com/rtmedia/docs/common/shortcodes/gallery-shortcode/).




#### Featured Media


Using a template tag as [described on this documentation page](https://rtcamp.com/rtmedia/docs/admin/featured-media), featured media can be displayed on the user profile as a cover photo/video.


#### Template system


You can completely customize rtMedia by modifying the template files. Simply copy them to the template folder to your theme and make the necessary edits.


## BuddyPress Integration




##  rtMedia works independently of BuddyPress, but if you run a niche community using BuddyPress, rtMedia brings to you some valuable features:





	
  * Add a media tab to BuddyPress Profiles and Groups.


[caption id="attachment_44490" align="alignnone" width="702"]![Media tab in BuddyPress](https://rtcamp.com/wp-content/uploads/2013/08/rtMediaBuddypressMediaTab.png) Media tab in BuddyPress.[/caption]



	
  * Attach media to status updates that appear in the activity feed.

	
  * Display activity updates whenever media is uploaded.




## bbPress Integration (_under development)_





	
  * Media will be attached to forum posts and replies.

	
  * All attached media will be well-organized. For example, it will be displayed in profiles of members who upload them.




## Albums





	
  * Albums can organize your media. Since rtMedia 3.0, you can create albums _without needing BuddyPress_.

	
  * A lightbox appears to present a slideshow of media items in an album.

	
  * You can move media between albums and merge albums.

	
  * Global albums can be used to define preset albums. "Wall Posts" is an example of global album.


![rtMedia Album](https://rtcamp.com/wp-content/uploads/2013/08/rtMediaAlbum1.png)



	
  * Albums can be disabled if you do not wish to use them.




## Privacy





	
  * Various privacy levels for each media element is allowed.


[caption id="attachment_44311" align="alignnone" width="622"]![rtMedia Privacy Settings](https://rtcamp.com/wp-content/uploads/2013/08/rtMediaPrivacySettings2.png) User privacy preferences can override settings made in the rtMedia's backend panel...[/caption]

[caption id="attachment_44320" align="alignnone" width="574"]![rtMedia can be set to allow user settings to override backend settings.](https://rtcamp.com/wp-content/uploads/2013/08/rtMediaUserOverridingPrivacySettings.png) ...and if the 'User Override' setting in rtMedia's backend is enabled, a dropdown appears in the uploader, allowing you to choose who sees your media.[/caption]



	
  * True privacy on regular BuddyPress activities is made possible.

	
  * Privacy works with BuddyPress friends disabled and with standalone WordPress too.




## Premium Features




#### Audio/Video Conversion


rtMedia has 3 premium solutions to take care of audio/video conversion.



	
  * [Audio/Video Encoding Subscription Service](https://rtcamp.com/rtmedia/addons/audio-video-encoding-service/) - Easy to setup monthly subscription service.

	
  * [FFMPEG-Addon](https://rtcamp.com/store/buddypress-media-ffmpeg-converter) - Requires FFMPEG & Media-Node installed on a VPS/Dedicated server.

	
  * [Kaltura-Addon](https://rtcamp.com/store/buddypress-media-kaltura) - Requries a Kaltura.com account or Kaltura-CE or Kaltura-on-Prem server.


If all your music files is in mp3 formats and videos in mp4 formats, you may not need any of the above add-ons.


#### Images Addons





	
  * [Instagram-Effects](https://rtcamp.com/store/buddypress-media-instagram): User can apply Instagram like filters to photos.

	
  * [Photo-Tagging](https://rtcamp.com/store/buddypress-media-photo-tagging/): Users can tag their friends/other users in photos, just like Facebook.




## Coming Soon - Premium Addons on the way





	
  * **Watermark Addon** - This will add advanced, customized watermark text to photos. Support for Google Fonts will be included._(Development is completed, and testing is underway.)_

	
  * **Membership Addon** - Users will be given controlled upload quotas and media type access on their profiles and groups. _(Planning stage is underway)_


