# Shortcodes

rtBiz Helpdesk offers you various shortcodes to display a ready made  support form or show tickets in any WordPress page.

Shortcodes which you can use are explained below :


### 1. Shortcode for Support Form

You can use the following shortcode in any WordPress page to display a support form.

```
[rtbiz_hd_support_form]
```
### 2. Shortcode for Tickets

Different attributes for tickets are shown below :

**i. 'userid' **: This attribute is to be used for displaying the tickets associated with a particular user.

*For example:* To show tickets for the user with an id of 1, you can use

``` [rtbiz_hd_tickets userid= 1] ```

**ii. 'email'** : This attribute can be used for displaying tickets connected with the current logged in user.

```[rtbiz_hd_tickets email="{{logged_in_user}}" ]```

**iii. 'orderid'**: This attribute is to be used for displaying tickets related with WooCommerce orders or EDD downloads.

 *For example:* To display tickets for WooCommerce order #69, you can use

```[rtbiz_hd_tickets orderid=69]```

**iv. 'show_support_form_link'** : This attribute is to be used for displaying the 'Create new ticket' button which points to the Support form page. It takes values of either yes or no.

*For example:* To display 'Create new ticket' button with the tickets connected with user id 1, you can use

```[rtbiz_hd_tickets show_support_form_link=yes userid=1 ] ```

**v. 'fav'** : This attribute is to be used for displaying favorite tickets. It takes true or false values.

*For example:* To display favorite tickets of user with the userid 1, you can use

```[rtbiz_hd_tickets userid= 1 fav=true]```


**vi.'title'** : You can use this attribute to disable displaying ticket title. This attribute takes the values yes or no. Title is enabled by default.

*For example:* To disable title (Tickets (number of tickets)), for userid 1 you can use

```[rtbiz_hd_tickets userid= 1 title=no]```


