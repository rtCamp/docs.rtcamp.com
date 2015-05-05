# Cement Tutorial

As EasyEngine is based on Cement framework. It is necessary to understand the Cemenet framework.

## Introduction
Cement is an advanced CLI Application Framework for Python.

## Install Cement

    apt-get install python3-pip
    pip3 install cement

## Demo Application

Here is the demo application that will give you start for framework.

**helloworld.py**

    from cement.core import foundation

    app = foundation.CementApp('helloworld')
    try:
        app.setup()
        app.run()
        print('Hello World')
    finally:
        app.close()

    Output:

    $ python3 helloworld.py
    Hello World

    $ python helloworld.py --help
    usage: helloworld.py [-h] [--debug] [--quiet]

    optional arguments:
      -h, --help  show this help message and exit
      --debug     toggle debug output
      --quiet     suppress all output

This is just a demo application. You can see more at http://builtoncement.com/2.4/dev/quickstart.html
