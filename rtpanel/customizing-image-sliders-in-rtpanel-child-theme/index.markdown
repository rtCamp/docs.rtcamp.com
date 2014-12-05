---
author: apekshadeshpande
comments: false
date: 2012-04-04 14:14:50+00:00
excerpt: The image slider enhances the beauty of the website. The image slider can
  be used to showcase the product or to display the portfolio or featured blog posts.
layout: page
slug: customizing-image-sliders-in-rtpanel-child-theme
title: Customizing Image Sliders in rtPanel Child Theme
---

The image slider enhances the beauty of the website. The image slider can be used to showcase the product or to display the portfolio or featured blog posts.

[post](https://rtcamp.com/blog/implementing-rtpslider-child-theme/) 


### 1. Displaying only images:


By default the slider displays latest 10 posts featured image with its post title and the excerpt. If you would like to display only images on the post then you need to comment the following line in the code:

    
      $slider_html .= '<h1><a href="' . get_permalink() .'" title="'.  get_the_title().'" rel="bookmark" >' . ( ( strlen( get_the_title() ) > 50 ) ? substr( get_the_title(), 0, 50 ) . "..." : get_the_title() ) . '</a></h1>' .'<h6>'. get_the_excerpt().'</h6>';




### 2. Displaying the images from the posts of specific categories:


In many of our projects we have displayed slider where the post belonged to specific category.  For example, posts having 'Slider' category will only be displayed on the slider.  To display such post in the slider you just need to add the category name in the the**_ rtp-slideshow.php _**or example, if you want to display the posts of 'Slider' category on the slider then you just need to add ** 'category_name' =>'slider'** in below code

    
     query_posts( array( 'ignore_sticky_posts' => 1, 'posts_per_page' => 10, 'order' => 'DESC') );


Thus the code will be as below:

    
     query_posts( array( 'ignore_sticky_posts' => 1, 'posts_per_page' => 10, 'order' => 'DESC', 'category_name' =>'slider') );




### 3. Displaying the image from the page attachment:


The images which are attached to the page can be displayed in the slider. That is, each page will display its page attachment in the Slider.  For this you have to replace the code in the rtp_get_cycle_slider() function with below code:

    
    global $post;
     $images = & get_children( array( 'post_type' => 'attachment', 'post_mime_type' => 'image', 'order' => 'ASC', 'post_parent' => $post->ID, 'numberposts' => 20 ) );
     $slider_html = '';
     if ( count( $images ) > 1 ) {
     $slider_html .= '<div class="clear"></div><div id="rtp-cycle-slider"><div class="rtp-cycle-slider-container">';
     foreach ( $images as $image ) {
     $slider_html .= '<div class="cycle-slides">' . wp_get_attachment_image( $image->ID, 'rtp-slider' ) . '</div>';
     }
     $slider_html .= '</div>';
     }
     echo $slider_html;


**Note:** The slider will be display if there are minimum 2 images in the page attachment.

Thus using rtPanel child theme deploying the slider in the website becomes easy and presenting it in diffrent way is much easier. You can add your CSS styling to the class in the div tags to enhance the slider design. :)
