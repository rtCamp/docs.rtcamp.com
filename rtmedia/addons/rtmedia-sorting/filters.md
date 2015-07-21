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
If you want to removes Sort menu from gallery Shortcode then you can use this filter.

```php
add_filter( 'rtmedia_gallery_sort_actions', 'rtm_remove_rtmedia_gallery_sort_actions', 10, 1 );

function rtm_remove_rtmedia_gallery_sort_actions( $options ) {
  global $rtmedia_query;
  if (isset( $rtmedia_query->is_gallery_shortcode ) && $rtmedia_query->is_gallery_shortcode ) {
    return array();
  }
  return $options;
}
```
