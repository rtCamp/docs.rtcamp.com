## Actions

* [rtmedia_add_bulk_edit_buttons](#rtmedia_add_bulk_edit_buttons)
* [rtmedia_add_bulk_edit_content](#rtmedia_add_bulk_edit_content)
* [rtm_bulk_edit_before_change_album](#rtm_bulk_edit_before_change_album)
* [rtm_bulk_edit_after_change_album](#rtm_bulk_edit_after_change_album)
* [rtm_bulk_edit_before_change_privacy](#rtm_bulk_edit_before_change_privacy)
* [rtm_bulk_edit_after_change_privacy](#rtm_bulk_edit_after_change_privacy)

### Descriptions

####rtmedia_add_bulk_edit_buttons <a name="rtmedia_add_bulk_edit_buttons"></a>
***
Action use to add new button for 'Bulk Edit Opration'.


####rtmedia_add_bulk_edit_content <a name="rtmedia_add_bulk_edit_content"></a>
***
Action use to add content for custom button for 'Bulk Edit Opration'.


####rtm_bulk_edit_before_change_album <a name="rtm_bulk_edit_before_change_album"></a>
***
Action will fire just before image moves to another album in bulk edit operation.
```php
do_action( 'rtm_bulk_edit_before_change_album', $media_id, $new_album  );
$media_id  int  ID of media moving to another album
$new_album  int  ID of new album, image will move into
```


####rtm_bulk_edit_after_change_album <a name="rtm_bulk_edit_after_change_album"></a>
***
Action will fire after image moved to another album in bulk edit operation.
```php
do_action( 'rtm_bulk_edit_after_change_album', $media_id, $new_album  );

$media_id  int  ID of media moved to another album
$new_album  int  ID of new album, image moved into 
```

####rtm_bulk_edit_before_change_privacy <a name="rtm_bulk_edit_before_change_privacy"></a>
***
Action will fire before privacy of a media change.
```php
do_action( 'rtm_bulk_edit_before_change_privacy', $media_id, $new_privacy  );

$media_id  int  ID of media
$new_album  int value of new privacy for media
```


####rtm_bulk_edit_after_change_privacy <a name="rtm_bulk_edit_after_change_privacy"></a>
***
Action will fire after privacy of a media changed.
```php
do_action( 'rtm_bulk_edit_after_change_privacy', $media_id, $new_privacy  );

$media_id  int  ID of media
$new_album  int value of new privacy for media
```
