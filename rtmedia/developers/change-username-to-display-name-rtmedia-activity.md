## Change Username to User's Display Name in rtMedia Activity


By default rtMedia uses user's nice name in activity. The following screen shows the username in activity feed.


[![username-activity-update](https://cloud.githubusercontent.com/assets/7771963/11710049/6cc40132-9f42-11e5-9e99-c277242618f2.png)](https://cloud.githubusercontent.com/assets/7771963/11710049/6cc40132-9f42-11e5-9e99-c277242618f2.png)

You can change it as per your requirement using below filters. You can put below sample code in your theme's `functions.php` file.

**Filter name :** `rtmedia_buddypress_action_text_fitler` & `rtmedia_buddypress_action_text_fitler_multiple_media`

Description : This filters will change action name before creating the activity. This will update database for future reference.

Use the following sample code to upload a single media from the media tab.

```php
function change_rtmedia_activity_username_single_media( $action, $username, $count, $user_nicename, $media_type ) {
    $user_id  = get_current_user_id();
    $user     = get_userdata( $user_id );
    $username = '<a href="' . get_rtmedia_user_link ( $user_id ) . '">' . $user->display_name . '</a>';
    $media_type_label = $count > 1 ? constant( 'RTMEDIA_' . strtoupper( $media_type ) .  '_PLURAL_LABEL' ) : constant( 'RTMEDIA_' . strtoupper( $media_type ) .  '_LABEL' );
    $action   = sprintf( __( '%s added %d %s', 'buddypress-media' ), $username, $count, $media_type_label );
    return $action;
}
add_filter('rtmedia_buddypress_action_text_fitler', 'change_rtmedia_activity_username_single_media', 10, 5);
```

You can change (user_firstname) to (user_firstname user_lastname) or (display_name) or anything else as per your requirement.

Use the following sample code to upload multiple media from the media tab.

```php
function change_rtmedia_activity_username_multiple_media( $action, $username, $count, $user_nicename ) {
    $user_id  = get_current_user_id();
    $user     = get_userdata( $user_id );
    $username = '<a href="' . get_rtmedia_user_link ( $user_id ) . '">' . $user->display_name . '</a>';
    $action   = sprintf( __( '%s added %d %s', 'buddypress-media' ), $username, $count, RTMEDIA_MEDIA_SLUG );
    return $action;
}
add_filter('rtmedia_buddypress_action_text_fitler_multiple_media', 'change_rtmedia_activity_username_multiple_media', 10, 4);
```
**Filter name :** `rtmedia_bp_activity_action_text`

Description : This filter won't change anything into database but used to display correct display name while viewing the activity feed.

```php
function change_rtmedia_activity_username( $action, $username, $count, $user, $media_type, $activity_id ) {
    $username = '<a href="' . get_rtmedia_user_link ( $user->ID ) . '">' . $user->display_name . '</a>';
    $media_type_label = $count > 1 ? constant( 'RTMEDIA_' . strtoupper( $media_type ) .  '_PLURAL_LABEL' ) : constant( 'RTMEDIA_' . strtoupper( $media_type ) .  '_LABEL' );
    $action   = sprintf( __( '%s added %d %s', 'buddypress-media' ), $username, $count, $media_type_label );
    return $action;
}
add_filter('rtmedia_bp_activity_action_text', 'change_rtmedia_activity_username', 10, 6);
```

[![user-display-name-activity-update](https://cloud.githubusercontent.com/assets/7771963/11710058/7e2806f8-9f42-11e5-8117-2caa95fc3d73.png)](https://cloud.githubusercontent.com/assets/7771963/11710058/7e2806f8-9f42-11e5-8117-2caa95fc3d73.png)
