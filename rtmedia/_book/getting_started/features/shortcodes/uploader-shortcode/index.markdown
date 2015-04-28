---
title: Uploader Shortcode
---

	[rtmedia_uploader context="post" context_id="2" album_id="34" privacy="40"]



Displays the rtMedia anywhere uploader. The simplest way to use this shortcode is as follows:

	[rtmedia_uploader]




## Options

### context
    

  * a post_type (post, page, event, topic, reply, etc)

	
  * a BuddyPress Component (activity, profile, group)

	
  * a custom context, registered via code


This sets the context in which the media is uploaded. If the context is not provided, the uploader assumes the current post type as the context. If BuddyPress is installed, the context is assumed to be the component on the current page. If bbPress is installed and user is on a forum, the context is set to the current topic or reply.


#### context_id
    
	
  * id of the current post_type (post, page, event, topic, reply, etc)

	
  * id of the current BuddyPress Component (activity, profile, group)

	
  * id of a custom context, registered via code


This provides the unique id of the context. For custom contexts, the database table and the id column have to be registered via code.


### album_id

Specifies the album that the media must be uploaded to. If not specified the media will be added to the default 'Wall Posts' album.

### privacy

Sets the privacy level of the uploaded file. If the user has set a default privacy, it will default to that. Else, it defaults to the site wide privacy.

### media_type

Type of media (photo, video, music ) to be uploaded using the shortcode. rtMedia PRO users can also specify media type as "document" or "other" for document and other media types as required.

### Examples 

Upload media to the specific album id ( Default Album ).

	[rtmedia_uploader album_id=125]

Upload media to a BuddyPress group ( group_id #1 ) under album id #48.

	[rtmedia_uploader context=group context_id=1 album_id=48]

Upload media to a page ( page_id #11 ).

	[rtmedia_uploader context=page context_id=11 album_id=1]

Upload media ( only photos ) with privacy level.

	[rtmedia_uploader album_id=1 privacy=20 media_type=photo]

Note: Default rtMedia **privacy levels** and their values are as follow :

	
  1. Public : 0

	
  2. Logged in user : 20

	
  3. Friends : 40


  4. Private : 60


This privacy levels will have their effect to uploader shortcode only if 'Allow users to set privacy for their content' option from Privacy tab is set to ON under rtMedia admin settings otherwise, the privacy you are setting with the uploader ShortCode page ( or with any post ), will be overridden by the default privacy set under 'Privacy Settings'.

