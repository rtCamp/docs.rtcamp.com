# Filter Name : rtmedia_share_media_description

### Description


Append activity feed status text to media while sharing media to other social sites using rtSocial.


### Example

Add the following code in your theme's functions.php file:

```
add_filter('rtmedia_share_media_description', 'rtmedia_append_activity_status_to_media_description', 10, 2);

function rtmedia_append_activity_status_to_media_description( $new_desc, $rtmedia_query ){

	$activity_text = bp_activity_get_meta( $rtmedia_query->activity_id, "bp_activity_text" );
	if ( ! $activity_text || $activity_text == '' ) {
		return $new_desc;
	}
	return $activity_text;
}
```
[![share-media-description](https://cloud.githubusercontent.com/assets/7771963/9330988/5b042df8-45da-11e5-9256-e417b410f265.png)](https://cloud.githubusercontent.com/assets/7771963/9330988/5b042df8-45da-11e5-9256-e417b410f265.png)
