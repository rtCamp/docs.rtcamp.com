---
date: 2013-06-12 07:23:33+00:00
title: Database Description
---

## rtMedia Table Overview


rtMedia uses the following tables:



	
  * `{wp_}rt_rtm_media` for indexing media

	
  * `{wp_}rt_rtm_media_meta` for storing metadata as key-value pairs.

	
  * `{wp_}rt_rtm_media_interaction` for storing data on actions carried out on media.

	
  * `{wp_}rt_rtm_activity` for storing rtMedia BuddyPress activity data.




## {wp_}rt_rtm_media


<table >

<tr >
Field
Type
null
default
key
WP relation
</tr>

<tbody >
<tr >

<td >id
</td>

<td >bigint(20)
</td>

<td >NOT NULL
</td>

<td >
</td>

<td > PRIMARY
</td>

<td >
</td>
</tr>
<tr >

<td >blog_id
</td>

<td >bigint(20)
</td>

<td >NULL
</td>

<td >NULL
</td>

<td >
</td>

<td >blog_id
</td>
</tr>
<tr >

<td >media_id
</td>

<td >bigint(20)
</td>

<td >NOT NULL
</td>

<td >
</td>

<td > KEY
</td>

<td >post ID of attachment
</td>
</tr>
<tr >

<td >media_author
</td>

<td >bigint(20)
</td>

<td >NOT NULL
</td>

<td >
</td>

<td > KEY
</td>

<td >post_author
</td>
</tr>
<tr >

<td >media_title
</td>

<td >text
</td>

<td >
</td>

<td >
</td>

<td >
</td>

<td >post_title
</td>
</tr>
<tr >

<td >album_id
</td>

<td >bigint(20)
</td>

<td >
</td>

<td >
</td>

<td > KEY
</td>

<td >post_parent
</td>
</tr>
<tr >

<td >media_type
</td>

<td >varchar(100)
</td>

<td >NULL
</td>

<td >NULL
</td>

<td >
</td>

<td >
</td>
</tr>
<tr >

<td >context
</td>

<td >varchar(100)
</td>

<td >NULL
</td>

<td >NULL
</td>

<td >
</td>

<td >post_type, current BuddyPress Component, custom
</td>
</tr>
<tr >

<td >context_id
</td>

<td >bigint(20)
</td>

<td >NULL
</td>

<td >NULL
</td>

<td >
</td>

<td >post ID, component ID
</td>
</tr>
<tr >

<td >activity_id
</td>

<td >bigint(20)
</td>

<td >NULL
</td>

<td >NULL
</td>

<td >
</td>

<td >BuddyPress activity ID
</td>
</tr>
<tr >

<td >cover_art
</td>

<td >varchar(250)
</td>

<td >NULL
</td>

<td >NULL
</td>

<td >
</td>

<td >media_id reference to  {wp_}rt_rtm_media table
</td>
</tr>
<tr >

<td >privacy
</td>

<td >int(3)
</td>

<td >NULL
</td>

<td >NULL
</td>

<td >
</td>

<td >
</td>
</tr>
<tr >

<td >views
</td>

<td >bigint(20)
</td>

<td >NULL
</td>

<td >0
</td>

<td >
</td>

<td >
</td>
</tr>
<tr >

<td >downloads
</td>

<td >bigint(20)
</td>

<td >NULL
</td>

<td >0
</td>

<td >
</td>

<td >
</td>
</tr>
<tr >

<td >ratings_total
</td>

<td >bigint(20)
</td>

<td >NULL
</td>

<td >0
</td>

<td >
</td>

<td >
</td>
</tr>
<tr >

<td >ratings_count
</td>

<td >bigint(20)
</td>

<td >NULL
</td>

<td >0
</td>

<td >
</td>

<td >
</td>
</tr>
<tr >

<td >ratings_average
</td>

<td >decimal(4,2)
</td>

<td >NULL
</td>

<td >0
</td>

<td >
</td>

<td >
</td>
</tr>
<tr >

<td >likes
</td>

<td >bigint(20)
</td>

<td >NULL
</td>

