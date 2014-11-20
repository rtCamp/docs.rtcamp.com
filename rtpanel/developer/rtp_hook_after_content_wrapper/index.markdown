---
author: manish.songirkar
comments: false
date: 2014-01-21 09:40:53+00:00
layout: page
slug: rtp_hook_after_content_wrapper
title: rtp_hook_after_content_wrapper
wordpress_id: 56090
---

### Description


Adds content after end of #content-wrapper.


### Example



    
    function custom_rtp_hook_after_content_wrapper() { ?>
    <p>This content is after #content-wrapper.</p><?php
    }
    add_action( 'rtp_hook_after_content_wrapper', 'custom_rtp_hook_after_content_wrapper' );
