---
date: 2014-04-24 07:06:57+00:00
title: Remove post-editor shortcode button
---

Add following code in your theme's functions.php file to remove rtMedia short code generator button in post editor. It will show rtMedia shortcode button only in WordPress backend and not in front end.

If you want to completely remove shortcode button just remove the check for **is_admin** from following code.

    
    add_filter( 'mce_external_plugins', 'rtmedia_pro_remove_short_code_buttons', 10, 1 );
    
    function rtmedia_pro_remove_short_code_buttons( $plugin_array ) {
        if( ! is_admin() && isset( $plugin_array['rtmedia_pro_short_code'] ) ) {
            unset( $plugin_array['rtmedia_pro_short_code'] );
        }
        return $plugin_array;
    }
    
    add_filter( 'mce_buttons', 'rtmedia_pro_cancel_short_code_buttons' ), 10, 1 );
    
    function rtmedia_pro_cancel_short_code_buttons( $buttons ) {
        if( ! is_admin() && isset( $buttons['rtmedia_pro_short_code'] ) ) {
            unset( $buttons['rtmedia_pro_short_code'] );
        }
        return $buttons;
    }



