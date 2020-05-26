#!/bin/sh

sed -i "s#FLAGFLAGFLAG#$FLAG#" /var/www/html/index.php

export FLAG=not_flag
FLAG=not_flag

rm -f /flag.sh