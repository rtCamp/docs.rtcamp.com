## Change Username to User's Display Name in rtMedia Activity


By default rtMedia uses user's nice name in activity. You can change it as per your requirement using the `rtmedia_buddypress_action_text_fitler` filter in your theme or plugin.

Use the following sample code to upload a single media from the media tab:

    
    `function change_rtmedia_activity_username_single_media( $action, $username, $count, $user_nicename, $media_type ) {
    	$user_id  = get_current_user_id();
    	$user     = get_userdata( $user_id );
     	$username = '<a href="' . get_rtmedia_user_link ( $user_id ) . '">' . $user->user_firstname . '</a>';
    	$action   = sprintf( __( '%s added %d %s', 'rtmedia' ), $username, $count, RTMEDIA_MEDIA_SLUG );
    	return $action;
    }
    add_filter('rtmedia_buddypress_action_text_fitler', 'change_rtmedia_activity_username_single_media', 10, 5);`



You can change (user_firstname) to (user_firstname user_lastname) or (display_name) or anything else as per your requirement.

The following screen shows the username in activity feed.

[![Change_username](http://docs.rtcamp.com/wp-content/uploads/2014/09/Change_username.png)](http://docs.rtcamp.com/wp-content/uploads/2014/09/Change_username.png) 

Use the following sample code to upload multiple media from the media tab.

    
    `function change_rtmedia_activity_username_multiple_media( $action, $username, $count, $user_nicename ) {
    	$user_id  = get_current_user_id();
    	$user     = get_userdata( $user_id );
     	$username = '<a href="' . get_rtmedia_user_link ( $user_id ) . '">' . $user->user_firstname . '</a>';
    	$action   = sprintf( __( '%s added %d %s', 'rtmedia' ), $username, $count, RTMEDIA_MEDIA_SLUG );
    	return $action;
    }
    add_filter('rtmedia_buddypress_action_text_fitler_multiple_media', 'change_rtmedia_activity_username_multiple_media', 10, 4);`
