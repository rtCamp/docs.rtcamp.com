---
author: omkarjoglekar
comments: false
date: 2011-01-13 04:30:41+00:00
excerpt: User Guide to setup your Blogger domain name with your Hostgator account.
layout: page
slug: hostgator-2
title: How to Setup Custom Domain on Blogger with Hostgator
---

Follow the following steps to setup your Blogger domain name through your Hostgator account.



	
  1. Log in to your account at [**Hostgator**](http://rt.cx/hostgator). (URL for Cpanel like http://example.com/cpanel, replace example.com with actual domain name)

	
  2. At the control panel, click on the **Advanced DNS zone editor** which can be found under the **Domains** section.

	
  3. **Note:** If you canot see the **Advanced DNS zone editor **option**, **try changing the Hostgator theme to enable the same. The theme can be changed by clicking on **Change Style** under Preferences.

[![](https://rtcamp.com/wp-content/uploads/2010/12/b2w-hostgator-5.jpg)](https://rtcamp.com/wp-content/uploads/2010/12/b2w-hostgator-5.jpg)
[![](https://rtcamp.com/wp-content/uploads/2010/12/b2w-hostgator-1.jpg)](https://rtcamp.com/wp-content/uploads/2010/12/b2w-hostgator-1.jpg)
	
  4. Select the appropriate domain to which you want to add A records and CNAME records.
[![](https://rtcamp.com/wp-content/uploads/2010/12/b2w-hostgator-2-600x153.jpg)](https://rtcamp.com/wp-content/uploads/2010/12/b2w-hostgator-2.jpg)

	
  5. Now add appropriate A Records in the fields provided, as shown below. You need to add the following 4 IP addresses for the A Records to configure your Blogger Domain one-by-one :

216.239.32.21
216.239.34.21
216.239.36.21
216.239.38.21
[![](https://rtcamp.com/wp-content/uploads/2010/12/b2w-hostgator-31.jpg)](https://rtcamp.com/wp-content/uploads/2010/12/b2w-hostgator-31.jpg)

[](https://rtcamp.com/wp-content/uploads/2010/12/b2w-hostgator-31.jpg)
	
  6. To add the CNAME records, select CNAME from the drop down menu and enter the details of your domain. In the **Name** field, add the name of your domain with `www`. In the **CNAME** field, write `ghs.google.com `for linking your domain with Blogger. Add an appropriate Time-To-Live in the TTL field.
[![](https://rtcamp.com/wp-content/uploads/2010/12/b2w-hostgator-4.jpg)](https://rtcamp.com/wp-content/uploads/2010/12/b2w-hostgator-4.jpg)

	
  7. Click on **Add Record** to save the new configuration.


Note that it may take some time for the new A records and CNAME records to take effect. Once the changes have taken effect, you can proceed with setting up your blog on Blogger.


### Link : [Signup with Hostgator](http://rt.cx/hostgator)
