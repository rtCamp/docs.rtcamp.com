## rtmedia_add_edit_fields

### Description


Add extra editable fields to be associated with the media.


### Example


Adds a field to enter the camera model used to take the photo. Check [rtmedia_after_update_media](./rtmedia-after-update-media.md)

```php
function custom_rtmedia_camera_build($type) {
if ( $type == 'photo' ) {
global $rtmedia_media;
$id = $rtmedia_media->id;
$camera = get_rtmedia_meta($id,'camera');
echo '<br /><br /><label for="camera">Camera</label>  ';
echo '<input class="camera" id="camera" type="text" name="camera" value="'.$camera.'" />';
}
}
add_action('rtmedia_add_edit_fields', 'custom_rtmedia_camera_build');
```
