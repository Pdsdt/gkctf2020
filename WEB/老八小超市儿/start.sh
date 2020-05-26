#!/bin/bash

source /flag.sh
/auto.sh &
service apache2 start

find /var/lib/mysql -type f -exec touch {} \; && service mysql start
