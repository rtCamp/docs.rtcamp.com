---
date: 2014-01-21 10:05:48+00:00
slug: rtp_hook_end_body
title: rtp_hook_end_body
---

### Description


Adds content at the end of body tag.


### Example



    
    function custom_rtp_hook_end_body() { ?>
    <p>This is the end of body tag.</p><?php
    }
    add_action( 'rtp_hook_end_body', 'custom_rtp_hook_end_body' );
