---
date: 2014-11-27 06:40:44+00:00
title: allow custom media types
---

By default rtMedia support `mp4` file format for video and `mp3` for audio. If you want to allow other file formats than you will need to add following code in your theme or plugin.


    
    <code>function rt_custom_allowed_types( $types ){
    	if ( isset( $types[0] ) && isset( $types[0]['extensions'] ) ) {
    		if ( is_rtmedia_upload_video_enabled() )
    			$types[0]['extensions'] .= ',mov,mpg,flv,wmv,mkv,webm,ogv,mxf,asf,vob,mts,qt,mpeg,x-msvideo'; //Allow video types of file to be uploded
    		if ( is_rtmedia_upload_music_enabled() )
    			$types[0]['extensions'] .= ',wma,ogg,wav,m4a'; //Allow audio types of file to be uploded
    	}
    	return $types;
    }
    
    // filter plupload allowed file formats
    add_filter('rtmedia_plupload_files_filter', 'rt_custom_allowed_types', 10, 1);
    
    function rt_custom_allowed_types_admin_settings( $types ){
    	$allowed_video_string = implode(",", $types['video']['extn']);
    	$allowed_audio_string = implode(",", $types['music']['extn']);
    	$allowed_video = explode(",",$allowed_video_string.',mov,mpg,flv,wmv,mkv,webm,ogv,mxf,asf,vob,mts,qt,mpeg,x-msvideo');
    	$allowed_audio = explode(",",$allowed_audio_string.',wma,ogg,wav,m4a');
    	$types['video']['extn'] = array_unique( $allowed_video );
    	$types['music']['extn'] = array_unique( $allowed_audio );
    	return $types;
    }
    
    // filter to show allowed media types in admin settings
    add_filter('rtmedia_allowed_types', 'rt_custom_allowed_types_admin_settings', 10, 1);</code>



rtMedia uses [mediaelement.js](http://mediaelementjs.com/) to play video and audio which might not support the types you have allowed using above filters. In that case, you will need custom media player which you can use with rtMedia to play audio/video files.
