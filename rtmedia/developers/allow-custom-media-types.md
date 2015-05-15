## Allow Custom Media Types


By default, rtMedia supports `mp4` file format for video and `mp3` for audio. To allow other file formats, add the following code in your theme or plugin.



    `function rt_custom_allowed_types( $types ){
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
    add_filter('rtmedia_allowed_types', 'rt_custom_allowed_types_admin_settings', 10, 1);`



rtMedia uses [mediaelement.js](http://mediaelementjs.com/) to play video and audio which might not support the types you have allowed using the above filters. In this case, you will need a custom media player that you can use with rtMedia to play audio/video files.
