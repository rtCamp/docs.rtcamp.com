## Actions

* [rtmedia_pro_after_rating_media](#rtmedia_pro_after_rating_media)

### Description

####rtmedia_pro_after_rating_media <a name="rtmedia_pro_after_rating_media"></a>
***
This action will fire immediately after user rate any media.

```php
add_action( 'rtmedia_pro_after_rating_media', 'rtm_after_rating_media', 10, 1 );

function rtm_after_rating_media ( $rating ) {
	error_log( var_export( 'User rated on media '. $rating->media->media_title, true ) );
}
```
