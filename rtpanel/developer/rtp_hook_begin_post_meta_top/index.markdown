---
date: 2012-04-25 11:14:54+00:00
title: rtp_hook_begin_post_meta_top
---

### Description


Adds content before Top Post Meta Box. Depends on the default applied rtp_hook_post_meta_top hook.


### Example



    
    function custom_hook_begin_post_meta_top() { ?>
    <p>This is before Top Post Meta Box</p><?php
    }
    add_action( 'rtp_hook_begin_post_meta_top', 'custom_hook_begin_post_meta_top' );
