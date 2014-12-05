---
title: rtp_hook_end_post_content
---

### Description


Adds content to the end of post content (.post-content).


### Example



    
    function custom_hook_end_post_content() { ?>
    <p>This is the after Post Content</p><?php
    }
    add_action( 'rtp_hook_end_post_content', 'custom_hook_end_post_content' );
