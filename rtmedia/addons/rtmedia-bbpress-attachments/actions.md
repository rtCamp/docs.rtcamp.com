##Actions 

* [rtm_before_save_bbpress_attachments](#rtm_before_save_bbpress_attachments)
* [rtm_after_save_bbpress_attachments](#rtm_after_save_bbpress_attachments)

###Descriptions

####rtm_before_save_bbpress_attachments <a name="rtm_before_save_bbpress_attachments"></a>
***
Action will fire just before **attached media** will upload.

```php
add_action( 'rtm_before_save_bbpress_attachments', 'rtmedia_before_save_bbpress_attachments', 10, 2  );

function rtmedia_before_save_bbpress_attachments ( $context_id, $context ) {
	error_log( var_export( 'New attachment will add to  '. $context . ' => '.$context_id , true ) );
}
```

####rtm_after_save_bbpress_attachments <a name="rtm_after_save_bbpress_attachments"></a>
***
Action will fire just after **attached media** uploaded.

```php
add_action( 'rtm_after_save_bbpress_attachments','rtmedia_after_save_bbpress_attachments', 10, 2 );

function rtmedia_after_save_bbpress_attachments ( $context_id, $context ) {
	error_log( var_export( 'New attachment added to  '. $context . ' => '.$context_id , true ) );
}
```
