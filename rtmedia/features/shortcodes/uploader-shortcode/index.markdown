---
author: saurabhshukla
comments: false
date: 2013-06-04 15:16:59+00:00
layout: page
slug: uploader-shortcode
title: Uploader Shortcode
wordpress_id: 39005
---

[[rtmedia_uploader context="post" context_id="2" album_id="34" privacy="40"]]



Displays the rtMedia anywhere uploader. The simplest way to use this shortcode is:

    
    [[rtmedia_uploader]]




## Options




context
    



	
  * a post_type (post, page, event, topic, reply, etc)

	
  * a BuddyPress Component (activity, profile, group)

	
  * a custom context, registered via code


This sets the context in which the media is uploaded. If not provided, the uploader assumes the current post type as the context. If BuddyPress is installed, the context is assumed to be the component on the current page. If bbPress is installed and user is on a forum, the context is set to the current topic or reply.


context_id
    



	
  * id of the current post_type (post, page, event, topic, reply, etc)

	
  * id of the current BuddyPress Component (activity, profile, group)

	
  * id of a custom context, registered via code


This provides the unique id of the context. For custom contexts, the database table and the id column have to be registered via code.


album_id
    Specifies the album that the media must be uploaded to. If not specified the media will be added to the default 'Wall Posts' album.
privacy
    Sets the privacy level of the uploaded file. If the user has set a default privacy, it will default to that. Else, it defaults to the sitewide privacy
media_type
    Type of media (photo, video, music ) to be uploaded using the shortcode. rtMedia PRO users can also specify media type as "document" or "other" for document and other media types as required.
