## Filters

* [rtmedia_restrictions_upload_limit_messages](#rtmedia_restrictions_upload_limit_messages)
* [rtm_restriction_exceed_daily_storage_message](#rtm_restriction_exceed_daily_storage_message)
* [rtm_restriction_exceed_monthly_storage_message](#rtm_restriction_exceed_monthly_storage_message)
* [rtm_restriction_exceed_lifetime_storage_message](#rtm_restriction_exceed_lifetime_storage_message)
* [rtm_restriction_exceed_daily_files_message](#rtm_restriction_exceed_daily_files_message)
* [rtm_restriction_exceed_monthly_files_message](#rtm_restriction_exceed_monthly_files_message)
* [rtm_restriction_exceed_lifetime_files_message](#rtm_restriction_exceed_lifetime_files_message)
* [allowed_media_type_settings](#allowed_media_type_settings)

### Description

####rtmedia_restrictions_upload_limit_messages <a name="rtmedia_restrictions_upload_limit_messages"></a>
***
Filter to modify **Upload limit JS message** for restriction add-on.

```php
add_filter( 'rtmedia_restrictions_upload_limit_messages', 'rtmedia_restriction_upload_limit_js_strings', 10, 1 );

function rtmedia_restriction_upload_limit_js_strings( $upload_limit_messages ) {
	$upload_limit_messages['size']['daily'] = "You have exceeded todays quota for file size limit.";
	
	return $upload_limit_messages;
}
```

####rtm_restriction_exceed_daily_storage_message <a name="rtm_restriction_exceed_daily_storage_message"></a>
***
Filter use to modify warning message of daily upload storage limit exceed.

```php
add_filter( 'rtm_restriction_exceed_daily_storage_message', 'rtmedia_restriction_exceed_daily_storage_msg', 10, 1 ); 

function rtmedia_restriction_exceed_daily_storage_msg ( $msg ) {
	return 'You can not upload any media today as you had exceeded daily limit of media size. Please try tomorrow.';
}
```

####rtm_restriction_exceed_monthly_storage_message <a name="rtm_restriction_exceed_monthly_storage_message"></a>
***
Filter use to modify warning message of monthly upload storage limit exceed.

```php
add_filter( 'rtm_restriction_exceed_monthly_storage_message', 'rtmedia_restriction_exceed_monthly_storage_message' );

function rtmedia_restriction_exceed_monthly_storage_message ( $msg ) {
	return 'You can not upload any media in this month as you had exceeded monthly limit of media size.';
}
```

####rtm_restriction_exceed_lifetime_storage_message <a name="rtm_restriction_exceed_lifetime_storage_message"></a>
***
Filter use to modify warning message of lifetime upload storage limit exceed.

```php
add_filter( 'rtm_restriction_exceed_lifetime_storage_message', 'rtmedia_restriction_exceed_lifetime_storage_message' );

function rtmedia_restriction_exceed_lifetime_storage_message ( $msg ) {
	return 'You can not upload any media as you had exceeded storage limit of media.';
}
```

####rtm_restriction_exceed_daily_files_message <a name="rtm_restriction_exceed_daily_files_message"></a>
***
Filter use to modify warning message of daily number of upload file limit exceed.

```php
add_filter( 'rtm_restriction_exceed_daily_files_message', 'rtmedia_restriction_exceed_daily_files_message' );

function rtmedia_restriction_exceed_daily_files_message ( $msg ) {
	return ' Please try tomorrow as you had exceeded daily limit to upload media.';
}
```

####rtm_restriction_exceed_monthly_files_message <a name="rtm_restriction_exceed_monthly_files_message"></a>
***
Filter use to modify warning message of monthly number of upload file limit exceed.

```php
add_filter( 'rtm_restriction_exceed_monthly_files_message', 'rtmedia_restriction_exceed_monthly_files_message' );

function rtmedia_restriction_exceed_monthly_files_message ( $msg ) {
	return 'Sorry..! No more upload as you had exceeded monthly limit to upload media.';
}
```

####rtm_restriction_exceed_lifetime_files_message <a name="rtm_restriction_exceed_lifetime_files_message"></a>
***
Filter use to modify warning message of lifetime number of upload file limit exceed.

```php
add_filter( 'rtm_restriction_exceed_lifetime_files_message', 'rtmedia_restriction_exceed_lifetime_files_message' );

function rtmedia_restriction_exceed_lifetime_files_message ( $msg ) {
	return 'Opps..! you had exceeded the lifetime limit to upload media.';
}
```

####allowed_media_type_settings <a name="allowed_media_type_settings"></a>
***
This filter is use to modify allowed upload media file types.

```php
add_filter( 'allowed_media_type_settings', 'rtm_allowed_media_type_settings' );

function rtm_allowed_media_type_settings ( $allowed_types ) {
	$allowed_types['other'] = '';
	return $allowed_types;
}
```
