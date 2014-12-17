---
title: rtmedia_allow_comment_delete
---

### Description


Use this filter to allow the logged in user to delete another user's media comments based on certain conditions.


### Example



    
    <code>add_filter( 'rtmedia_allow_comment_delete', 'rtmedia_allow_comment_delete_custom', 10, 1 );
    
    function rtmedia_allow_comment_delete_custom( $flag ){
            // check your conditions here and according to that set $flag = true or false
            return $flag;
    }</code>
