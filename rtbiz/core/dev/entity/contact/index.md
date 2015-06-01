Contact
=======

### `Class Rtbiz_Contact`

This class is inherited from `Rt_Entity`.

#### Attribute

##### `public $email_key = 'contact_email';`

This meta key is used to store contact email in meta table.

##### `static $primary_email_key = 'contact_primary_email';`

This meta key is for primary email of a contact.

##### `public $website_url_key = 'contact_website';`

A meta key in use to store contact website in meta table.

#### Methods

##### `__construct()`

Constructor method for the class. It is initializing required tasks for Contact entity such as *WP User to Contact* sync, taxonomy registration, adding default taxonomy terms, P2P connections, metaboxes and other miscellaneous tasks.

``` php
@uses Rtbiz_Entity::__construct()			- rtBiz Core. Calling out parent constructor.
@uses Rtbiz_Contact::setup_meta_fields()	- rtBiz Core. Define meta fields to save for Contact.
@uses add_action()						- WordPress Core. Adding init action to initialize contact entity and other tasks.
@uses add_filter()						- WordPress Core. Useful for some of the miscellaneous tasks.
```

##### `rtbiz_exported_admin_notice()`

Admin notice method to display the user message when WordPress users are exported to rtBiz contacts.

``` php
@uses _n()					- WordPress Core. Internationalization function
@uses number_format_i18n()	- WordPress Core. Internationalization function
```

##### `rtbiz_callback_bulk_action()`

Call back method for bulk export action from users.php to export rtbiz contacts

``` php
@uses check_admin_referer()				- WordPress core. To verify bulk action.
@uses self::rtbiz_export_biz_contacts()	- rtBiz core. Exports WP user to rtBiz contact.
@uses add_query_arg()					- WordPress core. Build redirection URL.
@uses wp_redirect()						- WordPress core. To redirect user back to Users page.
```

##### `rtbiz_add_export_user_bulk_action()`

This method adds bulk action option to export WordPress users to rtBiz Contacts via JS hack.

##### `rtbiz_export_contact()`

AJAX callback for single user export from user.php

``` php
@uses check_ajax_referer()				- WordPress core. To verify export action for user.
@uses Rt_contact::rtbiz_manage_export_user_columns()	- rtBiz Core. Exports WP user to rtBiz Contact.
@uses get_post()						- WordPress core. To check for existing contact with same email.
@uses get_edit_post_link()				- WordPress core. To get edit post link for contact.
```

##### `rtbiz_export_contact()`

AJAX callback to export all WordPress users to rtBiz Contacts.

``` php
@uses check_ajax_referer() - WordPress Core. To verify export action.
@uses Rtbiz_Contact::rtbiz_export_biz_contact() - rtBiz Core. Exports WordPress Users to rtBiz Contacts for given array of IDs.
```

##### `rtbiz_export_biz_contacts( $ids )`

This method exports WP users to rtBiz contacts in bulk.

``` php
@param $ids array - Array of WordPress User IDs

@return int - Count of exported users.

@uses get_users() - WordPress Core. To fetch the users.
@uses wp_list_pluck() - WordPress Core. To extract User ID from WordPress User object.
@uses rtbiz_get_contact_for_wp_user() - rtBiz Core. Get mapped rtBiz Contact for give WP User ID.
@uses Rtbiz_Contact::rtbiz_export_biz_contacts() - rtBiz Core. Export given User to rtBiz Contact.
```

##### `rtbiz_export_biz_contact()`

This method exports single WP user to rtbiz contact. It will check if contact exists then it will map or else create new contact and will map with p2p.

``` php
@param $id int - WordPress User ID

@return mixed - rtBiz Contact ID if a contact is imported successfully otherwise null.

@uses get_user_by() - WordPress core. Get user object from ID.
@uses get_posts() - WordPress core. Fetches contacts posts to verify if contact exists or not.
@uses rtbiz_is_primary_email_unique() - rtBiz Core. To verify unique email.
@uses rtbiz_add_contact() - rtBiz core. Adds new contact.
@uses Rtbiz_Contact::rtbiz_connect_contact_to_user() - connects WP User to rtBiz Contact.
```

##### `rtbiz_manage_export_user_columns( $value, $column_name, $id )`

Call back method to manage user columns for rtBiz Contact Export.

``` php
@param $value string - Value to display in the column.
@param $column_name string - Column name to identify
@param $id int - User ID

@return string - Markup string to display in the column.

@uses rtbiz_get_contact_for_wp_user() - rtBiz core. Get rtBiz contact for given WP User ID
@uses wp_create_nonce() - WordPrecc Core. Creates nonce for export action.
```

##### `rtbiz_check_primary_email_for_admin_notice()`

