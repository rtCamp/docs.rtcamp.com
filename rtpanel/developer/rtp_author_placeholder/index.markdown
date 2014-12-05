---
comments: false
date: 2014-02-07 10:47:07+00:00
layout: page
slug: rtp_author_placeholder
title: rtp_author_placeholder
---

Modify author placeholder text in comment form.

    
    function custom_rtp_author_placeholder() {
        return "Enter Name here";
    }
    add_filter( 'rtp_author_placeholder', 'custom_rtp_author_placeholder' );
