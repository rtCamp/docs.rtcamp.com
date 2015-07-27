## Actions

* [rtm_after_set_custom_thumbnail](#rtm_after_set_custom_thumbnail)
* [rtm_after_remove_custom_thumbnail](#rtm_after_remove_custom_thumbnail)

### Descriptions

####rtm_after_set_custom_thumbnail <a name="rtm_after_set_custom_thumbnail"></a>
***
This action will fire just after custom thumbnail is set for any media type.

```php
add_action( 'rtm_after_set_custom_thumbnail', 'rtmedia_after_set_custom_thumbnail', 10, 2 );

function rtmedia_after_set_custom_thumbnail ( $id, $file_name ) {
	error_log( var_export( 'Custom thumbnail updated for ' . get_rtmedia_title( $id ) , true ) );
}
```

####rtm_after_remove_custom_thumbnail <a name="rtm_after_remove_custom_thumbnail"></a>
***
This action will fire just after custom thumbnail is removed for any media type.

```php
add_action( 'rtm_after_remove_custom_thumbnail', 'rtmedia_after_remove_custom_thumbnail', 10, 1 );

function rtmedia_after_remove_custom_thumbnail ( $id ) {
	error_log( var_export( 'Custom thumbnail removed for ' . get_rtmedia_title( $id ) , true ) );
}
```
