##Actions 

* [rtm_before_save_wordpress_comment_attachments](#rtm_before_save_wordpress_comment_attachments)
* [rtm_after_save_wordpress_comment_attachments](#rtm_after_save_wordpress_comment_attachments)

###description

* ####rtm_before_save_wordpress_comment_attachments <a name="rtm_before_save_wordpress_comment_attachments" ></a>
***
Action will fire just before media will attach to comment.

```php
add_action( 'rtm_before_save_wordpress_comment_attachments', 'rtmedia_before_save_wordpress_comment_attachments',10 ,2 );

function rtmedia_before_save_wordpress_comment_attachments ( $context_id, $context ) {
	error_log( var_export( 'New attachment will add to  '. $context . ' => '.$context_id, true ) );
}
```   

* ####rtm_after_save_wordpress_comment_attachments <a name="rtm_after_save_wordpress_comment_attachments"></a>
***
Action will fire immediately after media will attach to comment.

```php
add_action( 'rtm_after_save_wordpress_comment_attachments', 'rtmedia_after_save_wordpress_comment_attachments',10 ,2 );

function rtmedia_after_save_wordpress_comment_attachments ( $context_id, $context ) {
	error_log( var_export( 'New attachment added to  '. $context . ' => '.$context_id, true ) );
}
```   
