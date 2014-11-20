---
author: admin
comments: false
date: 2014-01-27 07:51:30+00:00
layout: page
slug: reordering-media-tab-buddypress
title: Reordering Media tab in BuddyPress
wordpress_id: 56337
---

If you want to reorder the position of the `Media` tab in buddpress, use the following piece of code:


    
    <code>add_action('bp_init','change_media_tab_position', 12);
    function change_media_tab_position(){
        global $bp;
        if( isset ($bp->bp_nav['media'])){
            $bp->bp_nav['media']['position'] = 70;
        }
    }</code>



Set the value for the position as you require.
