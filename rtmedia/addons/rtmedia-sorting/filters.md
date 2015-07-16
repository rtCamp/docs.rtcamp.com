## Filters

* [rtm_sort_label](#rtm_sort_label)
* [rtmedia_change_sort_parameters_label](#rtmedia_change_sort_parameters_label)
* [rtmedia_gallery_sort_actions](#rtmedia_gallery_sort_actions)

### Descriptions

####rtm_sort_label <a name="rtm_sort_label"></a>
***
Filter is use to modify **sort** label in media galllery.

```php
add_filter( 'rtm_sort_label', 'rtmedia_sort_label', 10 ,1 );

function rtmedia_sort_label( $label ) {
	if ( 'sort' == $label ) {
		$label = 'Arrange';
	}
	return $label;
}
```

####rtmedia_change_sort_parameters_label <a name="rtmedia_change_sort_parameters_label"></a>
***
Filter is use to modify **Sort parameters** label in galllery shortcode.

```php
add_filter( 'rtmedia_change_sort_parameters_label', 'rtm_change_sort_parameters_label', 10, 1 );

function rtm_change_sort_parameters_label ( $rtmedia_sort_labels ) {
	$rtmedia_sort_labels['new'] = 'Latest';
	$rtmedia_sort_labels['like'] = 'Favorites';
	
	return $rtmedia_sort_labels;
}
```

####rtmedia_gallery_sort_actions <a name="rtmedia_gallery_sort_actions"></a>
***
This filter is use to modify actions for sorting in gallery.
***
