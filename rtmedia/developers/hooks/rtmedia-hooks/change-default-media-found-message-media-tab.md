## Change Default No Media Found Message in Media Tab

You can use the filter `rtmedia_no_media_found_message_filter` in your theme and can modify the default message of **"Oops ! There's no media found for the request !!"** in media tab.

[![before-no-media-found-custom-msg](https://cloud.githubusercontent.com/assets/7771963/8181544/5e22eca8-1444-11e5-9df0-49cc5039f407.png)](https://cloud.githubusercontent.com/assets/7771963/8181544/5e22eca8-1444-11e5-9df0-49cc5039f407.png)

Add the following code in your theme's functions.php file:

```php
function custom_no_media_found_message_function( $message ) {
	$message = "Custom Message Comes Here ... !";
	return $message;
	}
add_filter( 'rtmedia_no_media_found_message_filter', 'custom_no_media_found_message_function' ,10, 1 );
```
[![after-nomedia-found-custom-msg](https://cloud.githubusercontent.com/assets/7771963/8181581/c2a0f076-1444-11e5-9092-c103358fa8fc.png)](https://cloud.githubusercontent.com/assets/7771963/8181581/c2a0f076-1444-11e5-9092-c103358fa8fc.png)
