## Filters

* [rtm_set_album_cover_label](#rtm_set_album_cover_label)
* [rtm_allow_set_album_cover_art](#rtm_allow_set_album_cover_art)

### Description

####rtm_set_album_cover_label <a name="rtm_set_album_cover_label"></a>
***
Filter is use to modify **Set As Album Cover** button.

```php
add_filter( 'rtm_set_album_cover_label', 'rtmedia_set_album_cover_label', 10, 1 );

function rtmedia_set_album_cover_label ( $label ) {
	return 'Make Album Cover';
}
```

####rtm_allow_set_album_cover_art <a name="rtm_allow_set_album_cover_art"></a>
***
Filter is use to restict **Set As Album Cover** button from rendering.
```php
add_filter( 'rtm_allow_set_album_cover_art', 'rtmedia_allow_set_album_cover_art', 10, 3 );

function rtmedia_allow_set_album_cover_art (  $allow, $media_id, $interactor  ) {
	if ( $interactor == get_current_user_id() ) {
		$allow = false;
	}
	return $allow;
}
```
