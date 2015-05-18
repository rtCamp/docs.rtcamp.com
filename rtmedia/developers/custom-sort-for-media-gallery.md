## Custom sorting for media gallery

This doc is will give you detailed information for how to implement custom sorts for media gallery.

You can use this code either in your theme or can create a plugin to do that.

1. Show sort buttons
2. Pass sorting parameters
3. Filter SQL query to fetch media as per the sorting order

## Show sort buttons

First of all you need to show some buttons or html markup to with user will interact.

Use **rtmedia_after_media_gallery_title** hook to render html markup after media gallery title.

```php
	function custom_rtmedia_gallery_sort_buttons(){
		?>
			<div>
				<button class="rtm-custom-sort-like">Sort by Likes</button>
				<button class="rtm-custom-sort-comments">Sort by Views</button>
			</div>
		<?php
	}

	do_action( 'rtmedia_after_media_gallery_title', 'custom_rtmedia_gallery_sort_buttons', 99 );
```

## Pass sorting parameters

rtMedia has mechanism that if you have hidden elements in certain markup, it will pass on the values of that fields automatically while refreshing media gallery or when you load more the galery media.

Use **rtmedia_after_media_gallery_title** filter to place those hidden fields.

```php
	function custom_add_sort_hidden_fields(){
		?>
			<input type="hidden" name="custom_sort_by" id="rt_upload_hf_custom_sort_by" value="">
			<input type="hidden" name="custom_sort_order" id="rt_upload_hf_custom_sort_order" value="">
		<?php
	}
	add_action( 'rtmedia_after_media_gallery_title', 'custom_add_sort_hidden_fields', 99 );
```

Now you need to write some js code which will set value for these hidden fields when user clicks on one of the sort button and then refresh the media gallery.
For example below is the js code when user clicks on **Sort by Likes**.

```javascript
	jQuery( '.rtm-custom-sort-like' ).on( 'click', function( e ){
		jQuery( '#rt_upload_hf_custom_sort_by' ).val( 'likes' ); // set sort by likes
		jQuery( '#rt_upload_hf_custom_sort_order' ).val( 'desc' ); // set sort order to descending

		// galleryObj is the object for rtMedia gallery Backbone collection
		if ( typeof galleryObj == "object" ) {
			galleryObj.reloadView();
		}
	});
```

## Filter SQL query to fetch media as per the sorting order
