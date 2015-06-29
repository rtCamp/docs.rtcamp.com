## Filters

* [rtm_new_playlist_name](#rtm_new_playlist_name)
* [rtm_add_to_playlist_label](#rtm_add_to_playlist_label)
* [rtm_add_music_select_playlist_title](#rtm_add_music_select_playlist_title)
* [rtm_add_music_select_playlist_label](#rtm_add_music_select_playlist_label)
* [rtm_add_music_create_playlist_label](#rtm_add_music_create_playlist_label)
* [rtm_add_music_your_playlists_label](#rtm_add_music_your_playlists_label)
* [rtm_add_music_group_playlists_label](#rtm_add_music_group_playlists_label)
* [rtm_no_media_in_playlist_message](#rtm_no_media_in_playlist_message)
* [rtm_playlist_js_strings](#rtm_playlist_js_strings)
* rtmedia_playlist_slug
* get_user_playlist_count
* [rtm_get_user_playlists](#rtm_get_user_playlists)
* [rtm_get_group_playlists](#rtm_get_group_playlists)
* [rtm_is_playlist_create_enable](#rtm_is_playlist_create_enable)

###description

* ####rtm_new_playlist_name <a name="rtm_new_playlist_name"></a>
***
Filter to modify new playlist name.
```php
add_filter('rtm_new_playlist_name', 'modify_new_playlist_name', 10, 1 );

function modify_new_playlist_name( $playlist_name ) {
	if ('' == $playlist_name ) {
		$playlist_name = 'My Playlist';
	} else {
		$playlist_name = 'rt-'. $playlist_name;
	}
	return $playlist_name;
}
```

* ####rtm_add_to_playlist_label <a name="rtm_add_to_playlist_label"></a>
***
Filter to modify **Add to Playlist** title.
```php
add_filter('rtm_add_to_playlist_label', 'change_add_to_playlist_label', 10, 1 );

function change_add_to_playlist_label( $lable ) {
	if ( 'Add to Playlist' == $lable ) {
		return 'Add to Music Album';
	}
	return $lable;
}
```

* ####rtm_add_music_select_playlist_title <a name="rtm_add_music_select_playlist_title"></a>
***
Filter to modify **Select Playlist** title
```php
add_filter('rtm_add_music_select_playlist_title',  'change_select_playlist_title' );

function change_select_playlist_title() {
	return 'Select Music Album';
}
```

* ####rtm_add_music_select_playlist_label <a name="rtm_add_music_select_playlist_label"></a>
***
Filter to modify **Select Playlist** lable in option list.
```php
add_filter('rtm_add_music_select_playlist_label',  'change_select_playlist_title' );

function change_select_playlist_title() {
	return 'Select Music Album';
}
```

* ####rtm_add_music_create_playlist_label <a name="rtm_add_music_create_playlist_label"></a>
***
Filter to modify **Create Playlist** lable in option list
```php
add_filter('rtm_add_music_create_playlist_label', 'change_create_playlist_lable' );

function change_create_playlist_lable( $lable ) {
	return 'Create Music Album';
}
```

* ####rtm_add_music_your_playlists_label <a name="rtm_add_music_your_playlists_label"></a>
***
Filter to modify **Your Playlists** lable in option list.
```php
add_filter('rtm_add_music_your_playlists_label', 'change_your_playlists_lable' );

function change_your_playlists_lable( $lable ) {
	return 'Music Albums';
}
```

* ####rtm_add_music_group_playlists_label <a name="rtm_add_music_group_playlists_label"></a>
***
Filter to modify **Group Playlists** lable in option list
```php
add_filter('rtm_add_music_group_playlists_label', 'change_group_playlist_lable' );

function change_group_playlist_lable( $lable ) {
	return 'Group Music Albums';
}
```

* ####rtm_no_media_in_playlist_message <a name="rtm_no_media_in_playlist_message"></a>
***
Filter to modify **No media found for this playlist** message in single playlist tab.
```php
add_filter('rtm_no_media_in_playlist_message', 'change_no_media_in_playlist_massage' );

function change_no_media_in_playlist_massage( $message ) {
	return 'No songs found, in current music album.';
}
```

* ####rtm_playlist_js_strings <a name="rtm_playlist_js_strings"></a>
***
Filter to modify js messages for playlist plugin.
```php
add_filter('rtm_playlist_js_strings', 'modify_rtmedia_playlist_js_msgs' );

function modify_rtmedia_playlist_js_msgs( $messages ) {
	$messages['rtmedia_playlist_created_msg'] = 'Music Album created successfully.';
	$messages['rtmedia_playlist_creation_error_msg'] = 'Something went wrong While creating the Music Album. Please try again.';
	return $messages;
}
```

* ####rtm_get_user_playlists <a name="rtm_get_user_playlists"></a>
***
Filter to modify list of playlist of a user.
```php
add_filter( 'rtm_get_user_playlists', 'rtm_list_user_playlists', 10, 2);

function rtm_list_user_playlists( $playlists, $user_id ) {
		error_log(var_export( $playlists, true) );
		return $playlists;
}
```

* ####rtm_get_group_playlists <a name="rtm_get_group_playlists"></a>
***
Filter to modify list playlist of groups in which user is member.
```php
add_filter( 'rtm_get_group_playlists', 'rtm_list_group_playlists', 10, 1);

function rtm_list_group_playlists( $playlists ) {
		error_log(var_export( $playlists, true) );
		return $playlists;
}
```

* ####rtm_is_playlist_create_enable <a name="rtm_is_playlist_create_enable"></a>
***
Filter to restrict user from creatig new playlist.
```php
add_filter( 'rtm_is_playlist_create_enable', 'rtmedia_is_playlist_create_enable', 10, 1 );

function rtmedia_is_playlist_create_enable( $return ) {
		return false;
}
```
