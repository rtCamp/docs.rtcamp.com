# EasyEngine Databse

EasyEngine mainatains a lightweight database for storing the websites information.

System Location: `/var/lob/ee/ee.db`

Tables
    - sites

           id INTEGER PRIMARY KEY     AUTOINCREMENT,
           sitename UNIQUE CHAR,
           site_type CHAR,
           cache_type CHAR,
           site_path  CHAR,
           created_on TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
           is_enabled INT,
           is_ssl INT,
           storage_fs CHAR,
           storage_db CHAR,
           db_name varchar,
           db_user varchar,
           db_password varchar,
           db_host varchar,
           is_hhvm INT DEFAULT '0',
           is_pagespeed INT DEFAULT '0'
