---
author: manish.songirkar
comments: false
date: 2014-01-21 11:27:51+00:00
layout: page
slug: rtp_hook_after_comment_author_avatar
title: rtp_hook_after_comment_author_avatar
wordpress_id: 56110
---

### Description


This hook adds the content after author gravatar in comment section.


### Example



    
    function custom_rtp_hook_after_comment_author_avatar() { ?>
    <p>This is content after author gravatar.</p><?php
    }
    add_action( 'rtp_hook_after_comment_author_avatar', 'custom_rtp_hook_after_comment_author_avatar' );
