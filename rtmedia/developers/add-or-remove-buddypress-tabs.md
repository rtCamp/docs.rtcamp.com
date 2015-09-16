## Add or remove buddypress tabs

### Customize profile menus in BuddyPress


#### Change menu/tabs in the members profile


```php
// Change Profile menu/tab order 
function rt_change_profile_tab_order() {
global $bp;

$bp->bp_nav['profile']['position'] = 10;
$bp->bp_nav['activity']['position'] = 20;
$bp->bp_nav['friends']['position'] = 30;
$bp->bp_nav['groups']['position'] = 40;
$bp->bp_nav['messages']['position'] = 50;
$bp->bp_nav['settings']['position'] = 60;
}
add_action( 'bp_setup_nav', 'rt_change_profile_tab_order', 999 );

```
#### Rename a menu/tabs:

```php

$bp->bp_nav['activity'][name'] = 'Timeline';

```

#### Remove a menu item

```php

$bp->bp_nav['activity'] = false;

```

### Changes in groups menu/tabs

#### Change menu order in groups

```php 

function rt_bp_groups_forum_first_tab() {
global $bp;

$bp->bp_options_nav['groups']['home']['position'] = '50';
}
add_action('wp', 'rt_bp_groups_forum_first_tab');
```


#### Rename menu nav item
```php

$bp->bp_options_nav['groups']['home']['name'] = 'group name';

```

####  Remove menu nav item

```php

$bp->bp_options_nav['groups']['home'] = false;
```

Reference links:

* http://buddypress.org/community/groups/how-to-and-troubleshooting/forum/topic/customizing-buddypress-profile-page-default-tab-and-item-nav-order/

* http://buddypress.org/community/groups/how-to-and-troubleshooting/forum/topic/changing-group-tab-display-defaults/#post-55449
