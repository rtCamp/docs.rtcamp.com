## Filters

* [rtm_set_profile_pic_label](#rtm_set_profile_pic_label)
* [rtm_allow_buddypress_set_profile_pic](#rtm_allow_buddypress_set_profile_pic)
* [rtmedia_profile-picture_button_filter](#rtmedia_profile-picture_button_filter)

### Descriptions

####rtm_set_profile_pic_label <a name="rtm_set_profile_pic_label" ></a>
***
Filter is use to modify **Set Profile Pic** label.

```php
add_filter( 'rtm_set_profile_pic_label', 'rtmedia_set_profile_pic_label', 10, 1 );

function rtmedia_set_profile_pic_label ( $label ) {
	return 'Make Profile Pic';
}
```

####rtm_allow_buddypress_set_profile_pic <a name="rtm_allow_buddypress_set_profile_pic"></a>
***
Filter is use to restrict **Set Profile Pic** button from rendering.

```php
add_filter( 'rtm_allow_buddypress_set_profile_pic', 'rtmedia_allow_buddypress_set_profile_pic', 10, 3 );

function rtmedia_allow_buddypress_set_profile_pic (  $allow, $media_id, $interactor  ) {
	if ( $interactor == get_current_user_id() ) {
		$allow = true;
	}
	return $allow;
}
```

####rtmedia_profile-picture_button_filter <a name="rtmedia_profile-picture_button_filter"></a>
***
Filter is use to modify **Set Profile Pic Button**.

```php
add_filter( 'rtmedia_profile-picture_button_filter', 'rtm_profile_picture_button', 10, 1 );

function rtm_profile_picture_button ( $button ){
	return '<button type="submit" name="upload" class="button rtmedia-action-buttons">Make Profile Pic</button>';
}
```
