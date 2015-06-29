## Filter to modify gallery sort actions

Filter name : **rtmedia_gallery_sort_actions**

You can use this filter in your theme and can modify the default sorting actions.

[![rtmedia-sorting-actions](https://cloud.githubusercontent.com/assets/7771963/8403540/5c8e3a90-1e63-11e5-9dd6-84b8cc5a61ec.png)](https://cloud.githubusercontent.com/assets/7771963/8403540/5c8e3a90-1e63-11e5-9dd6-84b8cc5a61ec.png)

For example display these sorting options only to administrator role.

Add the following code in your theme's functions.php file:

```php
function hide_rtmedia_gallery_sort_actions( $option ){
  $current_user = wp_get_current_user();
  if( $current_user->roles[0] != 'administrator' ){
    $option = null;
  }
  return $option;
}
add_filter('rtmedia_gallery_sort_actions', 'hide_rtmedia_gallery_sort_actions', 10, 1);
```
