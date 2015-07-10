##Actions 

* [rtm_before_delete_docs_other_file](#rtm_before_delete_docs_other_file)
* [rtm_after_delete_docs_other_file](#rtm_after_delete_docs_other_file)

###description

* ####rtm_before_delete_docs_other_file <a name="rtm_before_delete_docs_other_file" ></a>
***
Action will fire just before **document or other type file** delete.

```php
add_action( 'rtm_before_delete_docs_other_file', 'rtm_before_delete_docs_other_file', 10, 1 );

function rtm_before_delete_docs_other_file( $media_id ) {
	error_log( var_export( $media_id . ' is deleting..', true ) );
}
```

* ####rtm_after_delete_docs_other_file <a name="rtm_after_delete_docs_other_file" ></a>
***
Action will fire immediately after **document or other type file** delete.

```php
add_action( 'rtm_after_delete_docs_other_file', 'rtm_after_delete_docs_other_file', 10, 1);

function rtm_after_delete_docs_other_file( $media_id ) {
	error_log( var_export( $media_id . ' is deleted..', true ) );
}
```
