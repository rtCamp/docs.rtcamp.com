---
title: rtp_hook_begin_post_title
---

### Description


Adds content before every post's title.


### Example



    
    function custom_hook_begin_post_title() { ?>
    <p>This is before post's title</p><?php
    }
    add_action( 'rtp_hook_begin_post_title', 'custom_hook_begin_post_title' );