<td >0
</td>

<td >
</td>

<td >
</td>
</tr>
<tr >

<td >dislikes
</td>

<td >bigint(20)
</td>

<td >NULL
</td>

<td >0
</td>

<td >
</td>

<td >
</td>
</tr>
</tbody>
</table>


### All Keys:


Following keys are defined for this table:



	
  * PRIMARY KEY (id)

	
  * KEY media_id (media_id)

	
  * KEY media_author (media_author)

	
  * KEY album_id (album_id)

	
  * KEY media_author_id (album_id,media_author)

	
  * KEY context_author_album_id (context_id,album_id,media_author)

	
  * KEY context(context)




### Description




id
    The unique id for each media item, including albums. This media object is accessible at the `/media/{id}` REST endpoint from a valid context.
blog_id
    The id of the blog in a multisite install. For single wordpress site this will be always set to 1.
media_id
**This will always refer to a post_id from wp_posts table.**
    



	
  * For media files: The id of the _attachment_ post_type

	
  * For albums: The id of the post that is considered an album. Can be any post type or the inbuilt _rt_media_album_ post type.



media_author
    The id of the author of the media. This has the same value as _post_author _ for the _media_id_ in the WordPress _posts_ table. 
    In short, this will be always set to logged in user who is uploading media from web-interface.
media_title
    The title for the media. This has the same value as _post_title _ for the _media_id_ in the WordPress _wp_posts_ table.
album_id
    The id of the album, this media belongs to.



	
  * For media files: The _post_parent_ in the WordPress table

	
  * For albums: Default NULL. In future, when we will add parent-child album concept, this will be set to as _post_parent _in the WordPress table.



media_type
    Any of the registered types `photo`, `audio`, `video`, `album` or a custom one.
    rtMedia-PRO adds `playlist`, `docs` and `others` as media_type. 
context
    The context associated with the media.
    This could be any of the following:



	
  * WordPress:

	
    * For Post type: _post, page, etc_

	
    * For Comments: comment

	
    * For Dashboard upload: _dashboard_




	
  * bbPress _topic_ or _reply_

	
  * BuddyPress component: _activity, group, profile_

	
  * WordPress Comment: _comment_

	
  * A custom context



context_id
    The unique id for the context to differentiate among them. For example, for BuddyPress profiles upload, when context is set to profile, context_id will be set to buddypress profile_id (i.e. wordpress user_id).
    This can be NULL also for some context where differentiation is not required, e.g. dashboard uploads.
activity_id
    Default is NULL.
    The id of the activity generated if BuddyPress is active _and_ the Activity component is enabled.
covert_art
    Default is NULL
    Used for media_type album, music and video only.
    For album, it is media_id in {wp_}rt_rtm_media table.
    For music and video, it is URL.
privacy
    Default is NULL.
    Used for BuddyPress Profile media tab. Valid values are:




	
  * 0 = Public

	
  * 20 = Logged-in/Registered-Users

	
  * 40 = Friends

	
  * 60 = Private

	
  * _80 = in moderation queue. This will be changed to _


For BuddyPress Groups and bbPress Forums, values are:

	
  * 0 = public group/forum

	
  * 60 = private/hidden group/forum




    
    When uploading from BuddyPress Activity Stream Uploader, if upload is sent to "My Profile" then only privacy value will be set as per above.
    For BuddyPress Group uploads, this privacy column is not used. Media visibility is controlled by Group's visibility setting. 
    
views
    Default is 0.
    View count will be incremented by 1 for every single media view inside lightbox or from single-media page.
    Counter is incremented by AJAX call to reduce load on server and avoid cache-effects.
    Currently PHP sessions are used to identify unique views from a visitor. We plan to make this more robust and gaming-safe in future.
    Another table `{wp_}rt_rtm_media_interaction` is used to store details about views and other interactions.
downloads
    Default is 0.
    The download count is incremented for every download action on that media. This will only work if download option is enabled in rtMedia-PRO settings.
ratings-total
    Default is 0.
    The total ratings received, each instance adding a percentage based value.
