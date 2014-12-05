---
date: 2014-02-07 10:55:13+00:00
slug: rtp_image_sibling_count
title: rtp_image_sibling_count
---

Modify images sibling count on image attachment page template, default is 10.

    
    function custom_rtp_image_sibling_count() {
        return 20;
    }
    add_filter( 'rtp_image_sibling_count', 'custom_rtp_image_sibling_count' );
