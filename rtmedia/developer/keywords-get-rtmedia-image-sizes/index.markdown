---
date: 2014-11-26 09:58:08+00:00
title: Keywords to get rtMedia image sizes
---

Image sizes used by rtMedia are described [here](http://docs.rtcamp.com/rtmedia/getting-started/settings/#ImageSizes).

You can use following image size to retrieve rtMedia images.

1. rt_media_thumbnail  : For thumbnail image
2. rt_media_activity_image : For medium size image
3. rt_media_single_image : For large size image
4. rt_media_featured_image : For featured image

Below is the sample code which you can use in your theme, plugin or custom code where you can use these keywords.


    
    <code>$image_sizes = array( 'rt_media_thumbnail', 'rt_media_activity_image', 'rt_media_single_image', 'rt_media_featured_image' );
    
    $attachment_id = 8; // attachment ID
    
    foreach ( $image_sizes as $image_size ) {
        $url = wp_get_attachment_image_src( $attachment_id, $image_size );
    }</code>




