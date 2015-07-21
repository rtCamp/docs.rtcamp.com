## Actions

* [rtmedia_pro_after_set_album_cover](#rtmedia_pro_after_set_album_coverrtmedia_pro_after_set_album_cover)

### Description

####rtmedia_pro_after_set_album_cover <a name="rtmedia_pro_after_set_album_cover"></a>
***
Action will fires immediately after image is set as **Album cover Art**.

```php
add_action( 'rtmedia_pro_after_set_album_cover', 'rtmedia_after_set_album_cover', 10, 1 );

function rtmedia_after_set_album_cover ( $cover ) {
	error_log( var_export( 'Album cover picture updated successfuly..!', true ) );
}
```
