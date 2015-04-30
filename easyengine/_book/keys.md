---
title: "EasyEngine Developer Public SSH Keys"
---

# Following are Public SSH keys of EasyEngine developers:

### [Rahul Bansal](https://github.com/rahul286)

	ssh-rsa AAAAB3NzaC1yc2EAAAABIwAAAQEA7tDVPV0UKE9MAc+PfKiKorJc1UBppxCUYHNVTzxLSeSD9zphaoz/KXBhMXlqQO5BkAPx8BTctD1nBwEtzLr0TUfD1Y4dlJs/TPIoqtk/shFvCnFlUW0DMnUlKPMLurD9x8/Gu85UGGJRX1qeQwgx15iTPToY5P92Ik9WnruUILjiN+by5PyHCcJeihPnbSJsS9GjEcpJW5/k3pgrhMgaQDZZ0+MkLp3SAihXLnfw7pskPimosVoDXKDenAPe0SmBs/SmOXGfUrKNnQPWZHS8uYhj3nRle9A64vlNPwllaBXI+09o7McJ1ov1L2Zay1VjAwrAgVw6ZP9aOfWAgCpruw== rahul286@Rahul-Bansals-MacBook-Pro.local


### [Radhakrishnan Mudliar](https://github.com/radhe)

	ssh-rsa AAAAB3NzaC1yc2EAAAABIwAAAQEAoViSyJq64eNfp5oENTC2M3lbHKuyoReNIK9JIob0yicpWjRBtoWWhCZwdbBKgq+XYdQdget809zXNEZAhz8NqqalPz6ZN8daLsxPLVjc5ozmHmtu/K0x8pDH8+kurY0ExdlWfEYWvGCP0YQLRKg2lJc5iJCzAaDIHcd03G1b9jfmn0/PMqineDgBgz8o6teFvwMfTPAJ7PefDvP7LMjU8w0CdqIl5qBAxuRbvPL2oaTSXSBt4/qEMMFtMECx/sBZGiBpRXVaWoPnucMVuVA49cyj/z2jWKrIh8MZY8GbbwZrgPuCagM97D2GBpe3vUfewtWvuNIfbd4geq0E8crMpw== radhe@radhe-laptop


### [Gaurav Ashtikar](https://github.com/gau1991)

	ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQDCfqNgxTMHWZSg+hDh3lsGPYQ9DH2mQo0zvrpyXtP5sBtk/w8pcJsPrB3LOTlVbhRVdHdR2thTHVtubSe3eg50UiCO7uXmnpU7OM0PX1JcYWWAw5dgDOxDxucHbPqJBKPtFH9Exf2+4+/h78m/Hg3XOfceYuzaYIaIkUhFG3/8/ah8+MXBvgc5IP7v7EKJIwfgFnWAec1wQBB/+G8+YAL8JR1QAtGkdAULo9lsI048M11/bQxWqTkDPHD6hCKhcseRZ5bV/IKeCZsB45GZrn2AtU2auQi2OSVBk/TOb/hlroPNj9m0BfliddlKiZms0qIxWgkMvorheOjLKXkDO5AB gaurav.astikar@rtcamp.com


### [Harshad Yeola](https://github.com/harshadyeola)

	ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQClfOuNzr/JinPqYtHbYCbqfmWhCeRoozeX8EyN3APE1tzWPIKvAkCeTQ26aybgUsCFodrXmEAfG7T/4HzmXUlEUuE5wKT8CEGzD8nkmqhGfpj6WLcfJXNwBTMKiEnocxvRusH/YVZSgGaavxCxAyn5f9nrh9sl+xMv34mlEVf0sGcdkSOvVcmRLVTJFWe/vlcfhs3t6OT8CzVA/J60kWsb7AcODHpTsy4dvJLU8Hxr2l9aaht7Deq940IvQ/tHf3YUBJ16R1zj63hFbixZwBXIIKXTfM6OxXEfxTFwauKMRPK2ULqLTwrEWpNQpMVFkDgODZzOXEqhj3JKR4CWzgb1 harshad.yeola@rtcamp.com


### [Shital Patil](https://github.com/shitalp)

	ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQDVKYGtdruh7x3yY6TnOl80GNy4te/pkoT3ynKIIEKBTJtDrYMe5gbmQhe18o5gBzY9uSy+F7DjyC+2O/5owWGls6nT6/QqEz+YxiOWR/By+wkaXhnYlcFSqEuughoz3833ATXYR4arIvtLRP8dJxYDBvqvW2z/zY/kXall+gAoOvL76YuCyYy/WpMrYloA/h0XRc/70jcDPU1WZ+r4iD2gjoDVcjZa7/ENc5+vXjiTmCDo3yj569r1HzKfBIvkdQyOBTqsxeaQgwH2iIR567VYVUrpTdrsh7h+utGz1cT3rNkt4MgDq7rOrGD5y/gNNje3S2R3l7HjZyarDmBLJNM9 shital.patil@rtcamp.com


# How to add public SSH key into your server?

Use following commands to add public SSH keys into server

	mkdir -p ~/.ssh
	vim ~/.ssh/authorized_keys
	# Copy Public SSH keys here
	chmod 600 ~/.ssh/authorized_keys




