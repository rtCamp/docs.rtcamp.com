# Filter Name : rtmedia_media_tab_slug

### Description

Set Album as default tab in Media-tab


### Example

Add the following code in your theme's functions.php file:

```php

add_filter('rtmedia_media_tab_slug', 'custom_rtmedia_default_media_tab', 5, 1);

function custom_rtmedia_default_media_tab( $mediaslug ){
	$mediaslug = RTMEDIA_MEDIA_SLUG . "/".RTMEDIA_ALBUM_SLUG;
	return $mediaslug;
}

```
