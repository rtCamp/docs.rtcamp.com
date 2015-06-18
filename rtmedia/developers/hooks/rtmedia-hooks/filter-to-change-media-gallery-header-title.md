##  Filter to change media gallery header title

You can use the filter `rtmedia_gallery_title` in your theme and can modify the default media gallery title  **"Media Gallery"** under media tab.

Add the following code in your theme's functions.php file:
```php
	function change_media_gallery_title( $title ){
		$title = 'New Media Label';
		return $title;
	}
	add_filter('rtmedia_gallery_title', 'change_media_gallery_title', 10, 1);
```

_Where "New Media Label" will be name which you want to use._

[![change-media-gallery-label](https://cloud.githubusercontent.com/assets/7771963/8180814/799e090a-143e-11e5-8636-d8341f69fdfc.png)](https://cloud.githubusercontent.com/assets/7771963/8180814/799e090a-143e-11e5-8636-d8341f69fdfc.png)
