---
author: adityakane
comments: false
date: 2010-09-18 05:23:35+00:00
excerpt: Permalinks and slugs play a very important role in any blog, specially in
  WordPress because it provides flexibility to change permalinks and slugs. These
  are used for URL of posts, pages, tags, categories etc.
layout: page
slug: permalinks-and-slugs
title: Understanding Permalinks and Slugs in WordPress
---

## Introduction


**Permalinks** and **slugs** play a very important role in any blog, specially in WordPress because it provides flexibility to change permalinks and slugs. These are used for URL of posts, pages, tags, categories etc.


## How Permalinks work?


In **Blogger.com** you might be aware of **permalinks** structure but you can not change them or customize.

But **WordPress** provides that flexibility to modify according to our requirements. **Permalinks** is a pattern that we select for our blog posts and  content's **URL**. It is added at the end of blog **domain** **name**, where **WordPress** is  installed.

For example "**_?p=id-number_**" is a **permalink** pattern and "**_yourdomain.com_**" is domain name. **WordPress** by default provides **permalink** in the following format "**_/?p=id-number_**".

**Note :** id-numbers => id of posts and pages.

The end result is "**_http://yourdomain.com/?p=id-numbers_**"

You can also change this default structure with some other structure, like "/**%postname**%", "/%**year**%**month**%**postname%**", etc. You can find all the other structures of **permalinks** in **Settings** -> **Permalinks** option.

[![](https://rtcamp.com/wp-content/uploads/2010/08/permalinks.png)](https://rtcamp.com/wp-content/uploads/2010/08/permalinks.png)


## How are Slugs used in WordPress?


**Slugs** are used in **permalinks** structure. In the above example we are not using any slug. Confused? Let me explain. It is a simple id of **posts** and **pages**. **WordPress **by default creates slug for **Posts**, **Pages**, **Categories** and **Tags **as long as we have not created a specific Slug. Slugs are always created in small letters with "-" sign in between the words. ** **

**Example**: your post name is -> "**_My First post In WordPress_**"  the slug of that post is "my-first-post-in-wordpress". :-)

Then this slug is used in permalink if you are using permalinks structure "/%**postname**%"  then your post URL will be "**_http://yourdomain.com/my-first-post-in-wordpress_**" . This permalink pattern will be used for all the posts and pages.


### How to change post slug?





	
  * Click on posts menu OR when we write new post at that time also we can edit slug.


[![](https://rtcamp.com/wp-content/uploads/2010/08/post-edit.png)](https://rtcamp.com/wp-content/uploads/2010/08/post-edit.png)



	
  * Below is the text box where we will write **post title**, and there is an **Edit** button.


[![](https://rtcamp.com/wp-content/uploads/2010/08/edit-slug.png)](https://rtcamp.com/wp-content/uploads/2010/08/edit-slug.png)



	
  * Click on that you will find the complete slug of post.

	
  * Change that slug into what you want and then Click on **OK** button.

	
  * You can also get the short URL by clicking on **Get Shortlink** button. (_see above image_).

	
  * Pop up window will open, add new short URL there.




### How to Change Slug for Categories and Tags


We can also change slugs for **Categories** and **Tags. **WordPress by default provides slugs if we have not created it while adding **Category** or **Tag**. Method to change slug for Categories and Tags is quite similar.



	
  * Click on **Categories** menu.


[![](https://rtcamp.com/wp-content/uploads/2010/08/edit-category.png)](https://rtcamp.com/wp-content/uploads/2010/08/edit-category.png)



	
  * You will get a list of **Categories** that you have created for the blog.

	
  * As mouse hovers on the Category we can click on Edit or Quick Edit.


[![](https://rtcamp.com/wp-content/uploads/2010/08/category-slug.png)](https://rtcamp.com/wp-content/uploads/2010/08/category-slug.png)



	
  * Change the slug name that you want.


[![](https://rtcamp.com/wp-content/uploads/2010/08/change-slug.png)](https://rtcamp.com/wp-content/uploads/2010/08/change-slug.png)



	
  * Similarly we edit slug of **Tags**. Follow all the above steps but instead of clicking on **Categories** menu Click on **Post Tags**. :-)




## Bonus Tip


Most of the time post name is too long. Here we can also change slug  of post to make it short and hence make it useful for search engine to look up.

**Example:** Lets say the post title is "How to change the permalink structure of  WordPress blog that will be useful for Search Engine". This is a long  post name, we can change its slug to - "change-permalink-structure-wordpress-blog-useful-search-engine".


## Summary


**WordPress** provides such a great feature to edit slugs for post, pages, category and tags. By that you can make post **URL** short. **Permalinks** structure is also helpful to readers to remember post. :-)
