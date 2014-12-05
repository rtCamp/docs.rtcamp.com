---
author: saurabhshukla
comments: false
date: 2013-07-10 07:22:11+00:00
layout: page
slug: context
title: Context
---

To be able to display and upload media, rtMedia needs to know where each media file will be displayed. This identification and tracking of the context in which the media will be displayed, by default is at the core of the Anywhere Uploader and Anywhere Gallery.

Some contexts are understood by rtMedia, by default, implicitly. Others have to be explicitly defined.

Implicit Contexts

Some contexts are **implicit** to rtMedia:



	
  1. **WordPress**

	
    1. _page_

	
    2. _post_

	
    3. _{custom post type}_

	
    4. _profile_: WordPress author page (http://yoursite.com/authors/username)

	
    5. _comment_




	
  2. **BuddyPress**

	
    1. _profile_: BuddyPress profile

	
    2. _group_: BuddyPress group

	
    3. _{custom component}_




	
  3. **bbPress**

	
    1. _topic_

	
    2. _reply_





The context defines where the media belongs and how it should be displayed. Contexts are also useful for grouping media items. Each context is defined with a context id to specify which particular context (user, post, page, BuddyPress group, etc), is the media attached to.


### Context in Uploads


In the rtMedia uploader (using the shortcode or the template tag), a context and context_id can be defined. By default it takes the current context (component, if BuddyPress and post_type, if WordPress).

For eg, if you place the uploader on a page, the default context is '_page_' and the id of the page becomes the context_id.


#### Themes, Plugins and Custom Post types


If your theme or plugin uses custom post types, the name of the post_type, for eg, _event_, _place_, _recipe_, etc become the context and the post_id becomes the context_id.


### Context in Galleries


When displaying an rtMedia gallery  (using the shortcode or the template tag), again a context and a context_id can be defined. If not, the default context is picked up by rtMedia as described above.

So, by using a combination of the rtMedia uploader and rtMedia gallery, you can build a frontend gallery that users can directly upload to!


## Custom Contexts


You can define your own contexts. Just add a unique context slug to your uploader shortcode or template tag. You can also have multiple objects for the same context by supplying unique ids.

For eg, if you are running a photography contest. You can place an uploader with context="photocontest" and context_id="1" on a page. Then using the same context and context_id values, you can display the contest pictures on your site.


