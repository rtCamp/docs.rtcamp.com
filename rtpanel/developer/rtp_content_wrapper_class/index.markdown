---
author: manish.songirkar
comments: false
date: 2014-02-07 11:23:14+00:00
layout: page
slug: rtp_content_wrapper_class
title: rtp_content_wrapper_class
---

Add extra class for the content wrapper.

    
    function custom_rtp_content_wrapper_class() {
        return "rtp-content-wrapper rtp-section-wrapper my-custom-class";
    }
    add_filter( 'rtp_content_wrapper_class', 'custom_rtp_content_wrapper_class' );
