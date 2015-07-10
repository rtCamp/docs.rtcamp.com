## Filters

* [rtm_membership_success_subscription_free_message](#rtm_membership_success_subscription_free_message)

###description

* ####rtm_membership_success_subscription_free_message <a name="rtm_membership_success_subscription_free_message"></a>

If you want to change text **You have successfully subscribed** after getting a free membership and return it with a link, you can use this filter.

For example:

```php
function custom_success_subscription_message($text)
{
    $text = $text."<a href=".get_permalink(get_option('rtm-membership-page')).">".__('BACK','rtmedia') ."</a>";
    return $text;
}
add_filter('rtm_membership_success_subscription_free_message','custom_success_subscription_message',10, 1);
```