This method checks for Unique Primary Email & Empty Primary Email for rtBiz Contact and adds appropriate admin notices on the screen.

``` php
@uses rtbiz_get_contact_post_type() - rtBiz core. To check for needed post type.
@uses get_user_meta() - WordPress core. Fetches email id from user meta table.
@uses get_current_user_id() - WordPress core. Fetches User ID of currently logged in user.
@uses add_action() - Adds action method to display admin notice.
@uses delete_user_meta() - deletes user meta value after displaying the admin notice.
```

##### `manage_contact_column_header( $columns )`

This method updates the label of Posts column in user category taxonomy list table.

``` php
@param $columns array - An array of columns along with their labels.

@return $columns array - updated array of columns for list table.
```

##### `manage_contact_column_body( $display, $column, $term_id )`

To add custom value in column on User Category taxonomy list table.

``` php
@param $display string - Content to display in column.
@param $column string - column slug
@param $term_id - Term ID for which the row is rendered in the table.
```

##### `contact_meta_boxes()`

This action method adds up additional metaboxes for Contact post type.

``` php
@uses add_meta_box() - WordPress Core. To add new metabox
```

##### `contact_user_p2p()`

Registers rtBiz Contact => WP User P2P connection

``` php
@uses p2p_register_connection_type() - P2P Core. Registers new connection between two entities.
```

##### `rtbiz_connect_contact_to_user( $from, $to )`

Connects a rtBiz Contact to a WP User.

``` php
@param $from mixed - rtBiz Contact Post ID or Post Object
@param $to mixed - WP User ID or User Object.

@uses p2p_connection_exists() - P2P Core. Checks if rtBiz Contact is already connected or not.
@uses p2p_type() - P2P core. Gets a P2P connection type.
@uses P2P_Connection_Type_Factory::connect() - P2P Core. Connects two entities for given objects/IDs.
```

##### `remove_contact_to_user( $from, $to )`

``` php
@param $from mixed - rtBiz Contact Post ID or Post Object
@param $to mixed - WP User ID or User Object.

@uses p2p_connection_exists() - P2P Core. Checks if rtBiz Contact is already connected or not.
@uses p2p_type() - P2P core. Gets a P2P connection type.
@uses P2P_Connection_Type_Factory::disconnect() - P2P Core. Removes connection between two entities for given objects/IDs.
```

##### `edit_view_filters( $views )`

This method shows filter links on top of rtBiz Contacts List Table based on User Categories defined for them.

``` php
@param $views array - An array of different filter views based on Post Statuses of Contact.

@return @views array - Updated list of filter views based on User Categories.

@uses get_terms() - WordPress Core. Fetch all the user category terms for rtBiz Contact.
@uses WP_Query() - WordPress core. To query for the contact count for particular user category.
```

##### `register_tax()`

Registers new taxonomy for User Category.

``` php
@uses rtbiz_get_access_role_cap() - rtBiz Core. To check for ACL.
@uses register_taxonomy() - WordPress Core. To register new taxonomy.
@uses rtbiz_get_contact_post_type() - WordPress core. To get the contact post type slug.
```

##### `add_defualt_categories_on_activate()`

Adds up default terms for User category for Contact on plugin activation. It will check for terms. If they don't exists then it will create new terms.

``` php
@uses wp_insert_term() - WordPress Core. Inserts new terms if default term doesn't exist.
```

##### `setup_meta_fields()`

This method defines all the meta fields needed for `Contact` entity.

``` php
@uses apply_filters() - WordPress core. To define custom WP filter hook for other plugin/theme to change the meta fields for rtBiz Contact.

@defined rtbiz_contact_meta_fields - WP Custom Filter to change meta fields for rtBiz Contact.
```

*Example*

``` php
add_filter( 'rtbiz_contact_meta_fields', 'my_custom_contact_meta_field' );

function my_custom_contact_meta_field( $fields ) {

	$fields[] = array(
		'key' => 'contact_blog',
		'text' => __( 'Enter your Blog Website URL' ),
		'label' => __( 'Blog Website' ),
		'is_multiple' => true,
		'type' => 'text',
		'name' => 'contact_meta[contact_blog][]',
		'class' => 'input-multiple',
		'description' => __( 'Blog Website URL.' ),
		'category' => 'Social',
	);

	return $fields;
}
```

##### `rtbiz_print_metabox_js()`

This includes, different kind of JS codes that are required in meta fields functionality. It is overriden from `Rtbiz_Entity` parent class.

##### `rtbiz_primary_email_empty()`

This method displays admin notice for empty primary email error.

``` php
@uses _e() - WordPress Core. Internationalization method.
```

##### `rtbiz_primary_email_not_unique()`

This method displays admin notice for duplicate primary email error.

``` php
@uses _e() - WordPress Core. Internationalization method.
```

