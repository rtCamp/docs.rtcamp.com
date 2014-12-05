---
date: 2014-09-23 06:52:30+00:00
layout: page
slug: rtmedia_media_edit_priv
title: rtmedia_media_edit_priv
---

### Description


Addition check to allow user to edit media or allow logged in user to edit another user's media based on certain conditions.


### Example



    
    <code>add_filter( 'rtmedia_media_edit_priv', 'rtmedia_media_edit_priv_custom', 10, 1 );
    
    function rtmedia_media_edit_priv_custom( $flag ){
            // check your conditions here and according to that set $flag = true or false
            return $flag;
    }</code>
