---
title: rtp_image_sibling_count
---

Modify images sibling count on image attachment page template, default is 10.

    
    function custom_rtp_image_sibling_count() {
        return 20;
    }
    add_filter( 'rtp_image_sibling_count', 'custom_rtp_image_sibling_count' );
