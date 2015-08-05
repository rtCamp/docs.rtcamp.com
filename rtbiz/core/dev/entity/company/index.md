Company
=======

### `Class Rtbiz_Company`

Just like `Rtbiz_Contact`, `Rtbiz_Company` is also inherited from `Rtbiz_Entity`.

#### Attributes

##### `static $primary_email = 'account_primary_email'`

This key is used to store account's primary email in meta.

#### Methods

##### `__construct()`

Constructor method for the class.

``` php
@uses Rtbiz_Entity::__construct()			- rtBiz core. Calling parent class constructor.
@uses Rtbiz_Company::setup_meta_fields()	- rtBiz core. Settings up meta fields for company.
@uses add_action()						- WordPress core. To add init action for initialize entity i.e., company.
```

##### `setup_meta_fields()`

This method defines all the meta fields needed for `Company` entity.

``` php
@uses apply_filters()	- WordPress core. To define new filter hook.

@defined rtbiz_get_company_meta_fields	- Custom WP Filter to add extra fields for company.
```

*Example*

``` php
add_filter( 'rtbiz_company_meta_fields', 'my_custom_company_fields' );

function my_custom_company_fields( $fields ) {
	$fields[] = array(
		'key' => 'company_pan_number',
		'text' => __( 'PAN Number' ),
		'label' => __( 'Company PAN Number' ),
		'is_multiple' => false,
		'type' => 'number',
		'name' => 'company_pan_number',
		'description' => __( 'Enter Company PAN Number' ),
		'category' => 'Contact',
	);
	return $fields;
}
```

##### `print_metabox_js()`

Overridden from `Rtbiz_Entity` parent class. It is adding JS codes for email validations & other features.

##### `save_meta_values()`

Overridden from `Rtbiz_Entity` parent class. Here all the meta values will be saved for Company.

``` php
@param $post_id int - WordPress Post ID

@uses rtbiz_is_primary_email_unique_company() - rtBiz Core. Checks for unique email.
@uses Rtbiz_Entity::get_meta()					- rtBiz core. Gets meta value of Company for given meta key.
@uses Rtbiz_Entity::delete_meta()				- rtBiz Core. deletes meta value of company for given key.
@uses Rtbiz_Entity::add_meta()					- rtBiz Core. add meta value for company with given key and value.
@uses Rtbiz_Entity::update_meta()				- rtBiz Core. update existing meta value.
@uses Rtbiz_Entity::save_meta_values()			- rtBiz Core. Calling parent method for this class.
```

##### `post_table_columns( $columns )`

Modifies the columns array for new sequence for Company List Table, i.e., Country, Products, etc. This method is overridden from `Rtbiz_Entity` parent class.

``` php
@param $columns array - Existing columns for Company List Table.

@return $cols array - New columns for Company List Table.

@uses Rtbiz_Entity::post_table_columns()	- rtBiz Core. Calling parent method.
```

##### `manage_post_table_columns()`

Manages additional columns mentioned above.

##### `add_company( $name, $note, $address, $country, $meta )`

Adds new company in the database.

##### `get_company()`

Returns companies post objects if found according to arguments passed and empty array if not found.

#### Hooks

##### Actions

##### Filters

###### `rtbiz_company_meta_fields`

``` php
@param $meta_array // additional meta array for company CPT
```
This filter can be used to add additional custom meta fields.

###### `rt_biz_company_labels`
``` php
@param $cpt_labels // Company post type CPT array
```
This filter is used to change company post type labels.
