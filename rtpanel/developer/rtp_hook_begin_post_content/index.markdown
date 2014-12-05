---
title: rtp_hook_begin_post_content
---

### Description


Adds content to the beginning of post content (.post-content).


### Example



    
    function custom_hook_begin_post_content() { ?>
    <p>This is the before Post Content</p><?php
    }
    add_action( 'rtp_hook_begin_post_content', 'custom_hook_begin_post_content' );
    
