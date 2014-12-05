---
title: rtp_hook_begin_content
---

### Description


Adds content at the beginning of #content.


### Example



    
    function custom_hook_begin_content() { ?>
    <p>This is the beginning of #content</p><?php
    }
    add_action( 'rtp_hook_begin_content', 'custom_hook_begin_content' );
