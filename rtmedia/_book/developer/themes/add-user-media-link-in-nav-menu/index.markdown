---
title: Add User's Media Link in the WordPress Navigation Menu
---

Add the following code in your theme to add user's media link in WordPress navigation menu. Make sure you have `**Navigation Menu**` to be checked in menu settings in `**Appearance**` settings.

    
    function my_wp_get_nav_menu_items( $items, $menu, $args ){
    	if ( is_user_logged_in() && class_exists( 'RTMedia' ) ) {
    		$user_id = get_current_user_id();	// get current logged in user id
    		$url = trailingslashit ( get_rtmedia_user_link ( get_current_user_id () ) ) . RTMEDIA_MEDIA_SLUG . '/'; 	// get user's media link
    
    		// add new menu item to nav menu
    		$new_item = new stdClass;
    		$new_item->menu_item_parent = 0;
    		$new_item->url = $url;
    		$new_item->title = 'My Media';
    		$new_item->menu_order = count( $items ) + 1;
    		$items[] = $new_item;
    	}
    	return $items;
    }
    
    add_filter( 'wp_get_nav_menu_items', 'my_wp_get_nav_menu_items', 99, 3 );
