## Filter to change 'Add Attribute' label

Filter name : **rtmedia_upload_add_attribute_label**

You can use this filter in your theme and can modify the default **Add Attribute** button label for adding attributes while uploading media from media tab.

[![add-attribute-default-label](https://cloud.githubusercontent.com/assets/7771963/8371503/7e866f1a-1bf6-11e5-9fb8-9c81f1464e47.png)](https://cloud.githubusercontent.com/assets/7771963/8371503/7e866f1a-1bf6-11e5-9fb8-9c81f1464e47.png)


Add the following code in your theme's functions.php file:
```php
    function change_rtmedia_upload_add_attribute_label( $label ){
    $label = "New Add Attribute Label";
    return $label;
    }
    add_filter( "rtmedia_upload_add_attribute_label", 'change_rtmedia_upload_add_attribute_label', 10, 1 );
```

_Where "New Add Attribute Label" will be name which you want to use._


[![changed-add-attribute-label](https://cloud.githubusercontent.com/assets/7771963/8371506/90dc1700-1bf6-11e5-84e4-244507a9a3d8.png)](https://cloud.githubusercontent.com/assets/7771963/8371506/90dc1700-1bf6-11e5-84e4-244507a9a3d8.png)
