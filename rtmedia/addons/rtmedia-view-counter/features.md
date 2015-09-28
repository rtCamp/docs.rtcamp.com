## rtMedia View Counter

Enabling this addon allows you to display the number of times a media item has been viewed.

### Enable View Counter
To use this feature, the site admin first needs to enable the **Enable view count** feature from rtMedia admin settings.

[![viewcount-setting](https://cloud.githubusercontent.com/assets/7771963/7955281/a6fd7952-09f4-11e5-8486-2d07cfbcbbd1.png)](https://cloud.githubusercontent.com/assets/7771963/7955281/a6fd7952-09f4-11e5-8486-2d07cfbcbbd1.png)

### Where it will be displayed
Users will be able to see view count of media, as shown:

[![viewcount-display](https://cloud.githubusercontent.com/assets/7771963/7955366/73519344-09f5-11e5-8568-fd501e357af7.png)](https://cloud.githubusercontent.com/assets/7771963/7955366/73519344-09f5-11e5-8568-fd501e357af7.png)

### How it works

#####Registered / Logged-in users

We are not managing counts based on IP/cookeis.

Example of how the view count will be managed:

- let's say number of registered user/member on site : 5

- Now, User 1 uploads media. [ Current View Count : 1 ]
- The same media viewed by other 4 registered users once. [ Current View Count : 5 ]

We manage registered users by their user-ids. So, count will increment by 1 for different users on viewing the media.

- User 1 again visited the same media. [ Current View Count : 5 ]

Note : It will be incremented by 1 only regardless how many times same user views the photo. We believe that views should be unique otherwise any one can simply write a script to increase any media's views.

#####Non-logged-in users

- A guest user1 views the media uploaded by User 1. [ Current View Count : 6 ]
- A guest user2 views the media uploaded by User 1. [ Current View Count : 6 ]

As we are not using any mechanism for identifying non-logged in users, we are only increasing extra 1 count for all of them.
