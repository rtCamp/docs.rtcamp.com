# Shortcodes

rtBiz Helpdesk offers you various shortcodes to display a ready made support form or show tickets in any WordPress page.

##Shortcodes which you can use in WordPress pages/posts are explained below :


### 1. Shortcode for Support Form

You can use the following shortcode to display a support form.

```
[rtbiz_hd_support_form title="yes"]
```
####**Title attribute**

You can use the title attribute as shown above. This will show "Get support" as title. The default value is yes. Accepts yes/no.

### 2. Shortcode for Tickets

Different attributes for tickets are shown below :

####**i. contactid**

This attribute can be used for displaying tickets connected with the Helpdesk contact.

```[rtbiz_hd_tickets contactid = {Postid of that contact}]```
To get contactid, go to Helpdesk -> Customers and do a mouseover the customer's name. You'll see the post id (like post=63) which you can use in the shortcode.

*For example:* To display tickets of Helpdesk Customer with the postid 63, you can use

```[rtbiz_hd_tickets contactid = 63]```

####**ii. email**

This attribute can be used for displaying tickets connected with the current logged in user. Default is empty string.

```[rtbiz_hd_tickets email="{{logged_in_user}}" ]```

####**iii. fav**

This attribute is to be used for displaying favorite tickets. It takes true or false values. Default value is false.

*For example:* To display favorite tickets of user with the userid 1, you can use

```[rtbiz_hd_tickets userid= 1 fav=true]```


####**iv. orderid**

This attribute is to be used for displaying tickets related with WooCommerce orders or EDD downloads.

 *For example:* To display tickets for WooCommerce order #69, you can use

```[rtbiz_hd_tickets orderid=69]```

####**v. show_support_form_link**

This attribute is to be used for displaying the 'Create new ticket' button which points to the Support form page. It takes values of either yes or no. Default value is no.

*For example:* To display 'Create new ticket' button with the tickets connected with user id 1, you can use

```[rtbiz_hd_tickets show_support_form_link=yes userid=1 ] ```

####**vi. title**

You can use this attribute to disable displaying ticket title. This attribute takes the values yes or no. Title is enabled by default.

*For example:* To disable title (Tickets (number of tickets)), for userid 1 you can use

```[rtbiz_hd_tickets userid= 1 title=no]```


####**vii. userid**

This attribute is to be used for displaying the tickets associated with a particular user. Default is empty string.
*For example:* To show tickets for the user with an id of 1, you can use

``` [rtbiz_hd_tickets userid= 1] ```


####Parameter summary
* userid = '1'
* email = "{{logged_in_user}}"
* orderid = '510'
* show_support_form_link = 'yes'
* fav = 'true'
* title = 'yes'

###Note :

Staff members will only see the tickets **assigned** to them and customers will see the tickets **created** by them.

###Other Shortcodes used in [demo](http://demo.rtcamp.com/rtbiz-helpdesk)/[rtCamp](https://rtcamp.com/my-account/#purchase-history)
##### Autoselect the purchased product in support page's 'Products' dropdown while creating a new support request


In [demo](http://demo.rtcamp.com/rtbiz-helpdesk/download-history/) we have used Easy digital download's `[download_history]` shortcode. You can check by logging in as [EDD customer](http://demo.rtcamp.com/rtbiz-helpdesk/). Clicking `Create ticket` link will open the support page with that order/product selected.

In [rtCamp](https://rtcamp.com/my-account/#purchase-history), we have used Easy digital download's `[purchase_history]` shortcode for similar purpose.





