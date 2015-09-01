## Filters

* [rtm_seo_media_priority](#rtm_seo_media_priority)
* [rtm_seo_media_change_frequency](#rtm_seo_media_change_frequency)
* [rtm_seo_media_modification_date](#rtm_seo_media_modification_date)


###description

* ####rtm_seo_media_priority <a name="rtm_seo_media_priority"></a>
***
Filter to modify **priority** of media in sitemap file.
```php
add_filter('rtm_seo_media_priority', 'rtm_seo_media_priority', 10, 2 );

function rtm_seo_media_priority( $priority, $media_id ) {
	return 0.8;
}
```

* ####rtm_seo_media_change_frequency <a name="rtm_seo_media_change_frequency"></a>
***
Filter to modify **Changing frequency** of media in sitemap file.
```php
add_filter('rtm_seo_media_change_frequency', 'rtm_seo_media_change_frequency', 10, 2 );

function rtm_seo_media_change_frequency( $frequency, $media_id ) {
	return 'weekly';
}
```


* ####rtm_seo_media_modification_date <a name="rtm_seo_media_modification_date"></a>
***
Filter to modify **last modification tiime** of media in sitemap file.
```php
add_filter('rtm_seo_media_modification_date', 'rtm_seo_media_modification_date', 10, 2 );

function rtm_seo_media_modification_date( $date, $media_id ) {
	// Code to change last modification tiime of media
	return $date;
}
```