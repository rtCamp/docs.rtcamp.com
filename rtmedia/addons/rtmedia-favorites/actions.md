##Actions 

* [rtmedia_before_add_favlist](#rtmedia_before_add_favlist)
* [rtmedia_after_add_favlist](#rtmedia_after_add_favlist)
* [rtm_before_favlist_delete](#rtm_before_favlist_delete)
* [rtm_after_favlist_delete](#rtm_after_favlist_delete)
* [rtm_before_media_add_to_favlist](#rtm_before_media_add_to_favlist)
* [rtm_after_media_add_to_favlist](#rtm_after_media_add_to_favlist)
* [rtm_after_remove_media_from_favlist](#rtm_after_remove_media_from_favlist)
* [rtm_before_remove_media_from_favlist](#rtm_before_remove_media_from_favlist)

###description

* ####rtmedia_before_add_favlist <a name="rtmedia_before_add_favlist"></a>
***
Action will fire just before new favlist will add to user profile.

```php
add_action( 'rtmedia_before_add_favlist', 'rtm_before_add_favlist', 10 );

function rtm_before_add_favlist() {
	error_log( var_export( 'Your new playlist is creating..' , true ) );
}
```

* ####rtmedia_after_add_favlist <a name="rtmedia_after_add_favlist"></a>
***
Action will fire immediately after new favlist added to user profile.

```php
add_action( 'rtmedia_after_add_favlist', 'rtm_after_add_favlist', 10, 1 );

function rtm_after_add_favlist( $favlist ) {
	error_log( var_export(  $favlist , true ) );
}
```

* ####rtm_before_favlist_delete <a name="rtm_before_favlist_delete"></a>
***
Action will fire just before favlist will delete from user's profile.

```php
add_action( 'rtm_before_favlist_delete', 'rtmedia_before_favlist_delete', 10, 1 );

function rtmedia_before_favlist_delete( $favlist_id ) {
	
	error_log( var_export(  ' favlist is deleteing.', true ) );
}
```

* ####rtm_after_favlist_delete <a name="rtm_after_favlist_delete"></a>
***
Action will fire immediately after favlist deleted from user's profile.

```php
add_action( 'rtm_after_favlist_delete', 'rtmedia_after_favlist_delete', 10, 1 );
function rtmedia_after_favlist_delete( $favlist_id ) {
		
	error_log( var_export( ' favlist is deleted successfully.', true ) );
}
```

* ####rtm_before_media_add_to_favlist <a name="rtm_before_media_add_to_favlist"></a>
***
action will fire just before a media will add to a favlist.

```php
add_action( 'rtm_before_media_add_to_favlist', 'rtmedia_before_media_add_to_favlist', 10, 2 );

function rtmedia_before_media_add_to_favlist( $media_id, $favlist_id ) {
	$media = get_rtmedia_title( $media_id );
	$favlist = get_rtmedia_title( $favlist_id );

	error_log( var_export( $media . ' media will be added to ' . $favlist . ' favlist.', true ) );
}
```

* ####rtm_after_media_add_to_favlist <a name="rtm_after_media_add_to_favlist"></a>
***
action will fire immediately after media successfully added to favlist.

```php
add_action( 'rtm_after_media_add_to_favlist', 'rtmedia_after_media_add_to_favlist', 10, 2 );

function rtmedia_after_media_add_to_favlist( $media_id, $favlist_id ) {
	$media = get_rtmedia_title( $media_id );
	$favlist = get_rtmedia_title( $favlist_id );

	error_log( var_export( $media . ' media successfully added to ' . $favlist . ' favlist.', true ) );
}
```

* ####rtm_after_remove_media_from_favlist <a name="rtm_after_remove_media_from_favlist"></a>
***
action will fire just before a media will delete from a favlist.

```php
add_action( 'rtm_after_remove_media_from_favlist', 'rtmedia_after_remove_media_from_favlist' , 10, 2 );

function  rtmedia_after_remove_media_from_favlist( $media_id, $favlist_id ) {
	$favlist = get_rtmedia_title( $favlist_id );
	error_log( var_export( ' media will be removed from ' . $favlist . ' favlist.', true ) );
}
```

* ####rtm_before_remove_media_from_favlist <a name="rtm_before_remove_media_from_favlist"></a>
***
action will fire immediately after media successfully deleted from favlist.

```php
add_action( 'rtm_before_remove_media_from_favlist', 'rtmedia_before_remove_media_from_favlist' , 10, 2 );

function  rtmedia_before_remove_media_from_favlist( $media_id, $favlist_id ) {
	$favlist = get_rtmedia_title( $favlist_id );
		
	error_log( var_export( ' media successfully removed from ' . $favlist . ' favlist.', true ) );
}
```
