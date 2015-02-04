---
title: Custom thumbnail for each file type
---

You can set custom thumbnail for each file type of allowed media type. Use `rtmedia_allowed_types` filter in your theme or plugin and set `ext_thumb` value for that media type. 

Following is the demo code to set custom thumbnail for **.mp4** and **.mov** file format of media type video.

	add_filter( 'rtmedia_allowed_types', 'test_rtmedia_allowed_types', 999, 1 );

	function test_rtmedia_allowed_types( $types ){
		if( isset( $types['video'] ) ){
			$types['video']['ext_thumb'] = array( 
				'mp4' => 'thumbnail url here', 
				'wmv' => 'thumbnail url here',
			);	
		}		
		return $types;
	}