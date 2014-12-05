---
author: Ritesh Patel
comments: false
date: 2014-09-23 07:03:00+00:00
layout: page
slug: rtmedia_allow_comment_delete
title: rtmedia_allow_comment_delete
---

### Description


Use this filter to allow logged in user to delete another user's media comments based on certain conditions.


### Example



    
    <code>add_filter( 'rtmedia_allow_comment_delete', 'rtmedia_allow_comment_delete_custom', 10, 1 );
    
    function rtmedia_allow_comment_delete_custom( $flag ){
            // check your conditions here and according to that set $flag = true or false
            return $flag;
    }</code>
