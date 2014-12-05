---
comments: false
date: 2014-01-21 09:52:12+00:00
layout: page
slug: rtp_hook_sidebar_content
title: rtp_hook_sidebar_content
---

### Description


This hook adds content in the right sidebar if widgets are not active. It shows static text, instead of showing blank sidebar.


### Example



    
    function custom_rtp_hook_sidebar_content() { ?>
    <p>This content will show, when right sidebar widgets are not present.</p><?php
    }
    add_action( 'rtp_hook_sidebar_content', 'custom_rtp_hook_sidebar_content' );
