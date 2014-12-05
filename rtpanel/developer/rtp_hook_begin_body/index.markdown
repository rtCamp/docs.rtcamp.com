---
date: 2014-01-21 07:28:19+00:00
title: rtp_hook_begin_body
---

### Description


Adds content at the beginning of the body tag.


### Example



    
    function custom_rtp_hook_begin_body() { ?>
    <p>This is the beginning of body tag.</p><?php
    }
    add_action( 'rtp_hook_begin_body', 'custom_rtp_hook_begin_body' );
