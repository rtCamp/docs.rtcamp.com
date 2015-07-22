##Filters 

* [rtmedia_allow_uploader_view](#rtmedia_allow_uploader_view)
* [rtmedia_upload_not_allowed_message](#rtmedia_upload_not_allowed_message)
* [rtmedia_wordpress_comment_attachment_view_filter](#rtmedia_wordpress_comment_attachment_view_filter)

###Description

####rtmedia_allow_uploader_view <a name="rtmedia_allow_uploader_view"></a>
***
Filter to modify **allow uploader view** value.

```php
add_filter( 'rtmedia_allow_uploader_view', 'rtm_allow_uploader_view', 10, 2 );

function rtm_allow_uploader_view ( $allow, $uploader ) {
	if ( 'comment_form' == $uploader ) {
		$allow = false;
	}
	return $allow;
}
```

####rtmedia_upload_not_allowed_message <a name="rtmedia_upload_not_allowed_message"></a>
***
This filter is use to modify **upload not allowed** warning message.

```php
add_filter( 'rtmedia_upload_not_allowed_message', 'rtm_upload_not_allowed_message', 10, 2 );

function rtm_upload_not_allowed_message ( $msg, $uploader ) {
	if ( 'comment_form' == $uploader ) {
		return  __( 'You are not allowed to attach media in comment.', 'rtmedia' );
	}
	return $msg;
}
```

#### <a name=""></a>
***
Filter to modify html content for WordPress comment attachments before it get render.

```php
add_filter('rtmedia_wordpress_comment_attachment_view_filter', 'rtm_wordpress_comment_attachment_view_filter', 10, 2 );

function rtm_wordpress_comment_attachment_view_filter ( $attachment_content, $attached_medias ) {
	return  '<div style="border: 2px dashed black;" >'. $attachment_content .'</div>';
}
```
