---
date: 2014-01-21 09:12:48+00:00
title: rtp_hook_end_header
---

### Description


Adds content at the end of the .rtp-header div.


### Example



    
    function custom_rtp_hook_end_header() { ?>
    <p>This is the end of .rtp-header</p><?php
    }
    add_action( 'rtp_hook_end_header', 'custom_rtp_hook_end_header' );
