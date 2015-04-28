---
title: rtmedia_allowed_types
---

### Description


Add or modify media types allowed in rtMedia. 

**Note:** It's necessary to use this filter in [mu-plugins](http://codex.wordpress.org/Must_Use_Plugins) in order to make this filter work.


### Example 1


Below Example will add a media type document. You need to use the following piece of code in your theme's functions.php file:

    
    function custom_rtmedia_allowed_types($allowed_types) {
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
    
    add_filter('rtmedia_allowed_types', 'custom_rtmedia_allowed_types');




### Example 2


Below Example changes the default thumbnail for music. You need to use the following piece of code in your theme's functions.php file:

    
    function custom_rtmedia_default_music_thumb($allowed_types) {
        $allowed_types['music']['thumbnail'] = get_stylesheet_directory_uri().'/images/default_music_thumb.jpg';
        return $allowed_types;
    }
    
    add_filter('rtmedia_allowed_types', 'custom_rtmedia_default_music_thumb');
