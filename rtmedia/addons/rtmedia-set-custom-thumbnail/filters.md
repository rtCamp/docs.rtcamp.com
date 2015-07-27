## Filters

* [rtm_allow_custom_thumbnail](#rtm_allow_custom_thumbnail)

### Descriptions

####rtm_allow_custom_thumbnail <a name="rtm_allow_custom_thumbnail"></a>
***
Filter is use to restrict set custom thumbnail for any media type.

Note:: Here media type for album is **album-edit**.

```php
add_filter( 'rtm_allow_custom_thumbnail', 'rtmedia_allow_custom_thumbnail', 10, 2 );

function rtmedia_allow_custom_thumbnail( $allow, $media_type ) {
	if ( 'video' == $media_type ) {
		$allow = false;
	}
	return $allow;
}
```
