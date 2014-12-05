---
author: joshuaabenazer
comments: false
date: 2013-08-05 08:35:51+00:00
layout: page
slug: rtmedia_allowed_types
title: rtmedia_allowed_types
---

### Description


Add or modify media types allowed in rtMedia.


### Example 1


Adds a media type document.

    
    <code>function custom_rtmedia_allowed_types($allowed_types) {
        $allowed_types['document'] = array(
            'name' => 'document',
            'plural' => 'documents',
            'label' => __('Document', 'rtmedia'),
            'plural_label' => __('Documents', 'rtmedia'),
            'extn' => array('doc','pdf'),
            'thumbnail' => get_stylesheet_directory_uri().'/images/default_doc_thumb.jpg'
        );
        return $allowed_types;
    }
    
    add_filter('rtmedia_allowed_types', 'custom_rtmedia_allowed_types');</code>




### Example 2


Changes the default thumbnail for music.

    
    <code>function custom_rtmedia_default_music_thumb($allowed_types) {
        $allowed_types['music']['thumbnail'] = get_stylesheet_directory_uri().'/images/default_music_thumb.jpg';
        return $allowed_types;
    }
    
    add_filter('rtmedia_allowed_types', 'custom_rtmedia_default_music_thumb');</code>
