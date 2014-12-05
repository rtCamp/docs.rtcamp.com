---
date: 2014-09-23 06:52:19+00:00
layout: page
slug: rtmedia_media_delete_priv
title: rtmedia_media_delete_priv
---

### Description


Addition check to allow user to delete media or allow logged in user to delete another user's media based on certain conditions.


### Example



    
    <code>add_filter( 'rtmedia_media_delete_priv', 'rtmedia_media_delete_priv_custom', 10, 1 );
    
    function rtmedia_media_delete_priv_custom( $flag ){
    	// check your conditions here and according to that set $flag = true or false
    	return $flag;
    }</code>
