## rtmedia_after_update_media

### Description


This action occurs after the media is updated.

### Example


Updates the camera information. Check [rtmedia_add_edit_fields](./rtmedia-add-edit-fields.md)

```php

function custom_save_rtmedia_camera_build($id, $state) {
$type = rtmedia_type($id);
if ( $type == 'photo' ) {
$camera = get_rtmedia_meta($id,'camera');
if ( $camera != $_POST['camera'])
update_rtmedia_meta($id,'camera',$_POST['camera']);
}
}
add_action('rtmedia_after_update_media', 'custom_save_rtmedia_camera_build', 10,2);
```
