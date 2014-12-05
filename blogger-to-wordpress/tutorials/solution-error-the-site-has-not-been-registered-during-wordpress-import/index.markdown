---
author: nitun.lanjewar
comments: false
date: 2011-04-29 12:38:50+00:00
excerpt: Solution for error  - "The page you have requested cannot be displayed. Another
  site was requesting access to your Google Account, but sent a malformed...."
layout: page
slug: solution-error-the-site-has-not-been-registered-during-wordpress-import
title: '[Solution] Error - "The site has not been registered" during WordPress Import'
---

John has posted a support request in our [free forum](http://bloggertowp.org/forums/topic/running-blogger-to-wordpress-redirection-plugin-as-part-of-the-migration#post-90) asking for solution, following error which he has encountered while using our [Blogger To WordPress Redirection User Guide](http://bloggertowp.org/migrate-from-blogger-to-wordpress-best-tutorial/) (DIY Tutorial).

The Error Message Was...


<blockquote>The page you have requested cannot be displayed. Another site was requesting access to your Google Account, but sent a malformed request. Please contact the site that you were trying to use when you received this message to inform them of the error. A detailed error message follows:

The site "http://example.com" has not been registered.</blockquote>




### Why This Error Occurs:


Google originally built it's own _**Google Authentication Service**_ to access Google applications like sites, Google Map, Blogger Account, Analytics, etc. By using the Google Authentication Service is easy to access all the Google services.


### Here is the solution:


While importing content from your blogger.com blog to WordPress, we are going to access Google service. For that we need to register your domain (or we can say, just to take permission by "registering" your domain with Google).

Register your domain here [https://www.google.com/accounts/ManageDomains](https://www.google.com/accounts/ManageDomains) to access all other services from Google.

**Follow all the steps given below:**



	
  * Add your domain name.


[![](https://rtcamp.com/wp-content/uploads/2011/04/Blogger-to-wp-domain1-600x233.png)](https://rtcamp.com/wp-content/uploads/2011/04/Blogger-to-wp-domain1.png)



	
  * Click on manage domain name link.


[![](https://rtcamp.com/wp-content/uploads/2011/04/blogger-to-wp-domain2.png)](https://rtcamp.com/wp-content/uploads/2011/04/blogger-to-wp-domain2.png)



	
  * After that select domain registrar of your domain from drop down menu.


[![](https://rtcamp.com/wp-content/uploads/2011/04/blogger-to-wordpress-domain31-600x318.png)](https://rtcamp.com/wp-content/uploads/2011/04/blogger-to-wordpress-domain31.png)



	
  * I prefer to go with **Recommended method**.

	
  * Add the TXT data into your Domain registrar DNS settings. You can find all the details on the same page.

	
  * Then click on **Verify** button.

	
  * Add your domain URL and description.


[![](https://rtcamp.com/wp-content/uploads/2011/04/blogger-to-wordpress-domain4.png)](https://rtcamp.com/wp-content/uploads/2011/04/blogger-to-wordpress-domain4.png)



	
  * Click on **Save** button.

	
  * Now your domain will get active to access Google services.


[![](https://rtcamp.com/wp-content/uploads/2011/04/blogger-to-wordpress-domain5.png)](https://rtcamp.com/wp-content/uploads/2011/04/blogger-to-wordpress-domain5.png)



	
  * Save OAuth key and OAuth secrete for your future reference.

	
  * That's done. You can access Google services in your Domain.


Now you are ready to import content from blogger account to WordPress and follow all the steps of our [Blogger To WordPress Migration Tutorial](http://bloggertowp.org/migrate-from-blogger-to-wordpress-best-tutorial/). :)
