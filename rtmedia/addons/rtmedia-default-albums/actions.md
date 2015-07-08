## Actions

* [rtm_before_add_global_album](#rtm_before_add_global_album)
* [rtm_after_add_global_album](#rtm_after_add_global_album)
* [rtm_before_change_default_global_album](#rtm_before_change_default_global_album)
* [rtm_after_change_default_global_album](#rtm_after_change_default_global_album)
* [rtm_before_rename_global_album](#rtm_before_rename_global_album)
* [rtm_after_rename_global_album](#rtm_after_rename_global_album)
* [rtm_before_delete_global_album](#rtm_before_delete_global_album)
* [rtm_after_delete_global_album](#rtm_after_delete_global_album)

###Description

#### rtm_before_add_global_album <a name="rtm_before_add_global_album"></a>
***
Action will fire just before new global album will added by admin.
```php
add_action( 'rtm_before_add_global_album', 'rtmedia_before_add_global_album', 10, 1 );

function rtmedia_before_add_global_album ( $album_name ) {
	error_log(var_export( 'New global album "' .  $album_name . '" will be create.. ', true ) );
}
```

#### rtm_after_add_global_album <a name="rtm_after_add_global_album"></a>
***
Action will fire immediately after new global album added successfully.
```php
add_action( 'rtm_after_add_global_album', 'rtmedia_after_add_global_album', 10, 1 );

function rtmedia_after_add_global_album ( $album_id ) {
	$album = get_rtmedia_title($album_id);
	error_log(var_export(  $album . ' global album is created..', true ) );
}
```

#### rtm_before_change_default_global_album <a name="rtm_before_change_default_global_album"></a>
***
Action will fire just before global album is set as **Default album**.
```php
add_action( 'rtm_before_change_default_global_album', 'rtmedia_before_change_default_global_album', 10, 1 );

function rtmedia_before_change_default_global_album ( $default_global_album ) {
	$album = get_rtmedia_title($default_global_album);
	error_log(var_export( 'Default album is changing to => ' . $album , true ) );
}
```

#### rtm_after_change_default_global_album <a name="rtm_after_change_default_global_album"></a>
***
Action will fire immediately after global album is set as **Default album**.
```php
add_action( 'rtm_after_change_default_global_album', 'rtmedia_after_change_default_global_album', 10, 1 );

function rtmedia_after_change_default_global_album ( $default_global_album ) {
	$album = get_rtmedia_title($default_global_album);
	error_log(var_export( 'Default album is changed to => ' . $album , true ) );
}
```

####rtm_before_rename_global_album  <a name="rtm_before_rename_global_album"></a>
***
Action will fire just before global album will renamed.
```php
add_action( 'rtm_before_rename_global_album', 'rtmedia_before_rename_global_album', 10, 2 );

function rtmedia_before_rename_global_album ( $album_id, $album_name  ) {
	$album = get_rtmedia_title($album_id);
	error_log(var_export( $album . ' will rename to ' . $album_name , true ) );
}
```

#### rtm_after_rename_global_album <a name="rtm_after_rename_global_album"></a>
***
Action will fire immediately after global album will renamed.
```php
add_action( 'rtm_after_rename_global_album', 'rtmedia_after_rename_global_album', 10, 1 );

function rtmedia_after_rename_global_album ( $album_id ) {
	$album = get_rtmedia_title($album_id);
	error_log(var_export( $album . ' renamed..', true ) );
}
```

#### rtm_before_delete_global_album <a name="rtm_before_delete_global_album"></a>
***
Action will fire just before global album will be deleted.
```php
add_action( 'rtm_before_delete_global_album', 'rtmedia_before_delete_global_album', 10, 1 );

function rtmedia_before_delete_global_album ( $delete_album_id ) {
		$album = get_rtmedia_title($delete_album_id);
		error_log(var_export( $album . ' album is deleteing...', true ) );
}
```

#### rtm_after_delete_global_album <a name="rtm_after_delete_global_album"></a>
***
Action will fire immediately after global album deleted.
```php
add_action( 'rtm_after_delete_global_album', 'rtmedia_after_delete_global_album', 10, 1 );
function rtmedia_after_delete_global_album ( $delete_album_id ) {
	error_log(var_export( $delete_album_id . ' album is deleted.', true ) );
}
```
