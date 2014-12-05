---
date: 2014-03-10 07:31:02+00:00
title: Handling gruntfile.js in rtPanel
---

The Gruntfile is a JavaScript file that defines your projects tasks and configuration. When you run `grunt` from the terminal, Grunt will check your Gruntfile and executes any tasks you've defined in gruntfile.js.

In rtPanel we used grunt tasks like fontello, imagemin, compass, uglify, watch and wordpressdeploy.

First of all load all grunt tasks matching the `grunt-*` pattern, we have added following the code in the header section of gruntfile.js to load all grunt tasks.

    
    require('load-grunt-tasks')(grunt);





#### 1. Fontello Task:


Fontello task download font icons from [fontello.com](http://fontello.com/). You will need to specify the path of config.json file and css/fonts directory. By running the grunt command it will download required fonts and css as per config.json configuration.

    
    fontello: {
        dist: {
            options: {
                config: 'assets/fontello/config.json',
                fonts: 'assets/fontello/font',
                styles: 'assets/fontello/css',
                scss: true,
                force: true
            }
        }
    }




#### 2. Imagemin Task:


Imagemin task compress the images size present in img/ directory to save image loading time,

    
    imagemin: {
        dynamic: {
            options: {
                optimizationLevel: 7,
                progressive: true
            },
            files: [{
                expand: true,
                cwd: 'img/',
                src: ['**/*.{png,jpg,gif}'],
                dest: 'img/'
            }]
        }
    }




#### 3. Compass Task:


Compile Sass to CSS using Compass. Compass task helps you build stylesheets faster with a huge library of Sass mixins and functions.

    
    compass: {
        frontend: {
            options: {
                config: 'config.rb',
                force: true
            }
        },
    
        // Admin Panel CSS
        backend: {
            options: {
                sassDir: 'admin/css/',
                cssDir: 'admin/css/'
            }
        }
    }




#### 4. Uglify Task:


Uglify task concat and minify JS files to a single file. You will need to specify relative path of custom js files in build > src.

    
    uglify: {
        options: {
            banner: '/*! n * rtPanel JavaScript Library n * @package rtPanel n */'
        },
        build: {
            src: [
                'assets/foundation/bower_components/foundation/js/vendor/modernizr.js',
                'assets/foundation/bower_components/foundation/js/foundation.min.js',
                'js/jquery.sidr.min.js',
                'js/rtp-app.js'
            ],
            dest: 'js/rtp-package-min.js'
        }
    }




#### 5. Watch Task:


This task always watch the changes in file patterns mentioned in files and run the grunt task mentioned in tasks.

    
    watch: {
        compass: {
            files: ['**/*.{scss,sass}'],
            tasks: ['compass']
        },
    
        uglify: {
            files: '<%= uglify.build.src %>',
            tasks: ['uglify']
        }
    }




#### 6. Wordpressdeploy Task:


We used this task to deploy WordPress site to staging or client server. This task also search for local domain name string and replace with staging or final server domain name. For more details you can check [this tutorial](https://rtcamp.com/rtpanel/docs/developer/automation-site-deployment/) for WordPress deploy.

    
    wordpressdeploy: {
        options: {
            backup_dir: "../../backups/",
            rsync_args: ['-avz'],
            exclusions: ['Gruntfile.js', '.bower.json', '.editorconfig', '.travis.yml', '.gitmodules', '.gitattributes', '.git/', '.svn/', 'tmp/*', 'wp-config.php', 'composer.json', 'composer.lock', '.gitignore', 'package.json', 'node_modules', '.sass-cache', 'npm-debug.log', '.scss-cache']
        },
    
        local: {
            "title": "local",
            "database": "database_name",
            "user": "database_username",
            "pass": "database_password",
            "host": "database_host",
            "url": "http://local_url",
            "path": "/local_path"
        },
    
        staging: {
            "title": "staging",
            "database": "database_name",
            "user": "database_username",
            "pass": "database_password",
            "host": "database_host",
            "url": "http://staging_url",
            "path": "/staging_path",
            "ssh_host": "user@staging_host"
        },
    
        final: {
            "title": "final",
            "database": "database_name",
            "user": "database_username",
            "pass": "database_password",
            "host": "database_host",
            "url": "http://final_url",
            "path": "/staging_path",
            "ssh_host": "user@staging_host"
        }
    }




#### Conclusion


Hopefully, it will make it easier for you to make maintainable Grunt configurations in rtPanel.


#### Useful links:





	
  * [fontello](https://npmjs.org/package/grunt-fontello)

	
  * [imagemin](https://npmjs.org/package/grunt-contrib-imagemin)

	
  * [compass](https://npmjs.org/package/grunt-contrib-compass)

	
  * [uglify](https://npmjs.org/package/grunt-contrib-uglify)

	
  * [watch](https://npmjs.org/package/grunt-contrib-watch)

	
  * [wordpress-deploy](https://npmjs.org/package/grunt-wordpress-deploy)


