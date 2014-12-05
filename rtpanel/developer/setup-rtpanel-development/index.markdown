---
date: 2014-01-27 14:03:39+00:00
slug: setup-rtpanel-development
title: Setup rtPanel for Development
---

Latest version of rtPanel is based on [SASS](http://sass-lang.com/), [Compass](http://compass-style.org/), [Grunt](http://gruntjs.com/), [Bower](http://bower.io/) and [Foundation](http://foundation.zurb.com/). So you will need to install all its dependencies before starting with the development.

Follow the steps below -

**1. Install rubygem:**
SASS/SCSS and Compass are depends on rubygem, so first install rubygem by using following command,

    
    [sudo] apt-get install rubygems



**2. Install SASS/SCSS:**
Install SASS/SCSS by using following command,

    
    [sudo] gem install sass



**3. Install Compass:**
Install Compass by using following command,

    
    [sudo] gem install compass



**4. Install Node.js:**
Grunt and Bower depends on [Node](http://nodejs.org/) and [npm](https://npmjs.org/).
To install Node.js, refer [this](https://rtcamp.com/tutorials/nodejs/node-js-npm-install-ubuntu/) article.

**5. Install Grunt:**
It is installed globally using npm. Run the following command to install Grunt,

    
    [sudo] npm install -g grunt-cli



**6. Install Bower:**
This is also installed globally using npm. Run the following command to install Bower,

    
    [sudo] npm install -g bower


After setting up the above packages, download the updated version of [rtPanel](http://wordpress.org/themes/rtpanel) from WordPress repository.

**Important:** The process mentioned above, will be required to run just once.

**7. Setup New Project:**
For new project or existing project, follow these steps:

Go to your project folder to install the dependencies in the local node_modules folder,

    
    [sudo] npm install



OR

Install manually (run the following commands one by one)

    
    [sudo] npm install grunt --save-dev
    [sudo] npm install grunt-contrib-compass --save-dev
    [sudo] npm install grunt-contrib-imagemin --save-dev
    [sudo] npm install grunt-contrib-uglify --save-dev
    [sudo] npm install grunt-contrib-watch --save-dev
    [sudo] npm install grunt-fontello --save-dev
    [sudo] npm install load-grunt-tasks --save-dev
    [sudo] npm install grunt-wordpress-deploy --save-dev


Make sure that you install all the modules listed in package.json file. Also, by using `--save-dev` you can update module version in package.json.

Now run "**grunt**" command in your project folder to run configured task in Gruntfile.js. While development, make sure the "grunt" command is running in the background (terminal) to process tasks.

By running grunt command, everything will be automated excluding the below cases -



	
  * Make changes to the config.json file in fontello directory.

	
  * Update images in /img/ folder.


For all the above cases, you will need to run the grunt command once again.
