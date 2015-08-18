## Filters

* [rtmedia_can_user_tag_photo](#rtmedia_can_user_tag_photo)

### Description

####rtmedia_can_user_tag_photo <a name="rtmedia_can_user_tag_photo"></a>
***
Filter is use to allow / disallow photo tagging. Add the following code in your theme's functions.php file to disallow all users to tag each other into media.

```php
add_filter('rtmedia_can_user_tag_photo', 'rtmedia_filter_can_user_tag_photo', 10, 2);

function rtmedia_filter_can_user_tag_photo($allow, $media_id){

	$allow = FALSE;
	return $allow;
}

```
