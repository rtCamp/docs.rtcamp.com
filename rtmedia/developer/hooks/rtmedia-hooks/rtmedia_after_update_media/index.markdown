---
author: joshuaabenazer
comments: false
date: 2013-09-23 16:25:43+00:00
layout: page
slug: rtmedia_after_update_media
title: rtmedia_after_update_media
---

### Description


This action occurs after the media is updated.



### Example


Updates the camera information. ( Check [rtmedia_add_edit_fields](https://rtcamp.com/rtmedia/docs/developer/rtmedia-hooks/rtmedia_add_edit_fields/) )


    
    <code>function custom_save_rtmedia_camera_build($id, $state) {
        $type = rtmedia_type($id);
        if ( $type == 'photo' ) {
            $camera = get_rtmedia_meta($id,'camera');
            if ( $camera != $_POST['camera'])
            update_rtmedia_meta($id,'camera',$_POST['camera']);
        }
    }
    
    add_action('rtmedia_after_update_media', 'custom_save_rtmedia_camera_build', 10,2);</code>
