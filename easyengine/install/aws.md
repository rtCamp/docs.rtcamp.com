---
title: "Install EasyEngine on AWS Instance"
---
[Sign up](https://aws.amazon.com/) For Amazon and Follow these steps

- Launch New Instance

Click on *Launch Instance* to start your amazon EC2 Instance Launch.

![Launch Instance](https://rtcamp.com/wp-content/uploads/2014/10/Screenshot-from-2014-08-12-144256.png)

- Select AMI (Linux Distribution Image your server will be Running on).

    Select *Ubuntu* or *Debian* Images as EasyEngine supports these only.
![Select AMI](https://rtcamp.com/wp-content/uploads/2014/10/Screenshot-from-2014-08-12-190655.png)

- Select Instance Type

    Here select instance type as per your website needs server configuration.
    Like RAM, Storage..etc
![Select Instance Type Droplet](https://rtcamp.com/wp-content/uploads/2014/10/Screenshot-from-2014-08-12-190712.png)

- Configure Instance Details

    Here you should select **Shutdown Behaviour** as **Stop** Otherwise your instance will get terminated on shutdown/reboot.
![Configure Instance Details](https://rtcamp.com/wp-content/uploads/2014/10/Screenshot-from-2014-08-12-190908.png)

- Add Storage

    Here Add Storage to your instance
![Add Storage](https://rtcamp.com/wp-content/uploads/2014/10/Screenshot-from-2014-08-12-191842.png)

- Tag Your Instance

    Give name to your instance
    ![Tag Instance](https://rtcamp.com/wp-content/uploads/2014/10/Screenshot-from-2014-08-12-191141.png)

- Configure Security Group

    Here you need to specify the ports you want to keep open
    ![Configure Security Group](https://rtcamp.com/wp-content/uploads/2014/10/Selection_021.png)

- Review your New Instance Configuration
    ![Review](https://rtcamp.com/wp-content/uploads/2014/10/Screenshot-from-2014-08-12-1913031.png)

-   Click on launch instance and download the *PEM* Key given by AWS.

- Login To your server

    Using SSH you can login to your server in following way

        #Change permission of key file

        chmod 600 key.pem

        #Connect to instance

        ssh -i key.pem ubuntu@<public-ip-of-ec2>

- Next Step is to [Install EasyEngine](/easyengine/install/#QuickSetup) On your Fresh Droplet
