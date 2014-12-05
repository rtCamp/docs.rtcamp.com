---
title: rtp_hook_end_post_meta_top
---

### Description


Adds content after Top Post Meta Box. By default rtPanel uses this hook to show the edit link. Depends on the default applied rtp_hook_post_meta_top hook.


### Example



    
    function custom_hook_end_post_meta_top() { ?>
    <p>This is after Top Post Meta Box</p><?php
    }
    add_action( 'rtp_hook_end_post_meta_top', 'custom_hook_end_post_meta_top' );
