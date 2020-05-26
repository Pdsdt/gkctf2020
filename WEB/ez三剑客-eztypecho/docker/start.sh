#!/bin/bash

source /flag.sh
service apache2 start

find /var/lib/mysql -type f -exec touch {} \; && service mysql start
