---
comments: false
date: 2014-02-07 10:43:02+00:00
layout: page
slug: rtp_url_placeholder
title: rtp_url_placeholder
---

Modify website placeholder text in comment form.

    
    function custom_rtp_url_placeholder() {
        return "Enter Website URL";
    }
    add_filter( 'rtp_url_placeholder', 'custom_rtp_url_placeholder' );
