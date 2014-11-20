---
author: manish.songirkar
comments: false
date: 2014-01-21 09:56:58+00:00
layout: page
slug: rtp_hook_begin_footer
title: rtp_hook_begin_footer
wordpress_id: 56098
---

### Description


Adds content at the beginning of #footer-wrapper.


### Example



    
    function custom_rtp_hook_begin_footer() { ?>
    <p>This is the beginning of #footer-wrapper.</p><?php
    }
    add_action( 'rtp_hook_begin_footer', 'custom_rtp_hook_begin_footer' );
