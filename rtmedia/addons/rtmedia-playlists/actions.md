##Actions 

* [rtm_before_remove_media_from_playlist](#rtm_before_remove_media_from_playlist)
* [rtm_after_remove_media_from_playlist](#rtm_after_remove_media_from_playlist)
* [rtm_before_add_media_to_playlist](#rtm_before_add_media_to_playlist)
* [rtm_after_add_media_to_playlist](#rtm_after_add_media_to_playlist)
* [rtm_before_playlist_delete](#rtm_before_playlist_delete)
* [rtm_after_playlist_delete](#rtm_after_playlist_delete)
* [rtmedia_before_add_playlist](#rtmedia_before_add_playlist)
* [rtmedia_after_add_playlist](#rtmedia_after_add_playlist)

###description

* ####rtm_before_remove_media_from_playlist <a name="rtm_before_remove_media_from_playlist" ></a>
***
Action will fire just before media remove from a playlist.

```php
add_action('rtm_before_remove_media_from_playlist', 'notify_before_remove_media_from_playlist' , 10, 2);

function notify_before_remove_media_from_playlist( $media_id, $playlist_id ) {
	$model = new RTMediaModel();
	$media = $model->get( array( 'id' => $media_id ) );
	
	error_log(var_export('Song '. $media[0]->media_title .' will be removed from music album.', true) );
}
```   

* ####rtm_after_remove_media_from_playlist <a name="rtm_after_remove_media_from_playlist"></a>
***
Action will fire immediately after media remove from a playlist.

```php
add_action('rtm_after_remove_media_from_playlist', 'notify_after_remove_media_from_playlist', 10, 2 );

function notify_after_remove_media_from_playlist( $media_id, $playlist_id ) {
	$model = new RTMediaModel();
	$media = $model->get( array( 'id' => $media_id ) );
	
	error_log(var_export('Song '. $media[0]->media_title .' successfuly removed from music album.', true) );
}
```   

* ####rtm_before_add_media_to_playlist <a name="rtm_before_add_media_to_playlist"></a>
***
Action will fire just before media will add to playlist.

```php
add_action('rtm_before_add_media_to_playlist', 'notify_before_add_media_to_playlist', 10, 2 );

function notify_before_add_media_to_playlist( $media_id, $playlist_id ) {
	$model = new RTMediaModel();
	$media = $model->get( array( 'id' => $media_id ) );
	
	error_log(var_export('Song '. $media[0]->media_title .'will be added to music album.', true) );
}
```

* ####rtm_after_add_media_to_playlist <a name="rtm_after_add_media_to_playlist"></a>
***
Action will immediately after media added to playlist.
```php
add_action('rtm_after_add_media_to_playlist', 'notify_after_add_media_to_playlist', 10, 2 );

function notify_after_add_media_to_playlist( $media_id, $playlist_id ) {
	$model = new RTMediaModel();
	$media = $model->get( array( 'id' => $media_id ) );
	
	error_log(var_export('Song '. $media[0]->media_title .' added to music album.', true) );
}
```

* ####rtm_before_playlist_delete <a name="rtm_before_playlist_delete"></a>
***
Action will fire just before new playlist will delete.
```php
add_action('rtm_before_playlist_delete', 'rtmedia_before_playlist_delete', 10, 1 );

function rtmedia_before_playlist_delete( $playlist_id ) {
	error_log(var_export( 'music album will delete.', true) );
}
```

* ####rtm_after_playlist_delete <a name="rtm_after_playlist_delete"></a>
***
Action will fire immediately after playlist deleted.
```php
add_action('rtm_after_playlist_delete', 'rtmedia_after_playlist_delete', 10, 1 );

function rtmedia_after_playlist_delete( $playlist_id ) {
	error_log(var_export( 'music album deleted.', true) );
}
```

* ####rtmedia_before_add_playlist <a name="rtmedia_before_add_playlist"></a>
***
Action will fire just before new playlist will create.
```php
add_action( 'rtmedia_before_add_playlist', 'rtmedia_before_add_playlist' );

function rtmedia_before_add_playlist() {
	error_log(var_export( 'New music album will be create.', true) );
}
```

* ####rtmedia_after_add_playlist <a name="rtmedia_after_add_playlist"></a>
***
Action will fire immediately after new playlist created.
```php
add_action( 'rtmedia_after_add_playlist', 'rtmedia_after_add_playlist' );

function rtmedia_after_add_playlist( $playlist ) {
	error_log(var_export( $playlist, true) );
}
```
