rtBiz Internal Architecture
===========================

rtBiz has been developed with a motto of developing an application framework -cum- plugin. And hence, it serves its dual purpose pretty well.

rtBiz can become a fully functional application framework for other add-ons. Lot of thought-process and hard work have been pursued to develop such framework from grass root level. And that's the reason rtBiz has been developed to be robust as a framework for other addons.

This particular article talks about how rtBiz has been architectured internally.

### site_option
- rtbiz_acl_module_permissions

### option
- rtbiz_activation_redirect
- rtbiz_offering_plugin_sync
- RT_RTBIZ_DB_VERSIONS

### user_meta
- rtbiz_show_welcome_panel
- rtbiz_empty_primary_email_POSTID
- rt_biz_unique_primary_email_POSTID

### p2p

### p2p meta

### Custom Post Types

#### contact
- rtbiz_profile_permissions
- rtbiz_is_staff_member
- rtbiz_contact_primary_email
- rtbiz_contact_email
- rtbiz_contact_phone
- rtbiz_contact_fax
- rtbiz_contact_website
- rtbiz_contact_dob
- rtbiz_contact_address
- rtbiz_contact_postal_address
- rtbiz_contact_tfn
- rtbiz_contact_skype_id
- rtbiz_contact_twitter
- rtbiz_contact_facebook
- rtbiz_contact_linkedin
- rtbiz_contact_kin_name
- rtbiz_contact_kin_address
- rtbiz_contact_kin_number
- rtbiz_contact_kin_relation
- rtbiz_contact_commence_date
- rtbiz_contact_terminate_date


#### company
- rtbiz_company_address
- rtbiz_company_country
- rtbiz_company_phone
- rtbiz_company_fax
- rtbiz_company_primary_email
- rtbiz_company_email
- rtbiz_company_website
- rtbiz_company_skype_id
- rtbiz_company_twitter
- rtbiz_company_facebook
- rtbiz_company_linkedin

### Taxonomies

- Contact Groups
- Departments
- Products
- Attributes

###taxonomymeta
- rt-offering-meta // serialize
- _offering_id
- _offering_import_from
- rt-team-meta // serialize


****
**TODO** :
- Meta - all meta needs to be found out from codebase and listed out here.
- Purpose for all CPTs, Taxonomies & Meta.

