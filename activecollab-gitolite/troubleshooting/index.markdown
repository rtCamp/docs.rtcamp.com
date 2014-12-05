---
date: 2013-04-11 10:24:13+00:00
title: Troubleshooting
---

## “Test Connection” fails at the time of activeCollab-Gitolite Module Setup.




### **This could be permission issue**





	
  1. activeCollab-Gitolite module must be able to clone gitolite-admin repo locally. Please check if PHP user can write to `/work/git/` directory under your activeCollab setup.

	
  2. Check if there is any `gitolite` folder created in `/work/git`.




### **This could be git-setup issue**


If you haven’t installed gitolite by using `gitolite.sh` then please verify if you can connect to git server properly from PHP user.

For example, login with PHP-user by using following command to your terminal. Or use sudo command like sudo su - PHPUSER where PHPUSER will be a linux-user like nobody, www-data.

Next, check PHP user’s privilege by executing following command: `ssh -T git@ac.example.com | grep gitolite-admin`. _(Please replace`git` with your gitolite-username and `ac.example.com` with your gitolite-domain.)_

Your output should contain `R W gitolite-admin`.


### gitolite.sh script fails





	
  1. This script needs to sudo privilege to run. Please try running the script with sudo.

	
  2. This may be due to a different Linux distro. We currently support only Ubuntu distro. We will soon release support for other ditros

	
  3. Please check your git username. Chances are git user already exists.




## Repository is not updating automatically





	
  1. Make sure you do not have an empty repository. Make a new initial commit in the empty repository or make an empty commit by: `git commit --allow-empty`

	
  2. Alternatively, Go to gitolite-admin settings > Delete all empty repositories listed.




## Other Issues


Please use our dedicated [support forum](https://rtcamp.com/support/forum/activecollab/). You may find answer to that question already there. If you don’t, feel free to start a new topic and we will reply withlin 24-hours (most likely)
