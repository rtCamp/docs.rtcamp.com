# Filters

### Entitiy
1. `rtbiz_entity_fields_loop_single_field`
``` php
@param $field
```
Can be used when user want to change perticular field from additional meta.

2. `rtbiz_entity_columns`
``` php
@param $columns
@param $obj
```
It uses wordpress `manage_' . $post_type . '_posts_columns` filter can be used to manage columns.

3. `rtbiz_entity_register_post_type_args`
    ``` php
    @param $post_args // this will be post type register args.
    @param $name // name of registering post type
    ```
    This filter is used to change post type agruments before it registers.
4. `rt_entity_remove_meta_box`
    ``` php
    @param $meta_box // metabox that are being removed
    ```
    This is filter is used to remove meta box.
5. `rt_entity_rearrange_columns`
    ``` php
    @param $columns
    @param $obj // Entitiy object
    ```
    If you want to change order of columns you can use this filter.

### Contact
1. `rtbiz_contact_meta_fields`
``` php
@param $meta_fields // array of additional meta fields
```
Additional custom fields can be added using this filter.

2. `rtbiz_contact_labels`
``` php
@param $contact_columns // array of post type of array
```
Post type columns can be change using this hook

### Company
1. `rtbiz_company_meta_fields`

    ``` php
    @param $meta_array // additional meta array for company CPT
    ```
    This filter can be used to add additional custom meta fields.

2. `rt_biz_company_labels`
    ``` php
    @param $cpt_labels // Company post type CPT array
    ```
    This filter is used to change company post type labels.

### Access Control

1. `rtbiz_modules`

``` php
    @param $modules Array
```

This filter is used to register new plugin modules to rtBiz for its ACL.

2. `rtbiz_permissions`
``` php
@param $permission Array
```
This filter is used to add / update default rtBiz permissions.


### Help

1. `rtbiz_help_tabs`
    ``` php
    @param $help_tabs
    ```
    If someone wants to change help content or add new page and help for rtbiz they can use this filter, This will give `$key => $val` array where `$key` will be page name and `$val` will be html for that page.

2. `rtbiz_help_documentation_link`
    ``` php
    @param $string String
    ```
    Documentation link for rtbiz.

3. `rtbiz_help_support_forum_link`
    ``` php
    @param $support_link String
    ```
    Support page link of rtcamp will be default param. You can change it using this filter.
4. `rtbiz_help_sidebar_content`
    ``` php
    @param $html String
    ```
    This will pass the html that is renderd using documentation and support page link. You can use this filter to change it's value.
