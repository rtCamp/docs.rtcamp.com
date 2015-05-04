## Plugin Development

EasyEngine uses [Cement Framework]() due to its inbuilt features helping to focus on development of core functionality of application.

## Developing Plugins For EasyEngine

EasyEngine used [boss]() templates for plugin development which generates directory structure and plugin configuration whichcan be easaily merged with EasyEngine.

### Install Cement

    apt-get install python-pip
    pip install cement

### Install boss

    pip install -e git+git://github.com/datafolklabs/boss.git#egg=boss

    boss sync # Downloads and installs necessary templates

### Clone EasyEngine Repository

    git clone -b python https://github.com/rtCamp/easyengine.git
    mkdir plugins
    boss create ./plugins/myplugin -t boss:cement-plugin

Fill the information this plugin will ask when setting up plugin.
last command will create such directory structue in easyengine repository


    plugins
    └── myplugin
        ├── config
        │   └── plugins.d
        │       └── myplugin.conf
        └── plugins
            └── myplugin.py

Now you can start coding in your way.
