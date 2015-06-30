## Filters

* [rtmedia_upload_terms_service_agree_label](#rtmedia_upload_terms_service_agree_label)
* [rtmedia_upload_terms_service_link_label](#rtmedia_upload_terms_service_link_label)
* [rtmedia_upload_terms_check_terms_message](#rtmedia_upload_terms_check_terms_message)

### Description

* ###rtmedia_upload_terms_service_agree_label <a name="rtmedia_upload_terms_service_agree_label"></a>
***
Filter to modify 'I agree to' slug of upload terms.

```php
add_filter( 'rtmedia_upload_terms_service_agree_label', 'rtm_upload_terms_service_agree_label', 10, 1 ); 

function rtm_upload_terms_service_agree_label ( $slug ) {
	return 'I read and agree to';
}
```

* ####rtmedia_upload_terms_service_link_label <a name="rtmedia_upload_terms_service_link_label"></a>
***
Filter to modify 'Terms of Service' slug of upload terms.

```php
add_filter( 'rtmedia_upload_terms_service_link_label', 'rtm_upload_terms_service_link_label', 10, 1 );

function rtm_upload_terms_service_link_label ( $term_slug ) {
	return 'Terms and conditions';
}
```

* ###rtmedia_upload_terms_check_terms_message <a name="rtmedia_upload_terms_check_terms_message"> </a>
***
Filter to modify js warnig message.

```php
add_filter( 'rtmedia_upload_terms_check_terms_message', 'rtm_upload_terms_check_terms_message' );

function rtm_upload_terms_check_terms_message( $msg ) {
	return 'Please read and check terms and condions..!';
}
```
