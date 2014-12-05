---
comments: false
date: 2014-09-17 11:01:53+00:00
layout: page
slug: change-default-media-found-message-media-tab
title: Change default no media found message in media tab
---

You can use filter `rtmedia_no_media_found_message_filter` in your theme and can return your message to change default message **"Oops ! There's no media found for the request !!"** in media tab.

Add following code in your theme's functions.php file:

    
    <code>function custom_no_media_found_message_function( $message ) { 
        $message = "Custom Message"; return $message; 
    }
    add_filter( 'rtmedia_no_media_found_message_filter', 'custom_no_media_found_message_function' ,10, 1 );</code>
