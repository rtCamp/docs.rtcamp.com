---
author: apekshadeshpande
comments: false
date: 2012-04-25 10:44:54+00:00
layout: page
slug: rtp_header_image_width
title: rtp_header_image_width
wordpress_id: 3090
---

### Description


Modifies the width of the header image under Appearance-> Header. Default is 960.


### Example



    
    function custom_rtp_header_image_width( $width ) {
    return 900;
    }
    add_filter( 'rtp_header_image_width', 'custom_rtp_header_image_width' );
