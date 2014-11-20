---
author: apekshadeshpande
comments: false
date: 2012-04-25 10:53:35+00:00
layout: page
slug: rtp_hook_before_header
title: rtp_hook_before_header
wordpress_id: 3102
---

### Description


Used to add content before header ( #header ).


### Example



    
    function custom_hook_before_header() { ?>
    <p>This is before #header</p><?php
    }
    add_action( 'rtp_hook_before_header', 'custom_hook_before_header' );