ratings-count
    Default is 0.
    The total number of times, a media item has received ratings. 
ratings-average
    Default is 0.
    The average ratings received upto 1 decimal digit..
likes
    Default is 0.
    The total number of like interactions. If user unlike, previously liked post this will be decremented.
dislikes
    Default is 0.
    The total number of dislike interactions. This is reserved for future thumbs-up/down (vote-up/vote-down) style functionality.



## {wp_}rt_rtm_media_meta


<table >

<tr >
Field
Type
</tr>

<tbody >
<tr >

<td >meta_id
</td>

<td >bigint(20)
</td>
</tr>
<tr >

<td >media_id
</td>

<td >bigint(20)
</td>
</tr>
<tr >

<td >meta_key
</td>

<td >varchar(255)
</td>
</tr>
<tr >

<td >meta_value
</td>

<td >longtext
</td>
</tr>
</tbody>
</table>


### All keys


PRIMARY KEY (meta_id)


### Description




meta_id
    The unique id for indexing.
media_id
    The id from the _wp_rtm_media table_
meta_key
    The key of the key-value pair
meta_value
    The value of the key-value pair
    
    



## {wp_}rt_rtm_media_interaction


<table >

<tr >
Field
Type
null
Default
Key
Extra
</tr>

<tbody >
<tr >

<td >id
</td>

<td >bigint(20)
</td>

<td > NOT NULL
</td>

<td >
</td>

<td > PRIMARY
</td>

<td > AUTO_INCREMENT
</td>
</tr>
<tr >

<td >user_id
</td>

<td >bigint(20)
</td>

<td > NOT NULL
</td>

<td > 0
</td>

<td > KEY
</td>

<td >
</td>
</tr>
<tr >

<td >media_id
</td>

<td >bigint(20)
</td>

<td > NOT NULL
</td>

<td > 0
</td>

<td > KEY
</td>

<td >
</td>
</tr>
<tr >

<td >action
</td>

<td >varchar(255)
</td>

<td >
</td>

<td >
</td>

<td >
</td>

<td >
</td>
</tr>
<tr >

<td >value
</td>

<td >varchar(255)
</td>

<td >
</td>

<td >
</td>

<td >
</td>

<td >
</td>
</tr>
<tr >

<td >action_date
</td>

<td >TIMESTAMP
</td>

<td > NULL
</td>

<td > CURRENT_TIMESTAMP
</td>

<td >
</td>

<td >
</td>
</tr>
</tbody>
</table>


### All keys


PRIMARY KEY (id),
KEY user_id(user_id),
KEY media_id(media_id)


### Description




id
    The unique id for indexing.
user_id
    The id of the user.
media_id
    The id from the _wp_rtm_media_ table.
action
    This could a Like, rating, or view.
value
    The value related to the action.
action_date
    The timestamp of the action.



## {wp_}rt_rtm_activity


<table >

<tr >
Field
Type
null
Default
Key
Extra
</tr>

<tbody >
<tr >

<td >activity_id
</td>

<td >bigint(20)
</td>

<td > NULL
</td>

<td >
</td>

<td > KEY
</td>

<td > 
</td>
</tr>
<tr >

<td >user_id
</td>

<td >bigint(20)
</td>

<td >NOT NULL
</td>

<td > 0
</td>

<td > KEY
</td>

<td >
</td>
</tr>
<tr >

<td >privacy
</td>

<td >int(3)
</td>

<td >NULL
</td>

<td > 
</td>

<td > KEY
</td>

<td >
</td>
</tr>
<tr >

<td >blog_id
</td>

<td >bigint(20)
</td>

<td >NULL
</td>

<td >NULL
</td>

<td >
</td>

<td >
</td>
</tr>
</tbody>
</table>


### All keys


KEY activity_id(activity_id),
KEY user_id(user_id),
KEY privacy(privacy)


### Description




activity_id
    The activity id of rtMedia activity.
user_id
    The id of the user.
privacy
    Privacy of this particular activity according to attached media.
blog_id
    The id of the blog in a multisite install. For single wordpress site this will be always set to 1.
