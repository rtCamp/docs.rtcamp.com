## Filters

* [widget_title](#widget_title)
* [rtm_gallery_widget_media_type_title](#rtm_gallery_widget_media_type_title)
* [rtmedia_allow_uploader_view](#rtmedia_allow_uploader_view)
* [rtmedia_upload_not_allowed_message](#rtmedia_upload_not_allowed_message)

### Descriptions

####widget_title <a name="widget_title"></a>
***
This filter allows to modify **title** of widgets.

```php
add_filter( 'widget_title', 'rtm_widget_title', 10, 1 );

function rtm_widget_title( $title ) {
	return 'rtMedia : '. $title;
}
```


####rtm_gallery_widget_media_type_title <a name="rtm_gallery_widget_media_type_title"></a>
***
This filter is use to modify **title of tab** in gallery widget.

```php
add_filter( 'rtm_gallery_widget_media_type_title', 'rtmedia_gallery_widget_media_type_title', 10, 3);

function rtmedia_gallery_widget_media_type_title(  $strings, $type, $wdType  ) {
	if ( 'photo' == $type ){
		$strings = 'Images';
	}
	return $strings;
} 
```

####rtmedia_allow_uploader_view <a name="rtmedia_allow_uploader_view"></a>
***
This filter is use to restrict uploader view from rendering.

```php
add_filter( 'rtmedia_allow_uploader_view', 'rtm_allow_uploader_view', 10, 2 );

function rtm_allow_uploader_view ( $flag, $uploader ){
	if ( 'uploader_widget' == $uploader ) {
		$flag = false;
	}
	return $flag;
}
```

####rtmedia_upload_not_allowed_message <a name="rtmedia_upload_not_allowed_message"></a>
***
This filter is use to modify '**Upload media not allowed**'' warning message.

```php
add_filter( 'rtmedia_upload_not_allowed_message', 'rtm_uploader_not_allowed_message', 10, 2);

function rtm_uploader_not_allowed_message( $msg, $uploader ) {
	if ( 'uploader_widget' == $uploader ) {
		$msg = 'You are not allowed to upload media from this widget.'; 
	}
	return $msg;
}
```
