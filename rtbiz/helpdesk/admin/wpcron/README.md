#Cron Jobs

Cron is a system originally built for UNIX that enables users to execute commands, programs and other actions at specified times.

### Helpdesk cron jobs

1. rt_send_email_cron: for sending emails.
2. rt_parse_email_cron: for reading emails.

To see all cron jobs or run cron job manually you can install [WP Crontrol](https://wordpress.org/plugins/wp-crontrol/) plugin.
Then go to `Tools -> Crontrol`.

Read more about crons below.

###What is cron ?
WordPress Cron is what many people refer to as a “pseudo-cron system.” The difference is in how UNIX cron and WordPress Cron take action. A typical UNIX cron system runs in this order:
1. A time tied to an action occurs.
2. Cron runs the action tied to that time.

With WordPress Cron, it works a little differently:
1. A visitor comes to any page on your WordPress website.
2. WordPress Cron checks each cron event to see whether the scheduled time has passed.
3. If the scheduled time for that event has passed, then WordPress Cron executes any actions tied to that event.

### Limitation of wp-cron
You may be wondering, “What happens if no one visits my website at all? Does WordPress Cron not run?” The biggest limitation of WordPress Cron stems from its inability to run without visitors. This leads to a few potential issues.

1. Wordpress cron is imprecise (zero visits = zero cron runs)
2. Running heavy processes could slow down your website

### Solution

If you have less visitor on your site or you want to make cron job precise, you could follow one of two methods. You could set up your server’s cron to hit wp-cron.php at a regular interval by following the instructions outlined in [rtCamp](https://rtcamp.com/tutorials/wordpress/wp-cron-crontab/)’s article. If this seems overly complicated, you could use a tool such as Pingdom to trigger an HTTP request directly to wp-cron.php.
