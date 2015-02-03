---
title: "Secure"
---

# Changing HTTP authentication credentials

HTTP authentication credentials can be changed with this command.

	ee secure --auth [Optional user name] [Optional password]

This will prompt you to enter username and password, if you don’t give any user name and password at command line

	Provide HTTP authentication user name [bob]: user
	Provide HTTP authentication password [aeUtefDscwG]:
	Executing service nginx reload, please wait...

# Changing Admin Port

EasyEngine (ee) provides access to its web utilities through registered port 22222, it can be customized using

	ee secure --port [Optional port no]

This command will ask you to enter the port you want to setup for accessing web utilities of EasyEngine (ee), if you don't provid optional port at command line .

	EasyEngine admin port [22222]: 55555
	Executing service nginx reload, please wait...

# Whitelisting IP’s

EasyEngine (ee) can whitelist IP’s, which can be done using

	ee secure --ip [Optional comma separated IPs]

If you don't provide IP address list at command line, Then EasyEngine will ask you IPs. The list of IP addresses, should be provided in comma seperated format for whitelisting them. 

	Enter the comma separated IP addresses to white list [127.0.0.1]: 1.2.3.4, 2.3.6.4,2.3.9.8
	Executing service nginx reload, please wait...


