---
date: 2011-06-15 09:49:38+00:00
excerpt: Follow the following steps to setup your Blogger domain name through your
  Bluehost account.
title: How to Setup Custom Domain on Blogger with BlueHost
---

Follow the following steps to setup your Blogger domain name through your Bluehost account.




	
    1. Log in to your account at [**BlueHost**](http://rt.cx/bluehost/).

	
    2. At the control panel, click on the **DNS Zone Editor** which can be found under the **Domains** section.



[![](https://rtcamp.com/wp-content/uploads/2011/06/Blogger-to-wordpress-Bluehost-cPanel1-600x222.png)](https://rtcamp.com/wp-content/uploads/2011/06/Blogger-to-wordpress-Bluehost-cPanel1.png)




	
    1. Select the appropriate domain to which you want to add A records and CNAME records.
[![](https://rtcamp.com/wp-content/uploads/2011/06/Blogger-To-WordPress-bluehost.png)](https://rtcamp.com/wp-content/uploads/2011/06/Blogger-To-WordPress-bluehost.png)

	
    2. Now add appropriate A Records in the fields provided, as shown below. You need to add the following 4 IP addresses for the A Records to configure your Blogger Domain one-by-one :



216.239.32.21
216.239.34.21
216.239.36.21
216.239.38.21
[![](https://rtcamp.com/wp-content/uploads/2011/06/Blogger-to-wordpress-Arecord1.png)](https://rtcamp.com/wp-content/uploads/2011/06/Blogger-to-wordpress-Arecord1.png)





	
  1. To add the CNAME records, select CNAME from the drop down menu and enter the details of your domain. In the **Name** field, add the name of your domain with `www`. In the **CNAME** field, write `ghs.google.com `for linking your domain with Blogger. Add an appropriate Time-To-Live in the TTL field.
[![](https://rtcamp.com/wp-content/uploads/2011/06/blogger-tow-ordpress-cname.png)](https://rtcamp.com/wp-content/uploads/2011/06/blogger-tow-ordpress-cname.png)

	
  2. Click on **Add Record** to save the new configuration.


Note that it may take some time for the new A records and CNAME records to take effect. Once the changes have taken effect, you can proceed with setting up your blog on Blogger.


### Link : [Signup with BlueHost](http://rt.cx/bluehost/)
