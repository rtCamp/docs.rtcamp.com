---
author: saurabhshukla
comments: false
date: 2013-06-04 15:13:06+00:00
layout: page
slug: upload-endpoint
title: Upload Endpoint
wordpress_id: 39001
---

**Read Me**: This documentation is for rtMedia 3.0. rtMedia is a successor of BuddyPress Media, and is [_currently under development_](https://rtcamp.com/news/getting-ready-for-rtmedia/). Parts of this document may not be implemented in the [code](https://github.com/rtCamp/buddypress-media/tree/rtmedia), yet. Not recommended for production environments.


The upload endpoint is accessible on any WordPress url at `/upload/`. This means that the upload endpoint is available at:



	
  * _http://yoursite.com/upload/_ (home)

	
  * _http://yoursite.com/some-blog-post/upload/_ (a blog post)

	
  * _http://yoursite.com/events/some-event/upload/_ (a custom post type)

	
  * _http://yousite.com/members/username/upload/_ (a BuddyPress profile)

	
  * and so on, on any WordPress url




## Read/Write Methods


The upload endpoint only supports a $_POST request and returns a 404, not found error on a $_GET request, as when requested by a browser.


Needless to say, the upload endpoint will only work (as will rtMedia) when [pretty permalinks](http://codex.wordpress.org/Using_Permalinks) are enabled.





## The upload object


The upload endpoint POST method accepts the following $_POST fields, along with the $_FILES array. What follows is a brief description. Please look at the Upload Object for more details.



	
  * mode

	
  * context

	
  * context_id

	
  * media_author

	
  * privacy

	
  * custom_fields

	
  * taxonomy

	
  * album_id

	
  * files

	
  * title

	
  * description

	
  * rt_media_upload_nonce




mode (optional)
    The possible values and their meaning for the upload endpoint.



	
  * **file_upload** (default): Files are being uploaded from the users' hard drive

	
  * **link_input**: A url needs to be imported

	
  * and any custom mode that has been registered via custom hooks and filters



context (optional)
    The context in which the upload needs to be processed. If not provided, the endpoint will figure out the current context depending on the current WordPress url. On a single post type, the context will be set to the name of the post type (for eg, post, page, event, etc). On a BuddyPress page, the context will be the current component. A custom context can also be hooked in. Although, this parameter is optional, it must be specified if a context_id is specified.
context_id (optional)
    This is the unique id of the context. If not specified, the current context_id is assumed. On a single post type, the post ID becomes the context_id. On a BuddyPress component, the component id is used instead. For eg, on a user profile, the context is the user_id. On a group, the context_id is the group id and so on. If a context_id is specified, a context _must_ be specified, as well.
media_author (optional)
    The user id of the author. If not provided, the currently logged in user is assumed.
privacy (optional)
    The privacy for the media. If not supplied, defaults to the current default privacy of the user, then to the site, and failing which, to 0 (public).
custom_fields (optional)
    The meta data as an array of key-value pairs. These are stored in the rtm_media_meta table.
taxonomy (optional)
    The taxonomy for the media. These can be categories, tags or any custom taxonomy. Because taxonomies in a multisite environment are stored in different tables for each site, this feature is currently not supported in multisite environments.
album_id (optional)
    The id of the album the upload should be placed in. This could be any post type, or the implicit _rt-media-album_ post type. If not provided, the global default 'Wall Posts' album will be assumed.
files (optional)
    If the files are already on the server (say via FTP), but just need to be added to rtMedia, a fake file array is passed into this parameter.
title (optional)
    The text that will be stored as the title.
description (optional)
    The text/html that'll be stored as the description.
rt_media_upload_nonce (required)
    A valid nonce for the upload. For an API request, you have to generate nonce via a previous nonce* call.



*A nonce request has not been factored into the code yet. So, cross domain API requests are not supported as of now.
