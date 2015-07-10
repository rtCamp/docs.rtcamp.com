## Filters

* [rtm_default_albums_admin_js_strings](#rtm_default_albums_admin_js_strings)

###Description

#### rtm_default_albums_admin_js_strings <a name="rtm_default_albums_admin_js_strings"></a>
***
Filter to modify js messages string in **default albums** addon.
```php
add_filter('rtm_default_albums_admin_js_strings', 'rtmedia_default_albums_admin_js_strings', 10, 1 );

function rtmedia_default_albums_admin_js_strings ( $rtmedia_default_albums_admin_js ) {
	$rtmedia_default_albums_admin_js['rtmedia_empty_global_album_msg'] = 'Album name can not be empty..';

	return $rtmedia_default_albums_admin_js;
}
```
