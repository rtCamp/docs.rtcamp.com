---
title: rtmedia_media_edit_priv
---

### Description


Allow logged in user to edit another user's media based on certain conditions.


### Example



    
    `add_filter( 'rtmedia_media_edit_priv', 'rtmedia_media_edit_priv_custom', 10, 1 );
    
    function rtmedia_media_edit_priv_custom( $flag ){
            // check your conditions here and according to that set $flag = true or false
            return $flag;
    }`
