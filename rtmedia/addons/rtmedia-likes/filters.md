## Filters

* [rtmedia_my_likes_media_page_title](#rtmedia_my_likes_media_page_title)
* [rtmedia_user_likes_media_page_title](#rtmedia_user_likes_media_page_title)
* [rtm_likes_js_strings](#rtm_likes_js_strings)
* [rtmedia_sub_nav_user_likes](#)

### Descriptions

####rtmedia_my_likes_media_page_title <a name="rtmedia_my_likes_media_page_title"></a>
***
Filter is use to modify **My liked page** page title.

```php
add_filter( 'rtmedia_my_likes_media_page_title', 'rtm_my_likes_media_page_title', 10, 1 );

function rtm_my_likes_media_page_title ( $title ) {
	return 'Your likes';
}
```

####rtmedia_user_likes_media_page_title <a name="rtmedia_user_likes_media_page_title"></a>
***
Filter is use to modify **user's liked page** page title.

```php
add_filter( 'rtmedia_user_likes_media_page_title', 'rtm_user_likes_media_page_title', 10, 1 );

function rtm_user_likes_media_page_title ( $title ) {
	return 'Friend likes';
}

```

####rtm_likes_js_strings <a name="rtm_likes_js_strings"></a>
***
This filter is use to modify JS strings for rtMedia likes addon.

```php
add_filter('rtm_likes_js_strings', 'rtmedia_likes_js_strings', 10, 1 );

function rtmedia_likes_js_strings( $rtmedia_like_main_js ) {
	$rtmedia_like_main_js ['rtmedia_media_who_liked']= 'Check who liked this media';
	return $rtmedia_like_main_js;
}
```