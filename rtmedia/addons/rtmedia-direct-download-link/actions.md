## Actions

* [rtmedia_pro_before_download_media](#rtmedia_pro_before_download_media)

### Descriptions

####rtmedia_pro_before_download_media <a name="rtmedia_pro_before_download_media"></a>
***
Action fire just before media will start download.

```php
add_action( 'rtmedia_pro_before_download_media', 'rtmedia_before_download_media', 10, 1 );

function rtmedia_before_download_media ( $download ) {
	
	// Restrict media download for subscriber and lower capablities users.

	if ( ! user_can( $download->interactor, 'edit_published_posts' ) ) {
		die('You can\'t download media..');
	}
}
```
