## rtmedia_add_admin_bar_media_sub_menu

### Description


Add rtMedia admin submenu.


### For Example

Add the following code in your theme's functions.php file:

```php
add_action ( 'rtmedia_add_admin_bar_media_sub_menu', 'rtmedia_action_add_admin_nav', 99, 1 );

function rtmedia_action_add_admin_nav( $parent_id ) {
	global $wp_admin_bar;
	$wp_admin_bar->add_menu ( array(
		'parent' => $parent_id,
		'id' => 'my-account-media-xyz',
		'title' => ucfirst( 'rtMedia admin submenu' ),
		'href' => 'menu-slug'
	) );
}
```
