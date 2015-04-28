---
title: Show last N images in header
---

If you want to display last N number of images in header section, use the following piece of code in your theme's functions.php file:

	add_action( 'bp_after_member_header', 'show_last_n_images', 99 );

	function show_last_n_images() {
	    $n = 5;
	    if( $user_id = bp_displayed_user_id() ) {
			$model = new RTMediaModel();
			$results = $model->get( array( 'media_type' => 'photo', 'media_author' => $user_id ), 0, $n );
			if( $results ) {
				?>
				<ul>
    				<?php foreach( $results as $image ) { ?>
    					<li>
    						<div class="rtmedia-media" id="rtmedia-media-<?php echo $image->id; ?>">
    							<a href="<?php echo get_rtmedia_permalink( $image->id ); ?>" title="<?php echo $image->media_title; ?>">
    							    <img src="<?php rtmedia_image( "rt_media_thumbnail", $image->id ); ?>" alt="<?php echo rtmedia_image_alt( $image->id );?>" />
    							</a>
    						</div>
    					</li>
    			    <?php } ?>
				</ul>
				<?php
	        }
	    }
    }

Set the value for the N as you require.
