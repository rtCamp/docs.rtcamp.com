---
author: manish.songirkar
comments: false
date: 2014-02-07 10:26:08+00:00
layout: page
slug: rtp_comment_placeholder
title: rtp_comment_placeholder
wordpress_id: 10293
---

Modify the comment textarea placeholder text.

    
    function custom_rtp_comment_placeholder() {
        return "Comment here...";
    }
    add_filter( 'rtp_comment_placeholder', 'custom_rtp_comment_placeholder' );
