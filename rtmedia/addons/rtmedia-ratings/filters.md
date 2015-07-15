## Filters

* [rtm_modify_rating_label](#rtm_modify_rating_label)
* [rtmedia_render_media_rate](#rtmedia_render_media_rate)

### Description

####rtm_modify_rating_label <a name="rtm_modify_rating_label"></a>
***
Filter to modify **Labels** for rating.

```php
add_filter( 'rtm_modify_rating_label', 'rtmedia_modify_rating_label', 10, 1 );

function rtmedia_modify_rating_label ( $labels ) {
	$labels['rating'] = 'Grade';
	$labels['your_rating'] = 'Your Grade';
	return $labels;
}

```

####rtmedia_render_media_rate <a name="rtmedia_render_media_rate"></a>
***
this filter is use to stop ratings from rendering.

```php
add_filter( 'rtmedia_render_media_rate', 'rtm_render_media_rating', 10, 1 );

function rtm_render_media_rating ( $flag ) {
	return true;
}
```
