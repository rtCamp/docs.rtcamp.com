## Filter to modify default privacy options

Filter name : **rtmedia_privacy_levels**

This filter is called on `plugins_loaded` hook with priority 20 so, in order to use this filter, you need to add it in `plugins_loaded` hook with prioity less than 20.

[![default-privacy-options](https://cloud.githubusercontent.com/assets/7771963/8614368/9d673d0e-2706-11e5-848e-7cdc19872fcf.png)](https://cloud.githubusercontent.com/assets/7771963/8614368/9d673d0e-2706-11e5-848e-7cdc19872fcf.png)

For example, below code will remove Private & friends options from default privacy options.

You can add following code in your separate custom plugin:

```
add_action( 'plugins_loaded', 'my_custom_plugin_plugins_loaded', 10 );

function my_custom_plugin_plugins_loaded(){
	add_filter( 'rtmedia_privacy_levels', 'custom_rtmedia_privacy_levels', 10, 1 );
}

function custom_rtmedia_privacy_levels( $custom ) {
        $custom = array(
        'levels' => array(
            20 => '<strong>Logged in Users</strong> - Visible to registered users',
            0 => '<strong>Public for all</strong> - Visible to the world',
            )
        );
    return $custom;
}
```

[![edit-default-privacy-options](https://cloud.githubusercontent.com/assets/7771963/8614457/723712c0-2707-11e5-846d-1d681e9379a7.png)]((https://cloud.githubusercontent.com/assets/7771963/8614457/723712c0-2707-11e5-846d-1d681e9379a7.png))
