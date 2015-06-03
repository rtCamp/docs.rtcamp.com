## rtmedia_allow_uploader_view

### Description

Control whether to render uploader or not.

```php
add_filter( 'rtmedia_allow_uploader_view', 'rtmedia_uploader_custom', 99, 2 );
function rtmedia_uploader_custom( $allow, $component ){
// your conditions here to check whether allow uplaoder to render or not
// set value of $allow either true/false
// $comonent will be activity (for activity page uploader) or media_gallery (for profile media tab uplaoder) etc.
return $allow;
}
```
