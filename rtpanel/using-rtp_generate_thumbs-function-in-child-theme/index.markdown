---
comments: false
date: 2012-01-24 07:49:46+00:00
layout: page
slug: using-rtp_generate_thumbs-function-in-child-theme
title: Using rtp_generate_thumbs() function in child theme
---

This is by-far the easiest way to create the blog thumbnails on the fly, all we need is, to get familiar with this. We have the default **_rtp_generate_thumbs()_** function available in our rtPanel core theme. This function directly returns the **_thumb_URL_** that can be used anywhere as the image source on the page. This function needs to be called with parameters as:

    
    $thumb_url = rtp_generate_thumbs(  get_post_thumbnail_id(), 'rtp-blog-thumb' );


The '**_rtp-blog-thumb_**' blog here specifies the thumb size that has been to be registered prior to using it in in this function. So this can be registered as:

    
    function rtp_register_thumb_size(){
        add_image_size( 'rtp-blog-thumb', 319, 190, 1 );
    }
    add_action( 'init', 'rtp_register_thumb_size' );


Similarly we can register as many image sizes we want to and correspondingly use it in our code. So now that the image size has been registered, we can specify it using our _rtp_generate_thumbs()_ function as shown above in the first snippet, where we stored the return value in some variable **_$thumb_url_**.
By default the function provides the **image fallback**, searching for the post's featured image first and if its not found, it checks for the post's first image. But what if this is also not found? Here we add a provision for the default image in our child theme as:

    
    $thumb_url = ( $thumb_url ) ? $thumb_url : get_stylesheet_directory_uri(). '/default-img.jpg';


Also if we want to add the functionality for checking the attachments of a particular post as yet another image fallback condition, we need to over-ride the default **_rtp_generate_thumbs()_** function as**_ rtp_generate_child_thumbs()_** in our _function.php_ and add the following code segment in addition to the code available in the default **_rtp_generate_thumbs()_** function.

    
    function rtp_generate_child_thumbs() {
         if ($attach_id == ''){
            $images =& get_children( 'post_parent='.$post->ID.'&post_type=attachment&post_mime_type=image&numberposts=1' );
         }
         if ( $images ) {
            // if the post has attachments
            foreach ( $images as $attachment) {
    	$image_src = wp_get_attachment_image_src( $attachment->ID, $size );
            return $image_src[0] ;
         }
         //rest keep the same as in the default rtp_generate_thumbs() function
    }


Now that we have overridden the default function, now instead of calling the **_rtp_generate_thumbs()_** function, we make calls to **_rtp_generate_child_thumbs()_** instead, as:

    
    $thumb_url = rtp_generate_child_thumbs(  get_post_thumbnail_id(), 'rtp-blog-thumb' );


I hope now you know how to use '_rtp_generate_thumbs()_' and '_rtp_generate_child_theme()_' functions in rtPanel.

For any questions/doubts you can connect with rtPanel developers on our [support forum](https://rtcamp.com/support/forum/rtpanel/forum/user/).
