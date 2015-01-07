---
title: Customize Media Gallery Template
---


By default media gallery template [ i.e. *media-gallery-item.php* ] contains media thumbnails along with media title. You can modify it by overriding rtMedia templates in your theme.

For example, the following is the sample code to show author name in media gallery. 

To do that, first you need a function which will fetch the author's name.

	
	function custom_rtmedia_author_name() {
	    global $rtmedia_backbone;
	    if ( $rtmedia_backbone[ 'backbone' ] ){
		echo '<%= author %>';
	    } else {
		return stripslashes( htmlentities( rtmedia_author_name( false ) ) );
	    }
	}
	

You can use this function in media gallery by modifying the *media-gallery-item.php* template in your theme. Add the following code in *media-gallery-item.php* template.


	<h4 title="Author Name:">
		<?php custom_rtmedia_author_name ();?>
	</h4>


Using the above code, it will only show author name on page load but not when you click load more or any pagination links. rtMedia uses Backbone to handle load more / pagination. You also need to filter the JSON response which is handled by Backbone.

Filter name : rtmedia_media_array_backbone

You can use the following sample code your theme's *function.php* file :


	function rtmedia_backbone_template_filter_author_name( $media_array ){
	    $author_name = get_the_author_meta( 'display_name', $media_array->media_author );
	    $media_array->author = $author_name;
	    return $media_array;
	}
	add_filter( 'rtmedia_media_array_backbone', 'rtmedia_backbone_template_filter_author_name', 10, 1 );


