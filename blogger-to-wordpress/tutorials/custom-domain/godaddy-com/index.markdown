---
date: 2011-01-07 04:30:36+00:00
excerpt: Change blogger.com blog URL with your custom domain URL. User Guide to change
  the IP address for custom domain name.
title: Custom Domain Setup on Blogger with Godaddy.com
---

Custom domain setup in **Blogger.com** is used to create your own blog URL.      (for example: from _myblog.blogspot.com_ to_ myblog.com_).

When you purchase a domain from **Godaddy.com**, they assign an IP address (A record and CNAME record) for the domain. Hence, you need to change those records to point to your **Blogger.com** blog. This post can help you to change the A and CNAME records of your **Godaddy** account.


### Follow the steps given below:






	
    1. Login to your Godaddy account and click on the **My Account** tab.



[![](https://rtcamp.com/wp-content/uploads/2010/12/B2W-godaddy-2.png)](https://rtcamp.com/wp-content/uploads/2010/12/B2W-godaddy-2.png)




	
    1. Under **Domains**, you will see the list of your domain names. Click on **Advance Details** of your desired domain. You’ll be directed to the Domain Manager page.



[![](https://rtcamp.com/wp-content/uploads/2010/12/B2W-godaddy-1-600x217.png)](https://rtcamp.com/wp-content/uploads/2010/12/B2W-godaddy-1.png)




	
    1. At the bottom of the Domain Manager Page, you will see a section under the heading **DNS Manager**, where you can edit the DNS configuration of your domain by clicking the **Launch** link



[![](https://rtcamp.com/wp-content/uploads/2010/12/B2W-godaddy41-600x229.png)](https://rtcamp.com/wp-content/uploads/2010/12/B2W-godaddy41.png)




	
    1. Under the **A(Host)** Tab of the DNS manager, enter the 4 IP addresses as below, one-by-one, using the **Quick add** button, to change the A records.



216.239.32.21
216.239.34.21
216.239.36.21
216.239.38.21
[![](https://rtcamp.com/wp-content/uploads/2010/12/b2w-godaddy-31.jpg)](https://rtcamp.com/wp-content/uploads/2010/12/b2w-godaddy-31.jpg)




	
    1. Click on the **Quick Add** button in the box labeled **CNAME(alias)**. If you’ve already created a CNAME record for your blog’s address, click the pencil icon next to the existing CNAME record.

	
    2. After you are done adding records, click on **Save Changes** to save your edited data.

	
    3. For the Name, enter only the sub-domain of the address you want to use for your blog. For example, if you picked `www.myblog.com `as your address, enter `www` here.

	
    4. Enter `ghs.google.com` as the Host Name. Specify a TTL or use the default setting of 1 hour.



[![](https://rtcamp.com/wp-content/uploads/2010/12/b2w-godaddy-51.jpg)](https://rtcamp.com/wp-content/uploads/2010/12/b2w-godaddy-51.jpg)

This is how you can change the existing domain IP address that now points to your Blogger IP address. Wait for few hours for the changes to take effect in your IP records. After that you can say bye bye to your old **Blogger.com** blog URL by changing it with your custom domain name. :D
