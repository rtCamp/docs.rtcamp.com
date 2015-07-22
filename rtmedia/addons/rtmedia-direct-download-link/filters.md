## Filters

* [rtm_download_button_label](#rtm_download_button_label)
* [rtm_view_original_button_label](#rtm_view_original_button_label)

### Descriptions

####rtm_download_button_label <a name="rtm_download_button_label"></a>
***
Filter is use to modify **Download** button label.

```php
add_filter( 'rtm_download_button_label', 'rtmedia_download_button_label', 10, 1 );

function rtmedia_download_button_label( $label ) {
	return 'Save Media';
}
```

####rtm_view_original_button_label <a name="rtm_view_original_button_label"></a>
***
Filter is use to modify **View original** button label.

```php
add_filter( 'rtm_view_original_button_label','rtmedia_view_original_button_label', 10, 1 );

function rtmedia_view_original_button_label( $label ) {
	return 'Open in New Tab';
}
```
