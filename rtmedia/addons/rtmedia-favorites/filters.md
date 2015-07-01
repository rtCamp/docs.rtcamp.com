## Filters
* [rtmedia_query_media_type_filter](#rtmedia_query_media_type_filter)
* [rtm_get_user_favlists](#rtm_get_user_favlists)
* [rtm_favlist_js_strings](#rtm_favlist_js_strings)
* [rtm_no_media_in_favlist_message](#rtm_no_media_in_favlist_message)
* [rtm_new_favlist_name](#rtm_new_favlist_name)
* [rtm_add_media_select_favlist_label](#rtm_add_media_select_favlist_label)
* [rtm_add_media_create_favlist_label](#rtm_add_media_create_favlist_label)
* [rtm_add_media_your_favlists_label](#rtm_add_media_your_favlists_label)
* [rtm_gallery_create_favlist_label](#rtm_gallery_create_favlist_label)
* [rtm_create_favlist_popup_title](#rtm_create_favlist_popup_title)
* [rtm_create_favlist_popup_button](#rtm_create_favlist_popup_button)
* [rtm_edit_favlist_option_lable](#rtm_edit_favlist_option_lable)
* [rtm_delete_favlist_option_lable](#rtm_delete_favlist_option_lable)
* rtmedia_favlist_actions

###description

* ####rtmedia_query_media_type_filter <a name="rtmedia_query_media_type_filter"></a>
***
Filter is use to modify media types to be display in favlist.

This example will allow to display only music in favlist.
```php
add_filter( 'rtmedia_query_media_type_filter', 'rtm_query_media_type_filter' );

function rtm_query_media_type_filter( $filter_type ) {

	if ( isset( $filter_type['value'] ) ) {
		$filter_type['value'] = array( 'music' );
	}
	return $filter_type;
}
```

* ####rtm_get_user_favlists <a name="rtm_get_user_favlists"></a>
***
Filter to modify list of media in a favlist.

```php
add_filter( 'rtm_get_user_favlists', 'rtmedia_get_user_favlists', 10, 2 );

function rtmedia_get_user_favlists( $favlists, $user_id ) {
		error_log( var_export( $favlists, true ) );
		return $favlists;
}
```

* ####rtm_favlist_js_strings <a name="rtm_favlist_js_strings"></a>
***
Filter to modify js messages for favlist oprations.

```php
add_filter( 'rtm_favlist_js_strings', 'rtmedia_favlist_js_msgs', 10, 1 );

function rtmedia_favlist_js_msgs( $messages ) {
	$messages['rtmedia_favlist_created_msg'] = 'Favlist Album created successfully.';
	$messages['rtmedia_favlist_creation_error_msg'] = 'Something went wrong While creating the Favlist Album. Please try again.';
	return $messages;
}
```

* ####rtm_no_media_in_favlist_message <a name="rtm_no_media_in_favlist_message"></a>
***
Filter is use to modify **no media found.** message in edit favlist panel.

```php
add_filter( 'rtm_no_media_in_favlist_message', 'rtmedia_no_media_in_favlist_message', 10, 1 );

function rtmedia_no_media_in_favlist_message ( $message ) {
	return 'No media found in current favlist Album.';
}
```

* ####rtm_new_favlist_name <a name="rtm_new_favlist_name"></a>
***
Filter to modify new favlist name.

```php
add_filter( 'rtm_new_favlist_name' , 'rtmedia_new_favlist_name' );

function rtmedia_new_favlist_name( $name ) {
	if ( '' == $name ) {
		$name = 'My Favlist';
	} else {
		$name = 'rt-'. $name;
	}
	return $name;
}
```

* ####rtm_add_media_select_favlist_label <a name="rtm_add_media_select_favlist_label"></a>
***
Filter to modify **Select FavList** lable option list.

```php
add_filter( 'rtm_add_media_select_favlist_label', 'rtmedia_add_media_select_favlist_title', 10, 1 );

function rtmedia_add_media_create_favlist_label( $label ) {
	return 'To New Favlist Album';
}
```

* ####rtm_add_media_create_favlist_label <a name="rtm_add_media_create_favlist_label"></a>
***
Filter to modify **Create FavList** lable option list.

```php
add_filter( 'rtm_add_media_create_favlist_label', 'rtmedia_add_media_create_favlist_title', 10, 1 );

function rtmedia_add_create_create_favlist_label( $label ) {
	return 'Add Favlist Album';
}
```

* ####rtm_add_media_your_favlists_label <a name="rtm_add_media_your_favlists_label"></a> 
***
Filter to modify **Add to Favlist** lable in option tab while viewing media.

```php
add_filter( 'rtm_add_media_your_favlists_label', 'rtmedia_add_media_your_favlists_label' );

function rtmedia_add_media_your_favlists_label( $label ) {
	return 'favlists Album';
}
```

* ####rtm_gallery_create_favlist_label <a name="rtm_gallery_create_favlist_label"></a>
***
Filter to modify **Create favlist** lable in favlists panel.

```php
add_filter( 'rtm_gallery_create_favlist_label', 'rtmedia_add_media_create_favlist_label', 10, 1 );

function rtmedia_add_media_create_favlist_label( $label ) {
	return 'Add Favlist Album';
}
```

* ####rtm_create_favlist_popup_title <a name="rtm_create_favlist_popup_title"></a>
***
Filter to modify **Popup Title** in create new favlist popup.

```php
add_filter( 'rtm_create_favlist_popup_title', 'rtmedia_create_favlist_popup_title', 10, 1 );

function rtmedia_create_favlist_popup_title( $title ) {
	return 'Create your Favlist Album';
}
```

* ####rtm_create_favlist_popup_button <a name="rtm_create_favlist_popup_button"></a>
***
Filter to modify **Create Button** lable in create new favlist popup.

```php
add_filter( 'rtm_create_favlist_popup_button', 'rtmedia_create_favlist_popup_button', 10, 1 );

function rtmedia_create_favlist_popup_button( $title ) {
	return 'Add Favlist';
}
```

* ####rtm_edit_favlist_option_lable <a name="rtm_edit_favlist_option_lable"></a>
***
Filter to modify **Edit** lable in option tab while viewing Favlist.

```php
add_filter( 'rtm_edit_favlist_option_lable', 'rtmedia_edit_favlist_option_lable' );

function rtmedia_edit_favlist_option_lable( $edit_lable ) {
	return 'Edit Favlist Album';
}
```

* ####rtm_delete_favlist_option_lable <a name="rtm_delete_favlist_option_lable"></a>
***
Filter to modify **Delete** lable in option tab while viewing Favlist.

```php
add_filter( 'rtm_delete_favlist_option_lable', 'rtmedia_delete_favlist_option_lable' );

function rtmedia_delete_favlist_option_lable( $delete_lable ) {
	return 'Delete Favlist Album';
}
```
