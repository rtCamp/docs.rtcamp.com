## Filters

* [rtmedia_gallery_sort_actions](#rtmedia_gallery_sort_actions)

###description

* ####rtmedia_gallery_sort_actions <a name="rtmedia_gallery_sort_actions"></a>

If you want to removes Sort menu from gallery Shortcode then you can use this filter.
For example:

```php
function rtm_remove_rtmedia_gallery_sort_actions( $options ) {
  global $rtmedia_query;
  if (isset( $rtmedia_query->is_gallery_shortcode ) && $rtmedia_query->is_gallery_shortcode ) {
    return array();
  }
  return $options;
}
add_filter( 'rtmedia_gallery_sort_actions', 'rtm_remove_rtmedia_gallery_sort_actions', 10, 1 );
```
