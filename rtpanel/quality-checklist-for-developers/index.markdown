---
author: nitun.lanjewar
comments: false
date: 2011-12-21 11:38:40+00:00
excerpt: When it comes to quality of the site we need some predefined guidelines which
  ensures that the quality of developed website meets the client's expectation. Hence
  to overcome this we created our own rtChecklists, so that we can maintain quality
  of the site
layout: page
slug: quality-checklist-for-developers
title: Quality Checklist For Developers
---

When it comes to quality of the site we need some predefined guidelines which ensures that the quality of developed website meets the client's expectation. Hence to overcome this we created our own rtChecklists, so that we can maintain quality of the site. It will be very helpful for the developers to follow the rtChecklist while developing their site . This should reduce the testing time as well as bugs/code fixing time after testing. The wordpress theme can be tested in 9 section as follow:



	
  * Header Section

	
  * Sidebar Section

	
  * Content Section 

	
  * Comment Section 

	
  * Footer Section

	
  * Other Area 

	
  * Coding Standards

	
  * Theme Options

	
  * Common





### **Header Section**




#### 1. Title missing :




Every page of the site should have a site name/page name on its title bar.





#### 2. Favicon missing :




Every site must have favicon.





#### 3. Menubar




#### - level support :




As per the mockup, add menu bar depth in your code.





#### - hover effect / Current menu effect :




Every menu must have an hover effect as well as current menu styling as per mockup.





#### 4. Logo Should be Clickable :




When click on Logo, it should navigate to the homepage.




Back to list





### **Sidebar Section**




#### 1. Default widget styling :




All the default widgets must be styled properly.





#### 2. Unwanted sidebars in admin area :




De-register unwanted sidebars.





#### 3. Contact form - if present in widgets :




i) All the validation errors must be displayed in a red div. ii) Success message must be in green div. iii) Submit button must have hover effect.




Back to list





### **Content Section**




#### 1. Read more link :




Read more link must be present for every post and it should have hover effect according to mockup.





#### 2. Read more link - font case :




Check the font case of read more link.





#### 3. Post date format :




Check the format of post date, it must be as per approved mockup





#### 4. JS error :




Check for all the JS error occur in IE6, 7, 8 and 9.





#### 5. Post author name :




It should have a link which navigate to the authors archive page.





#### 6. Pagination - if present :




Styling must be as per mockup.





#### 7. Post content links :




On ‘xyz/layout-test/2' page links in post content must be display as a links.





#### 8. Post content header tags styling :




On ‘xyz/layout-test/3' page style all header tags properly.





#### 9. Styling of listing :




On ‘xyz/layout-test/3' page style ordered list / unordered list properly.





#### 10. Table head tag styling :




On 'xyz/layout-test/3' page style <th> tag properly.





#### 11. Image alignment :




On 'xyz/images-test' page left align, right align images must be styled properly.





#### 12. Margin for images :




On 'xyz/images-test/2' page keep some margins for the images. Text should not be too close to image.





#### 13. Image captions :




Image captions displays clearly.





#### 14. Post pagination :




On 'xyz/images-test/4' page post pagination must display below the post content.





#### 




#### 15. Post gallery :




On 'xyz/post-format-test-gallery' page gallery must be present.





#### 




#### 16. Wide image issue :




On 'xyz/post-format-test-image-linked' page wide image must be displayed within the content area. Sidebar should not display below the content.





#### 




#### 17. Post video :




On 'xyz/post-format-test-video' page Video must display within the post content.





#### 




#### 18. If Zoom level is 200% :




Still pages need to display properly





#### 




#### 19. Default image if any :




Image must be suitable with theme.





#### 




#### 20. Image Alt text :




Image Alt text should be meaningful on hover effect of image.




Back to list





### **Comment Section**




#### 1. Threaded comment styling :




On 'xyz/sample-post-tpn' page all the threaded comment style properly. It should not break while replying to the last comment.





#### 




#### 2. Comment date




i) Must have hyperlink. ii) Comment date format must be as per mockup





#### 




#### 3. Comment reply and submit button styling :




Both the buttons must have hover effect.





#### 




#### 4. Blockquote comment styling :




Blockquote comments should style properly.





#### 




#### 5. Comment p, UL, OL, Pre, CODE, P, Bold, Italic, Underline, Blockquite, cite, etc tags :




Keep some space between 2 comment p tags and also UL, OL, Pre, CODE, P, Bold, Italic, Underline, Blockquite, cite, etc





#### 




#### 6. Admin comment styling :




These comments must be styled differently.





#### 




#### 7. Different comments styling.




On 'xyz/comment-test' page i) Comment <h1> to <h6> tags style properly. ii) Comment th tag styling. iii) Comment unordered list must be bullets. iv) Ordered list must be numbering. v) All trackbacks display properly with hover effect.





#### 




##### 8. Comment Textarea must support all HTML formatting (like post-content area) :




UL, OL, Pre, CODE, P, Bold, Italic, Underline, Blockquite, cite, etc




Back to list





### **Footer Section**




#### 1. Footer menubar :




Must be of single level - maintain depth 1 in code.





#### 




#### 2. Copyright statement :




Must be as per the mockup.




Back to list





### **Other Area**




#### 1. Search result :




For 'xyz/?s=a' all the page / posts should be display properly.





#### 2. Not found :




For 'xyz/?s=adasasdas' page should styled properly.





#### 3. 404 page :




For 'xyz/asdasdasdsa' page should styled properly.





#### 4. Social networking links in site :




All the links must open in a new tab / window.





#### 5. Unwanted theme location dropdown :




From 'xyz/wp-admin/nav-menus.php' page remove unwanted theme location dropdowns.





#### 6. Screenshot.png :




Theme screenshot must be present on 'xyz/wp-admin/themes.php'.





#### 7. Need to test every site in Pingdom Tools (http://tools.pingdom.com):




It should not show any error, if it shows remove it.




Back to list





### **Coding Standards**




#### 1. Each function :




1) Every function must commented properly. 2) Code must properly indented.




Back to list





### **Theme Options**




#### 1. Strip slashes must be done :




Quotes must display properly on frontend.





#### 2. Theme options :




This menu must come under Appearance.





#### 3. Name of the theme option :




It must be theme name for eg. 'fbknol theme options'.





#### 4. Keep proper width of textboxes if any :




Textbox width must be appropriate with its value.





#### 




#### 5. Keep proper height and width of textarea :




Keep proper height and width of textarea.




Back to list





### **Common**




#### 1. All buttons should be interactive.




#### 2. Check the whole site after doing wp-debug true :




The site should not show any error message.





#### 3. Deactivate all the plugins and then test the site :




Site should not break. Default pagination should be provided.




Back to list
