Actions
=============
### Activation
1. `rtbiz_activation_redirect`

    Called when rtbiz is activated and redirect on this action.

### Rtbiz
1. `rtbiz_init`

    rtbiz_init is very important hook plugin dependent on rtbiz are getting executed on rtbiz_init hook

    example:
    ``` php
    add_action('rtbiz_init', 'my_plugin');
    function myplugin(){
        $myplugin = new myplugin();
        $myplugin->run();
    }
    ```
2. `rtbiz_before_template_part`

    ``` php
    @param $template_name
    @param $template_path
    @param $located
    @param $args
    ```
    This action is called before including template for rtbiz plugin.

3. `rtbiz_after_template_part`
  ``` php
    @param $template_name
    @param $template_path
    @param $located
    @param $args
    ```
    This action is called after including template for rtbiz plugin.

### Dashboard
1. `rtbiz_welcome_panel_addon_link`

    Action for other addons to add quick links for their plugins.

2. `rtbiz_dashboard_add_meta_boxes`
    ``` php
    @param $screen_id
    ```
    This action is being used internally to specify which dashboard widget is to render next.
3. `rtbiz_welcome_panel`

    This hook is used internally to display welcome widget of rtbiz.

4. `rtbiz_after_dashboard`

    This action is called at the end of dashboard template.

###Entity
1. `rtbiz_entity_hooks`
        ``` php
        @param $entity // entity Object will be called with this action. Either contact or company
        ```
        Entity action will be called with entity object.
2. `rtbiz_entity_meta_boxes`
``` php
@param $post_type // post type of entity object ie. contact or company
```
Will be called with meta boxes.

3. `rtbiz_before_render_meta_fields`
``` php
@param $meta_fields // additional meta fields to be renders
```
Called before rendering additional metabox.
4. `rtbiz_after_render_meta_fields`
``` php
@param $post // Wp post for current object contact or company
@param $post_type //post type of current object.
```
5. `rtbiz_print_metabox_js`
``` php
@param $post // Wp post for current object contact or company
@param $post_type //post type of current object.
```
To echo additional js if there any.

6. `rtbiz_save_entity_meta`
``` php
@param $post // Wp post for current object contact or company
@param $post_type //post type of current object.
@param $obj // object of entity class
```
To save added additional metabox.

7. `rtbiz_entity_manage_columns`
``` php
@param $column // column
@param $post_id // post id of contact or company
@param $obj // object of entity class
```
To mange custom column using wordpress hook `'manage_'.$post-type.'_posts_custom_column`

### Contact
1. `rtbiz_before_delete_contact_acl_remove`
``` php
@param $contactid Post id of contact cpt being delete.
@param $userid User id mapped with post id on contact
```
Before contact ACL remove

2. `rtbiz_after_delete_contact_acl_remove`
``` php
@param $contactid //Post id of contact cpt being delete.
@param $userid User // id mapped with post id on contact
```
After contact ACL remove

3. `after_delete_contact_acl_remove`
``` php
@param $contactid // Post id of contact cpt being delete.
@param $userid User //  id mapped with post id on contact
```
After ACL Permission is removed.

4. `before_delete_contact`
``` php
@param $contactid // Post id of contact cpt being delete.
@param $userid User // id mapped with post id on contact
```
Before contact deleted from wordpress database and after ACL is removed this action will be called.
