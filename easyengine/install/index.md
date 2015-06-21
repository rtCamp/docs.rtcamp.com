---
title: "Install EasyEngine"
---

## Supported distributions

- Ubuntu 12.04 and 14.04
- Debian 7 and 8

## Port requirements

- 22/TCP (Inbound/Outbound) : Standard SSH port
- 80/TCP (Inbound/Outbound) : Standard HTTP port
- 443/TCP(Inbound/Outbound) : Standard HTTPS port
- 22222/TCP (Inboud)        : To access EasyEngine admin tools
- 11371/TCP (Outbound)      : To connect to GPG Key Server


## Launch/Deploy/Create Server Instance

Launch/Deploy/Create your server instance with your hosting provider

Follow these guide or skip to **Quick Setup** If you are already done.


- [AWS](/easyengine/install/aws.html)

- [Linode](/easyengine/install/linode.html)

- [DigitalOcean](/easyengine/install/digitalocean.html)



## Quick Setup

*Here are the quick commands to setup EasyEngine on your server and making your site* **Live**

- First command installs EasyEngine on your server.
- Second command installs necessary stack and creates *Single WordPress Site* with domain example.com

Just paste following commands in your shell

	wget -qO ee rt.cx/ee && sudo bash ee

	sudo ee site create example.com --wp


**To view your site in browser just point your domain to server.**
