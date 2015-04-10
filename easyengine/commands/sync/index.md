---
layout: page
title: "sync"
description: "Synchronize EasyEngine database"
---
#### Available with EasyEngine v3.0.9 and onwards

EasyEngine maintains a lightweight sqlite database, which needs to be synced with your sites information, in order to work EasyEngine commands perfectly.

If an user want to update database for a site, and modifies `wp-config.php` file with other database created, EasyEngine will need to update its database for maintaining correct information and making its work easier.

The following command will help user to maintain his sites information updated with EasyEngine database.


    ee sync
