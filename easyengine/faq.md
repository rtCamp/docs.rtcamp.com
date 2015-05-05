
##### Q 1. How will EasyEngine make a difference to my site?

EasyEngine makes it greatly easy to manage nginx, a fast web-server software that consumes little memory when handling increasing volumes of concurrent users.

With EasyEngine, you will no longer need to recall complex commands or depend on system administrators.

##### Q 2. How is EasyEngine different from Apache?

EasyEngine, with its array of commands, is much simpler to use than Apache, for your web-server needs.

As an interface for nginx, it is known to perform better and faster than Apache, particularly when the number of concurrent site visitors is on the rise.

##### Q 3. Does EasyEngine work with shared hosting?

No. Shared hosting services do not allow root or sudo access, which is required to install EasyEngine.

##### Q 4. Is the entire install process run by EasyEngine logged? If yes, what is the location of the log file?

Yes. The install log file for sites installed using EasyEngine can be found at this location.

	/var/log/ee/install.log


##### Q 5. Where is EasyEngine's error log located?

EasyEngine's error log can be found at this location:

	/var/log/ee/ee.log


##### Q 8. Which version of PHP does EasyEngine install?

EasyEngine always installs the latest version of PHP.

##### Q 9. Which operating systems are supported by EasyEngine?

EasyEngine v3 supports all Ubuntu Distro ( till its end of Life) and Debian 7.

Centros or any other Linux Distro is not currently supported. They are also not on the product roadmap in the near future.

##### Q 10. Can I get to know the various subcommands for every command in EasyEngine?

Yes. Simply press the tab key on your keyboard after typing the command.
For example, if you want to know the subcommands related to 'site', type this:

	ee site

and then press the tab key on your keyboard.

##### Q 11. What should be done if the tab key does not suggest available subcommands?

Run this command to fix this:

	source /etc/bash_completion.d/ee_auto.rc


##### Q 12. How to change mysql host from localhost to another host?

Open the following file in your favorite text editor and set 'mysqlhost=rtcamp.com'

	vim /etc/ee/ee.conf


##### Q 13. How to set a custom database name for website?

Open the following file in your favorite text editor

	vim /etc/ee/ee.conf

and set

	db-name = true

in mysql section.


##### Q 14. How to create a custom database user for website?

Open the following file in your favorite text editor and set 'db-user = true'

	vim /etc/ee/ee.conf


##### Q 15. How to change the wordpress database table prefix?

Open the  file vim /etc/ee/ee.conf in your favorite text editor and set 'prefix = true' in wordpress section. Now after this, when you create any wordpress site it is going to ask you database table prefix.


##### Q 16. How to change wordpress admin username?

Open the following file in your favorite text editor and set 'user = rtcamp'

	vim /etc/ee/ee.conf

This will be the username for wordpress sites you create in future.


##### Q 17. How to set custom WordPress admin password rather than random?

Open the following file in your favorite text editor and set 'password = mypass'

	vim /etc/ee/ee.conf


##### Q 18. How to change wordpress email?

Open the following file in your favorite text and editor set 'email = yourmail@example.com'

	vim /etc/ee/ee.conf


##### Q 19. What is MySQL username and password?

MySQL username and password is saved in ~/.my.cnf file while installing mysql. EasyEngine reads username and password from this file.


##### Q 20. How to access EasyEngine (ee) admin tools?

To access EasyEngine admin tools  use port 22222. as example to access admin tools for mysite.com use mysite.com:22222. Authentication prompt will appear furthur. Enter HTTP credentials and use admin tools.
