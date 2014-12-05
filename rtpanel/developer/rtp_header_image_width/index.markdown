---
title: rtp_header_image_width
---

### Description


Modifies the width of the header image under Appearance-> Header. Default is 960.


### Example



    
    function custom_rtp_header_image_width( $width ) {
    return 900;
    }
    add_filter( 'rtp_header_image_width', 'custom_rtp_header_image_width' );