##### `save_meta_values()`

This method saves all additional meta fields values for rtBiz contact. It is overriden from `Rtbiz_Entity` parent class.

``` php
@uses update_user_meta() - WordPress Core. Updates user meta value.
@uses get_current_user_id() - WordPress Core. Gets User ID of current logged in user.
@uses delete_user_meta() - WordPress core. deletes user meta value.
@uses rtbiz_is_primary_email_unique() - WordPress Core. Checks for primary email.
@uses Rt_Entity::get_meta() - rtBiz core. Get rtBiz Contact Meta.
@uses Rt_Entity::delete_meta() - rtBiz core. Delete rtBiz Contact Meta.
@uses Rt_Entity::add_meta() - rtBiz core. Add rtBiz Contact Meta.
@uses Rt_Entity::update_meta() - rtBiz core. Update rtBiz Contact Meta.
@uses Rt_Entity::save_meta_values() - rtBiz core. Calling parent class method to save meta fields.
```

##### `rtbiz_get_by_email()`

Adds additional columns for Person list table. ( Phone Number, Country & Organization ). Overriden from `Rt_Entity` parent class.

``` php
@uses Rt_Entity::rtbiz_post_table_columns() - rtBiz Core. Calling parent class method to add up extra columns.
```

##### `rtbiz_manage_post_table_columns()`

Manages additional columns mentioned above.

``` php
@uses Rt_Entity::rtbiz_add_contact() - rtBiz Core. Calling parent class method to manage extra columns.
```

##### `rtbiz_add_contact( $name, $description, $email )`

Adds new rtBiz Contact in the database.

``` php
@param $name string - rtBiz Contact Title.
@param $description string - rtBiz Contact Description.
@param $email string - rtBiz Contact Email.

@return $contact_id int - Returns rtBiz Contact Post ID.

@uses wp_insert_post() - WordPress Core. Inserts new post in database.
@uses rtbiz_update_entity_meta() - rtBiz Core. Adds email in Contact Meta.
```

##### `rtbiz_get_by_email( $email )`

Search contact by email. Returns contact post object if found and empty array if not found.

``` php
@param $email string - Email string to search for in rtBiz Contacts.

@return array - An array of rtBiz Contacts if given email is matched with any rtBiz Contact otherwise an empty array is returned.

@uses get_posts() - WordPress Core. To fetch the contacts.
```

##### `rtbiz_get_contact_for_wp_user( $user_id )`

Search contact object for given WP_User ID. Returns contact object if found otherwise empty array.

``` php
@param $user_id int - WordPress User ID

@uses get_posts() - WordPress core. Fetches rtBiz Contacts.
```

##### `rtbiz_get_wp_user_for_contact( $contact_id )`

Search for WP_User for given person id. Returns WP_User ID if found otherwise returns `false`.

##### `rtbiz_contact_create_for_wp_user( $user_id )`

Creates Contact object for given WP_User.

``` php
@param $user_id int - WordPress User ID

@uses get_user_by() - WordPress Core. Fetch users based on ID.
@uses get_posts() - Fetch contacts and check for existing contact.
@uses Rtbiz_Contact::rtbiz_add_contact() - rtBiz Core. Add new contact if it does not exist.
@uses Rtbiz_Contact::rtbiz_connect_contact_to_user() - rtBiz Core. Connect rtBiz Contact with WP User.
@uses Rtbiz_Contact::update_meta() - rtBiz Core. Updates meta values for Contact.
```

##### `rtbiz_search_user_ajax()`

Search by name method for AJAX callback.

``` php
@uses WPDB::get_results() - Executes custom query to fetch display name & username.
```

#### Hooks

##### Actions

###### `rtbiz_before_delete_contact_acl_remove`
``` php
@param $contactid Post id of contact cpt being delete.
@param $userid User id mapped with post id on contact
```

Before contact ACL remove

###### `rtbiz_after_delete_contact_acl_remove`
``` php
@param $contactid //Post id of contact cpt being delete.
@param $userid User // id mapped with post id on contact
```

After contact ACL remove

###### `rtbiz_after_delete_contact_acl_remove`
``` php
@param $contactid // Post id of contact cpt being delete.
@param $userid User //  id mapped with post id on contact
```

After ACL Permission is removed.

###### `rtbiz_before_delete_contact`
``` php
@param $contactid // Post id of contact cpt being delete.
@param $userid User // id mapped with post id on contact
```

Before contact deleted from wordpress database and after ACL is removed this action will be called.

##### Filters

###### `rtbiz_contact_meta_fields`
``` php
@param $meta_fields // array of additional meta fields
```
Additional custom fields can be added using this filter.

##### `rtbiz_contact_labels`
``` php
@param $contact_columns // array of post type of array
```
Post type columns can be change using this hook
