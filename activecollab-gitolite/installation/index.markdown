---
date: 2013-04-11 10:10:47+00:00
slug: installation
title: Installation
---


	
  1. After successful purchase, you will get an email with link to download `ac_gitolite.zip` file.

	
  2. Unzip it and upload`ac_gitolite` folder to your activeCollab's `custom/modules` folder. _[make sure the folder name must be "ac_gitolite"]_

	
  3. Then go to your activeCollab **Administration >> Modules** screen. You will see **AC Gitolite** module there. Just click on **Install **button.![](https://rtcamp.com/files/2012/10/Install-Modules-activeCollab-1.png)

	
  4. Then go back to the **Administration **screen. You will see **Gitolite Settings** icon in **"Projects"** option row. Click on it.![](https://rtcamp.com/files/2012/10/Gitolite-Settings-1-620x239.png)

	
  5. On the next screen, click on **"Start Setup" **button. ![](https://rtcamp.com/wp-content/uploads/2012/10/ac-new1.1.png)

	
  6. You can select an option as per your need (if you have already installed or new installation) of Gitolite server. Then simply enter **"Gitolite User"** and **"Gitolite Server Address"**.
[![support-for-remote-gitolite-server-1](https://rtcamp.com/wp-content/uploads/2012/10/gitolite-setup.png)](https://rtcamp.com/wp-content/uploads/2012/10/gitolite-setup.png)
[![support-for-remote-gitolite-server-1](https://rtcamp.com/wp-content/uploads/2012/10/gitolite-setup-1.png)](https://rtcamp.com/wp-content/uploads/2012/10/gitolite-setup-1.png)
[![ac-new4.1](https://rtcamp.com/wp-content/uploads/2012/10/ac-new4.1.png)](https://rtcamp.com/wp-content/uploads/2012/10/ac-new4.1.png)

	
  7. After that, add the port number (you may run it on 22 by default or on which port you want to run it).

	
  8. Follow the instruction display on below screen at the time of new installation.
[![run this script](https://rtcamp.com/wp-content/uploads/2012/10/script-run.png)](https://rtcamp.com/wp-content/uploads/2012/10/script-run.png)

	
  9. Final step, click on **Save Settings** button.
[![ac-new3.1](https://rtcamp.com/wp-content/uploads/2012/10/ac-new3.1.png)](https://rtcamp.com/wp-content/uploads/2012/10/ac-new3.1.png)


Congratulations. Your Gitolite setup is now complete. :-)


## Post-receive hook setup for instant update




If you have setup Gitolite using `install.sh` (via this [script](http://rt.cx/gitlab)) bundled with this module, you can skip this step because the script automatically configures post-receive hook for you.


By default, activeCollab updates source repositories by cron-jobs. Depending on your cron-jobs setting, newly pushed commits may get delayed in activeCollab interface. By setting up a common post-receive hook you can force activeCollab to fetch new commits as soon as your team push codes to Gitolite server.

To create a post-receive hooks file please follow these simple steps:



	
  1. Go to Administration -> tools -> Scheduled tasks

	
  2. Now copy the command to execute task frequently. This command would end in ‘/Frequently.php’.

	
  3. Now go to Gitolite server terminal and execute the following commands:

    
    sudo su - username
    cd ~/.gitolite/hooks/common/
    vim post-receive




	
  4. Now paste the above ‘Frequently.php’ code here and save it. Now quit `vim`

	
  5. Next execute these commands:

    
    chmod a+x ~/.gitolite/hooks/common/post-receive
    ~/bin/gitolite setup --hooks-only





