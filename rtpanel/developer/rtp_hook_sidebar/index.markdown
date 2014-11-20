---
author: joshuaabenazer
comments: false
date: 2014-01-21 09:36:35+00:00
layout: page
slug: rtp_hook_sidebar
title: rtp_hook_sidebar
wordpress_id: 10087
---

### Description


This hook adds content after the end of #content, also it holds the sidebar.


### Example



    
    function custom_rtp_hook_sidebar() { ?>
    <p>This content is after #content.</p><?php
    }
    add_action( 'rtp_hook_sidebar', 'custom_rtp_hook_sidebar' );
