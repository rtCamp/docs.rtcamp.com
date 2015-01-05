---
title: Gallery Shortcode
---

    [[rtmedia_gallery global="false" context="post" context_id="23" media_type="photo" media_author="1"]]




## Options


### global

Default is FALSE.
If set to TRUE, context, context_id, album_id, author_id will be ignored. Only media_type value will be processed.
    
### context

The [context](http://docs.rtcamp.com/rtmedia/developer/context/) from which the media should be listed:

	
  * a post_type (post, page, event, topic, reply, etc)

	
  * a BuddyPress Component (activity, profile, group)

	
  * a custom context, registered via code


If not provided, the current post type is assumed as the context. If BuddyPress is installed, the context is assumed to be the component on the current page. If bbPress is installed and user is on a forum, the context is set to the current topic or reply.


### context_id
    
	
  * id of the current post_type (post, page, event, topic, reply, etc)

	
  * id of the current BuddyPress Component (activity, profile, group)

	
  * id of a custom context, registered via code


This provides the unique id of the context. For custom contexts, the database table and the id column have to be registered via code.


### media_type
    
	
  1. all

	
  2. music

	
  3. video

	
  4. photo

	
  5. album


If not specified, all media types will be loaded (except albums).


### media_author

If media uploaded by a particular user needs to be displayed, set the user ID here.
    
### album_id

If media uploaded to a particular album needs to be displayed, set the album ID here.
    
### uploader
    	
  1. before : uploader on top of gallery

	
  2. after : uploader at the end of gallery

	
  3. true : uploader at the end of gallery (alias for after)


To show the uploader along with the gallery, use this **uploader** attribute with above values. Default is **FALSE**.

### per_page

Set this option to a value greater than 0 to override admin settings to show number of media in gallery.



### lightbox

Set this option to **FALSE**, if you have enabled **Use lightbox to display media** from rtMedia admin settings and do not want to show media of gallery shortcode in lightbox.


### media_title

Set this option to **FALSE**, if you do not want to show media title in gallery shortcode. Default value is **TRUE**.



## Attributes Short-Code

  
    [[rtmedia_gallery attribute_slug="slug-of-attribute" term_slug="terms-slug"]]


attribute_slug: is the slug of attributes which is created or generated when you create a attribute.

term_slug: is the slug of terms which are created under the attributes. We can use a number of terms associate under the same attribute in single short-code. The terms must be comma separated.

[![Selection_018](https://rtcamp.com/wp-content/uploads/2013/06/Selection_0182.png)](https://rtcamp.com/wp-content/uploads/2013/06/Selection_0182.png) [![Selection_017](https://rtcamp.com/wp-content/uploads/2013/06/Selection_017.png)](https://rtcamp.com/wp-content/uploads/2013/06/Selection_017.png)

As the above screenshots show, the short-code of attributes will look as follows:

    
    [[rtmedia_gallery attribute_slug="rtcamp" term_slug="services,product"]]




## Favlist Short-Code


    
    [[rtmedia_gallery favlist_id="xxx"]]


xxx: the id of favlist which is created.


## Privacy Note


Note that the purpose of this shortcode is to provide a simpler way to display **public _galleries** of media content on your site.

For safety of your users, `rtmedia_gallery` will always fetch public content only. Some _intended_ side-effects include:

	
  1. Uploads in private buddypress groups will not show even if a user can access by going to that particular buddypress-group

	
  2. Uploads for buddypress-profiles, limited to friends or logged-in users will not show up even if viewer can access them directly by going to a user profile.


Idea is to protect privacy by default.
