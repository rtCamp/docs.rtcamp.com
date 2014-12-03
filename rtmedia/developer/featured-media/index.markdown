---
author: saurabhshukla
comments: false
date: 2013-05-07 15:02:37+00:00
layout: page
slug: featured-media
title: Featured Media
wordpress_id: 37815
---

Till rtMedia v3.7.20 we have featued media option for user profile only and now we have added same option for group as well. 

For profile: rtmedia_featured( $user_id )

For group: rtmedia_group_featured( $group_id )




The older tag (**bp_media_featured()**) will continue to work till the next few versions. Kindly change all instances, asap.


Used to display any media that the user has set as featured. It could be a video, audio or a photo.

For this to work, the appropriate switch will need to be turned on in **rtMedia** > **Settings** >**Types**. Read more: [rtMedia settings' types](https://rtcamp.com/rtmedia/docs/admin/rtmedia-settings/types/) tab.


## rtmedia_featured




### **$user_id**


(Optional, not required on user profile)
The id of the user to fetch the featured media for. For example, if an admin decides to set a media item as featured for everyone in the community, his own user id can be passed to this function.


## Example


In the default BuddyPress theme, find

    
    /members/single/member-header.php


Replace the following code:

    
    <?php if ( bp_is_active( 'activity' ) ) : ?>
    	<div id="latest-update">
    		<?php bp_activity_latest_update( bp_displayed_user_id() ); ?>
    	</div>
    <?php endif; ?>


with:

    
    <div id="featured-media">
    	<?php rtmedia_featured(); ?>
    </div>


And instead of the latest update, the featured media would show up!


## rtmedia_group_featured




### **$group_id**


(Optional, not required on single group page)
The id of the group to fetch the featured media for.


## Example


In the default BuddyPress theme, find

    
    /groups/single/group-header.php


You can add following code in that template according to your page layout.


    <div id="featured-media">
    	<?php rtmedia_group_featured(); ?>
    </div>


It will show featued media for the current group.
