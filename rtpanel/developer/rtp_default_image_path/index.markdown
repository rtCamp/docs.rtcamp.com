---
title: rtp_default_image_path
---

### Description


Modifies the default image path. This image will be shown in case the post has no featured image or image in its content. Default is none.


### Example



    
    function custom_rtp_default_image_path( $image_path ) {
    return 'http://rtcamp.com/wp-content/themes/rtpanel/img/rtpanel-logo.jpg';
    }
    add_filter( 'rtp_default_image_path', 'custom_rtp_default_image_path' );
