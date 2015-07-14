##Filters 

* [rtm_allow_uploader_view](#rtm_allow_uploader_view)
* [rtmedia_upload_not_allowed_message](#rtmedia_upload_not_allowed_message)
* [rtmedia_bbpress_individual_attachment](#rtmedia_bbpress_individual_attachment)
* [rtmedia_bbpress_attachment_view_filter](#rtmedia_bbpress_attachment_view_filter)

###Description

####rtm_allow_uploader_view <a name="rtm_allow_uploader_view"></a>
***
Filter to modify **allow uploader view** value.

```php
add_filter( 'rtmedia_allow_uploader_view','rtm_allow_uploader_view', 10, 2 );

function rtm_allow_uploader_view (  $flag, $uploader ) {
	if ( 'bbpress' == $uploader ) {
		$flag = false;
	}
	return $flag;
}
```


####rtmedia_upload_not_allowed_message <a name="rtmedia_upload_not_allowed_message"></a>
***
This filter is use to modify **upload not allowed** message in bbpress-attachment addon.

```php
add_filter( 'rtmedia_upload_not_allowed_message', 'rtm_upload_not_allowed_message', 10, 2 );

function rtm_upload_not_allowed_message ( $msg, $uploader ) {
	if ( 'bbpress' == $uploader ) {
		$msg = 'You are not allowed to attach media in bbPress forum.';
	}
	return $msg;
}
```


####rtmedia_bbpress_individual_attachment <a name="rtmedia_bbpress_individual_attachment"></a>
***
Filter to modify html content for individual bbpress attachment before it get render.

```php
add_filter( 'rtmedia_bbpress_individual_attachment', 'rtm_bbpress_individual_attachment', 10, 2 );

function rtm_bbpress_individual_attachment( $content, $attachment ) {
	$content = $content . '<br/>';
	return $content;
}
```


####rtmedia_bbpress_attachment_view_filter <a name="rtmedia_bbpress_attachment_view_filter"></a>
***
Filter to modify html content for bbpress attachments of a **reply/topic** before it get render.

```php
add_filter( 'rtmedia_bbpress_attachment_view_filter', 'rtm_bbpress_attachment_view_filter', 10, 2 );

function rtm_bbpress_attachment_view_filter( $content, $attachment ) {
	$content = $content . '<hr/>';
	return $content;
}
```
