---
date: 2011-01-17 04:30:49+00:00
slug: media-temple
title: Domain Setup On Blogger With Media Temple
---

When you purchase a domain from **Media Temple** you will get personal identity like IP address (A record) for that domain. Hence,  you need to change those records to point it with **Blogger.com** blog. This post help you to change the A and CNAME records of your **Media Temple** domain.


### Follow the steps below :





	
  1. Login to **Media Temple** account : [Login](http://mediatemple.net/)

	
  2. Click on the domain, which you want to setup in **Blogger.com** blog.

[![](https://rtcamp.com/wp-content/uploads/2011/01/b2w-mediatemple-1.jpg)](https://rtcamp.com/wp-content/uploads/2011/01/b2w-mediatemple-1.jpg)
	
  3. Click on **Edit DNS Zone File**, it will show you list of "A " , "CNAME" and all other records that assign by **Media Temple .**

[![](https://rtcamp.com/wp-content/uploads/2011/01/b2w-mediatemple-4.jpg)](https://rtcamp.com/wp-content/uploads/2011/01/b2w-mediatemple-4.jpg)
	
  4. Remove all the existing "A" and CNAME records and add following 4 IP addresses that given by Google.
216.239.32.21
216.239.34.21
216.239.36.21
216.239.38.21

	
  5. After that add CNAME record for WWW with `ghs.google.com`

[![](https://rtcamp.com/wp-content/uploads/2011/01/b2w-mediatemple-2-600x232.jpg)](https://rtcamp.com/wp-content/uploads/2011/01/b2w-mediatemple-2.jpg)
	
  6. Click on the **Save** button, now Custom Domain of **Media Temple** is pointing to Google.com IP addresses.

[![](https://rtcamp.com/wp-content/uploads/2011/01/b2w-mediatemple-3.jpg)](https://rtcamp.com/wp-content/uploads/2011/01/b2w-mediatemple-3.jpg)
	
  7. Final step is to need setup domain with your Blogger.com blog. (wait for few hours to update these IP addresses)


Cross check whether your domain is pointing to new IP address or not. Check it by using [http://just-ping.com](http://just-ping.com).

After successful update of IP addresses you can change Blogger.com blog which point to this domain. Read the [1st post](http://bloggertowp.org/how-to-setup-a-custom-domain-with-blogger/) in this series about the Custom Domain setup on Blogger for more help.
