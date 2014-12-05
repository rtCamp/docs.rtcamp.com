---
excerpt: While number of bloggers enjoyed the free migration, some users faced the
  problem of Blogger.com To WordPress Redirection. We received multiple queries on
  our FREE Technical Support Forums from Hostgator customers that they are facing
  problems of re-direction.
title: '[Solved] Blogger To WordPress Redirection Issue With Hostgator’s Hosting'
---

We wrote [Blogger To WordPress Migration](https://rtcamp.com/tutorials/migrate-from-blogger-to-wordpress-best-diy-tutorial/) article few months back and got a tremendous response. It helped many of bloggers to move their Blogger.com blog to self hosted WordPress. To make the process even easier, we offered Free Migration on purchase of Hosting from our [recommended hosts](https://rtcamp.com/webhosts/).

While number of bloggers enjoyed the free migration, some users faced the problem of Blogger.com To WordPress Redirection. We received multiple queries on our [FREE Technical Support Forums](https://rtcamp.com/support/topic/redirect-not-working/) from Hostgator customers that they are facing problems of re-direction.


### Reported Error:


example.blogspot.com is migrated and re-directed to self hosted WordPress at example.com.

When users click on any post of older blogger blog:

for e.g.**example.blogspot.com/2011/07/test-post.html**

it should redirect to **www.example.com/2011/07/test-page.html**

but instead it’s been redirected to

**www.example.com/?b2w=http://example.blogspot.com/2011/07/test-post.html**


### Solution:


We suggest you to communicate with the Hostgator customer support team and report the issue.

Please ask in hostgator support team for this ==>> { Hello "insert hostgator employee's name" Can you please Whitelist the security rules 1434234 so that I can connect remotely for redirects.}
And give them old blogspot post URL which is not redirecting to WordPress post.

The above statement will help the hostgator support team to understand the issue correctly.


**Update:** You can always get free support from us but before that please cross check the following. This may save your time!


1. Check if the blogger to WordPress redirection plugin is activated.

2. Check if your permalinks structure on your WordPress is same as the custom structure [recommended here](https://rtcamp.com/tutorials/migrate-from-blogger-to-wordpress-best-tutorial/#permalink).

You can check the **custom field **of posts in the post editor of WordPress.

blogger_blog = **example.blogspot.com**
blogger_permalink = **/2011/07/test-post.html**

3. Check[ this site](http://web-sniffer.net/) to verify that if your old post (**www.example.com/?b2w=http://example.blogspot.com/2011/07/test-post.html**) is still giving **403 Forbidden** error. If yes, you need to cross check the issue with Hostgator team again

I wish it will solve your re-direction problem.

Happy Blogging.
