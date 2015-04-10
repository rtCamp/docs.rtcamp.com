---
title: Change Default No Media Found Message in Mmedia Tab
---

You can use the filter `rtmedia_no_media_found_message_filter` in your theme and can modify the default message of **"Oops ! There's no media found for the request !!"** in media tab.

Add the following code in your theme's functions.php file:
    
	function custom_no_media_found_message_function( $message ) { 
		$message = "Custom Message"; return $message; 
	}
	add_filter( 'rtmedia_no_media_found_message_filter', 'custom_no_media_found_message_function' ,10, 1 );
