---
title: rtp_hook_end_post_title
---

### Description


Adds content after every post's title.


### Example



    
    function custom_hook_end_post_title() { ?>
    <p>This is after post's title</p><?php
    }
    add_action( 'rtp_hook_end_post_title', 'custom_hook_end_post_title' );
