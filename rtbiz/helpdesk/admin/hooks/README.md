#Hooks 

rtBiz-Helpdesk Hooks 

##Filters 


* rthd_followup_classes
 
 This filter will allows uses to add their custom classes Parameter are `$comment_type_class` and `$comment_id` 
* rtbiz_hd_filter_adult_emails
  
 This is used for filtering adult tickets emails Parameter are `$bccemails` and `$post_id`.

* rtbiz_hd_locate_template
  
 This filter is used if you want to change helpdesk default templates. Parameter are `$template, $template_name, $template_path`

* rthd_email_template

 This filter is used to change email template of rtbiz-helpdesk. Parameter is `$path` of email template. 
 
* rthd_ticket_front_page_login_url
 
 This filter is used to change login url. Parametereter is `$login_link` and `$current_page_link`

* rtbiz_hd_support_form_shortcode
 
 This filter is given to modify support form markup. Accepts Parameter `$markup` and `$attr`.


* rthd_before_email_body
 
 This filter is to add markup before email body.

* rthd_after_email_body

 This filter is to add markup after email body.

* rtbiz_hd_support_from_product_title

 On support form we show default project as `Choose Product` and if you want to change that you can use this filter. Parameter `$product_string`. 



##Actions

* rt_hd_after_ticket_information

 Called after ticket information box ui render on backend. Parameter `$post`.
 
* rthd_update_attribute
  
  Allows to update custom attribute. Parameters are `$attr, $post_id, $newTicket`

* rthd_render_attribute
  Allows to change custom attribute. Parameters are `$attr, $post_id, $edit`
 
 
* rthd_render_taxonomy
 
 Allows to render taxonomy. Parameter are `$attr, $post_id, $edit`. 

* rthd_render_meta
  
 Allows to render meta. Parameters are `$attr, $post_id, $edit`.

 
* rtbiz_hd_user_purchase_history
 
 Renders purchase history of user on frontend. Parameter `$post_id`.

* rthd_dashboard_add_meta_boxes

 Dashboard add metabox para `$screen_id`.
 
* rtbiz_hd_after_dashboard

 Calls after dashboards are rendered.