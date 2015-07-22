## Actions

* [rtmedia_before_gallery_widget_content](#rtmedia_before_gallery_widget_content)
* [rtmedia_after_gallery_widget_content](#rtmedia_after_gallery_widget_content)
* [rtmedia_gallery_widget_before_media](#rtmedia_gallery_widget_before_media)
* [rtmedia_gallery_widget_after_media](#rtmedia_gallery_widget_after_media)

###Descriptions

####rtmedia_before_gallery_widget_content <a name="rtmedia_before_gallery_widget_content"></a>
***
This action fire just before **Gallery widget** content start rendering.

```php
add_action( 'rtmedia_before_gallery_widget_content', 'rtm_before_gallery_widget_content', 10 );

function rtm_before_gallery_widget_content () {
	 echo '<div style="background-color : rgba(198, 198, 198, 0.3);">';
}
```

####rtmedia_after_gallery_widget_content <a name="rtmedia_after_gallery_widget_content"></a>
***
This action fire just after **Gallery widget** content finished rendering.

```php
add_action( 'rtmedia_after_gallery_widget_content', 'rtm_after_gallery_widget_content', 10 );

function rtm_after_gallery_widget_content () {
	echo '</div>';
}
```

####rtmedia_gallery_widget_before_media <a name="rtmedia_gallery_widget_before_media"></a>
***
This action fire just before a **Media** in gallery widget start rendering.

```php
add_action( 'rtmedia_gallery_widget_before_media', 'rtm_gallery_widget_before_media', 10, 1 );

function rtm_gallery_widget_before_media ( $rt_media_gallery ) {
	 echo '<div style="border : 2px solid grey;">';
}
```

####rtmedia_gallery_widget_after_media <a name="rtmedia_gallery_widget_after_media"></a>
***
This action fire just after a **Media** in gallery widget finished rendering.

```php
add_action( 'rtmedia_gallery_widget_after_media', 'rtm_gallery_widget_after_media', 10, 1 );

function rtm_gallery_widget_after_media ( $rt_media_gallery ) {
	 echo '</div>';
}
```