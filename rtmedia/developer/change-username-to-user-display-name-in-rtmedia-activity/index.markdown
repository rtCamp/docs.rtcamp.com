---
date: 2014-09-11 17:07:49+00:00
slug: change-username-to-user-display-name-in-rtmedia-activity
title: Change username to user's display name in rtMedia activity
---

By default rtMedia uses user's nice name in activity. You can change it as per your requirement using `rtmedia_buddypress_action_text_fitler` filter in your theme or plugin.

For single media upload from media tab below is the sample code for how to use that filter.

    
    <code>function change_rtmedia_activity_username_single_media( $action, $username, $count, $user_nicename, $media_type ) {
    	$user_id  = get_current_user_id();
    	$user     = get_userdata( $user_id );
     	$username = '<a href="' . get_rtmedia_user_link ( $user_id ) . '">' . $user->user_firstname . '</a>';
    	$action   = sprintf( __( '%s added %d %s', 'rtmedia' ), $username, $count, RTMEDIA_MEDIA_SLUG );
    	return $action;
    }
    add_filter('rtmedia_buddypress_action_text_fitler', 'change_rtmedia_activity_username_single_media', 10, 5);</code>



You can change (user_firstname) to (user_firstname user_lastname) or (display_name) or anything as per your requirement.
Below screen shows username in activity feed.

[![Change_username](http://docs.rtcamp.com/wp-content/uploads/2014/09/Change_username.png)](http://docs.rtcamp.com/wp-content/uploads/2014/09/Change_username.png) 

For multiple media upload from media tab below is the sample code for how to use that filter.

    
    <code>function change_rtmedia_activity_username_multiple_media( $action, $username, $count, $user_nicename ) {
    	$user_id  = get_current_user_id();
    	$user     = get_userdata( $user_id );
     	$username = '<a href="' . get_rtmedia_user_link ( $user_id ) . '">' . $user->user_firstname . '</a>';
    	$action   = sprintf( __( '%s added %d %s', 'rtmedia' ), $username, $count, RTMEDIA_MEDIA_SLUG );
    	return $action;
    }
    add_filter('rtmedia_buddypress_action_text_fitler_multiple_media', 'change_rtmedia_activity_username_multiple_media', 10, 4);</code>
