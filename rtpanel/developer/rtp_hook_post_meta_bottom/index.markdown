---
date: 2012-04-25 11:36:17+00:00
title: rtp_hook_post_meta_bottom
---

### Description


Adds content after .post-content. This is mainly used for the post meta.


### Example



    
    function custom_hook_post_meta_bottom() { ?>
    <p>This is post meta bottom</p><?php
    }
    add_action( 'rtp_hook_post_meta_bottom', 'custom_hook_post_meta_bottom' );
