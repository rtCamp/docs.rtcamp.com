---
date: 2011-01-11 04:30:02+00:00
excerpt: User guide to setup your Blogger domain name through your Dreamhost account.
layout: page
slug: dreamhost
title: Custom Domain Setup on Blogger with Dreamhost
---

Custom domain setup in **Blogger.com** is used to create your own blog URL. (for example: from_myblog.blogspot.com_ to_ myblog.com_).

When you purchase a domain from Dreamhost.com, they assign an IP address (A record and CNAME record) for the domain. Hence, you need to change those records to point to your Blogger.com blog. This post can help you to change the A and CNAME records of your Dreamhost account.


### Follow these steps to setup your Blogger domain with your DreamHost account.





	
  1. Log in to your account at the [Dreamhost Account Login](http://rt.cx/dreamhost).

	
  2. After logging in, click on **Manage Domains** as seen below.

[![](https://rtcamp.com/wp-content/uploads/2010/12/b2w-dreamhost12.jpg)](https://rtcamp.com/wp-content/uploads/2010/12/b2w-dreamhost12.jpg)
	
  3. A list of your domains will be displayed, select the **DNS** option to edit the DNS configuration as shown below.

[![](https://rtcamp.com/wp-content/uploads/2010/12/b2w-dreamhost21.jpg)](https://rtcamp.com/wp-content/uploads/2010/12/b2w-dreamhost21.jpg)
	
  4. To change the A Records, Select '**A' **record from the drop down menu and enter the 4 IP addresses one-by-one in the **Value** field as shown in the screenshot below.
216.239.32.21
216.239.34.21
216.239.36.21
216.239.38.21

	
  5. Leave the **Name **field blank if you want to add the A record for the root-domain and not a sub-domain.(For example: leave blank for _myblog.com_ and enter '_home_' for _home.myblog.com_)

[![](https://rtcamp.com/wp-content/uploads/2010/12/b2w-dreamhost-31-600x243.jpg)](https://rtcamp.com/wp-content/uploads/2010/12/b2w-dreamhost-31.jpg)
	
  6. Now from the drop down menu select **CNAME **to edit the CNAME records. Write `ghs.google.com` in the value field as shown below.

[![](https://rtcamp.com/wp-content/uploads/2010/12/b2w-dreamhost-41-600x242.jpg)](https://rtcamp.com/wp-content/uploads/2010/12/b2w-dreamhost-41.jpg)
	
  7. Now go to your Blogger account and add your new domain name of Dreamhost. Note that it will take a few hours for the new changes to take effect.


You have now successfully setup your custom domain on blogger with Dreamhost :)


### Link : [Signup with Dreamhost](http://rt.cx/dreamhost)
