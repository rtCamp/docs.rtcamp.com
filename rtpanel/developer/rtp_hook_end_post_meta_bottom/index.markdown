---
title: rtp_hook_end_post_meta_bottom
---

### Description


Adds content after Bottom Post Meta Box. Depends on the default applied rtp_hook_post_meta_bottom hook.


### Example



    
    function custom_hook_end_post_meta_bottom() { ?>
    <p>This is after Bottom Post Meta Box</p><?php
    }
    add_action( 'rtp_hook_end_post_meta_bottom', 'custom_hook_end_post_meta_bottom' );
