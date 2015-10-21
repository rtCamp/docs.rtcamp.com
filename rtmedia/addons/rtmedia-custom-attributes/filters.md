##Filters

* [rtmedia_editor_attribute_label](#rtmedia_editor_attribute_label)

###Description

####rtmedia_editor_attribute_label <a name="rtmedia_editor_attribute_label"></a>
***
Filter to change **Media Attribute** label in uploader view.

```php
add_filter('rtmedia_editor_attribute_label','custom_rtmedia_editor_attribute_label');

function custom_rtmedia_editor_attribute_label( $label ){
    $label = "Attribute Tags";
    return $label;
}
```
