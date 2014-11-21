---
author: rahul.bansal
comments: false
date: 2013-04-11 09:37:50+00:00
layout: page
slug: faq
permalink: activecollab-gitolite/faq/
title: FAQ
wordpress_id: 36849
---

Below are answer to some frequently asked questions.

If you fail to find answer there, feel free to use this [dedicated support forum](https://rtcamp.com/support/forum/activecollab/).


### List of Questions:






  1. Is this module run on shared hosting?


  2. Where do I find the PHPUSER?


  3. What is the admin path?


  4. What is a Gitolite Linux User?


  5. What is a Gitolite Server Address?


  6. Can I install Gitolite and Activecollab on two different servers?


  7. My SSH Key doesn’t work. What should I do?


  8. Will you provide support for Windows Server?


  9. How long will I be eligible for upgrades?


  10. Where do I report a bug/request a feature?


  11. What if I need help in setting up Gitolite server and Gitolite module?


  12. Why do I get an error saying "key already exists"?


  13. Why does my installation say "Unable to connect to server"?




###




#### Q. Is this module run on shared hosting?


Unfortunately No.


#### Q. Where do I find the PHPUSER?


The php username can be found using phpinfo().


#### Q. What is the admin path?


The server directory path where gitolite-admin is cloned.


#### Q. What is a Gitolite Linux User?


It is a system user that Gitolite server requires, to create repos and perform other functions.


#### Q. What is a Gitolite Server Address?


The address of the server where Gitolite will be installed. It can be in the form of _example.com_ or an IP address like _10.0.0.1_


#### Q. Can I install Gitolite and Activecollab on two different servers?


Yes, you can! We have provided an option to install Gitolite on a different server.


#### Q. My SSH Key doesn’t work. What should I do?


Please verify that the SSH key is correct. Also make sure that you have updated the system with this ssh key.


#### Q. Why do I get an error saying "key already exists"?


It means that the same key has been already added for your profile or, another user's profile. Generate a new key and use that.


#### Q. Will you provide support for Windows servers?


We don't provide support for Windows servers. However, if you still want to use it, some tutorials exist in the wild. However, we don't recommend or guarantee that it'll work.


#### Q. How long will I be eligible for upgrades?


We provide free upgrades for a period of one year from the date of your purchase.


#### Q. Where do I report a bug/request a feature?


We have a dedicated [support forum](https://rtcamp.com/support/forum/activecollab/).


#### Q. What if I need help in setting up Gitolite server and Gitolite module?


You can purchase our [ActiveCollab Gitolite Setup Service](https://rtcamp.com/store/activecollab-gitolite-installation-service/). After this, our technical team will handle everything for you.


#### Q. Why does my installation say "Unable to connect to server"?


First, confirm that you have entered the correct Gitolite Linux user, Gitolite Server Domain Name/IP address and port number. Also, confirm that the PHPUSER has the right permissions to access Gitolite server via SSH. If not, add the public key of the PHPUSER, to the Gitolite server. After this, if you still face issues, use the [support forum](https://rtcamp.com/support/forum/activecollab/).
