## Filters

* [rtm_bulk_edit_label](#rtm_bulk_edit_label)
* [rtm_bulk_edit_cancel_label](#rtm_bulk_edit_cancel_label)

### Descriptions

####rtm_bulk_edit_label <a name="rtm_bulk_edit_label"></a>
***
Filter is use to Modify 'Bulk Edit' label.

```php
add_filter( 'rtm_bulk_edit_label','rtmedia_bulk_edit_label_update', 10, 1 );

function rtmedia_bulk_edit_label_update( $label ) {
	return 'Bulk Media update';
}
```

####rtm_bulk_edit_cancel_label <a name="rtm_bulk_edit_cancel_label"></a>
***
Filter is use to Modify 'Cancel Bulk Editing' label.

```php
add_filter( 'rtm_bulk_edit_cancel_label', 'rtmedia_bulk_edit_cancel_label',10, 1 );

function rtmedia_bulk_edit_cancel_label( $label ){
	return 'Cancel Media update';
}
```
