---
title: "Developer Documentation"
---

## EasyEngine Directory structure

This page contains documentation for developers contibuting EasyEngine. It outlines the directory structure of the EasyEngine source.

**config/** - files for main application configuration and directory with configuration files for plugins

    config
    |-- bash_completion.d
    |-- ee.conf
    `-- plugins.d

**ee/** -  This is the core directory of the application

    ee
    |-- cli
    |   |-- controllers
    |   |-- ext
    |   |-- plugins
    |   `-- templates
    |-- core
    `-- utils

**docs/** -  contains manpages files foe the application.


**tests/** -  testcases written for core and cli part of the application.

    tests
    |-- cli
    |   |-- ext
    |   |-- plugins
    `-- core
