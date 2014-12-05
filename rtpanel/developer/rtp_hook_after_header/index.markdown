---
comments: false
date: 2012-04-25 10:48:40+00:00
layout: page
slug: rtp_hook_after_header
title: rtp_hook_after_header
---

### Description


Used to add content after header ( #header ).  By default rtPanel uses this hook to show the nav menu/page list.


### Example



    
    function custom_hook_after_header() { ?>
    <p>This is after #header</p><?php
    }
    add_action( 'rtp_hook_after_header', 'custom_hook_after_header' );
    function remove_parent_actions() {
    remove_action( 'rtp_hook_after_header','rtp_default_nav_menu' );
    }
    add_action(  'init', 'remove_parent_actions'  );
