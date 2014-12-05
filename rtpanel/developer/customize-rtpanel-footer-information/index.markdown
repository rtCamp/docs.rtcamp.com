---
author: manish.songirkar
comments: false
date: 2014-03-08 10:02:07+00:00
layout: page
slug: customize-rtpanel-footer-information
title: Customize rtPanel Footer Information
---

You are using rtPanel Theme Framework for site development and if you want to show your own copyrights in your customized theme, then here is the small tweak to customize rtPanel footer information.

In rtPanel we have used hook to add footer information, following is the code we have added by default.

    
    function rtp_footer_copyright_content() { ?>
    	<div id="footer" class="rtp-footer rtp-section-container row">
    	<?php $rtp_set_grid_class = apply_filters( 'rtp_set_full_width_grid_class', 'large-12 columns rtp-full-width-grid' ); ?>
    		<div class="rtp-footer-section <?php echo esc_attr( $rtp_set_grid_class ); ?>">
    			<p>&copy; <?php echo date( 'Y' );
    			echo ' - ';
    			bloginfo( 'name' ); ?>
    			<em><?php printf( __( 'Designed on <a role="link" target="_blank" href="%s" class="rtp-common-link" title="rtPanel WordPress Theme Framework">rtPanel WordPress Theme Framework</a>.', 'rtPanel' ), RTP_THEME_URL ); ?></em></p>
    		</div>
    	</div><!-- #footer -->
    	<?php
    }
    
    add_action( 'rtp_hook_end_footer', 'rtp_footer_copyright_content' );


Above code display output as, 
`© 2014 - rtPanel Designed on rtPanel WordPress Theme Framework.`

Where "2014" is the current year, "rtPanel" is the site name (set on settings option page) and "Designed on rtPanel WordPress Theme Framework" is the rights statement.

You can customize this information as per your requirement, below are the points which you can change or remove from footer,



	
  * Site Name

	
  * Year

	
  * A Rights Statement


Its recommended to not change other present HTML and PHP code, if you don't want to change the markup.

Follow the steps below to change footer information, add this code in your theme functions.php file,


#### 1. Remove current Hook:


Following code will remove the current copyrights information,

    
    remove_action( 'rtp_hook_end_footer', 'rtp_footer_copyright_content' );




#### 2. Own Footer Information:


Following code will add your custom footer information,

    
    function my_footer_copyright_info() { ?>
    	<div id="footer" class="rtp-footer rtp-section-container row">
    	<?php $rtp_set_grid_class = apply_filters( 'rtp_set_full_width_grid_class', 'large-12 columns rtp-full-width-grid' ); ?>
    		<div class="rtp-footer-section <?php echo esc_attr( $rtp_set_grid_class ); ?>">
    			<p>&copy; 2010-2014 Author/Site Name. All Rights Reserved.</p>
    		</div>
    	</div><!-- #footer -->
    	<?php
    }




#### 3. Add New Hook:


Following code will add your custom copyrights information,

    
    add_action( 'rtp_hook_end_footer', 'my_footer_copyright_info' );



This code will display the output as,
`© 2010-2014 Author/Site Name. All Rights Reserved.`

**Note:** Change the text provided in step 2 to display your own footer information.
