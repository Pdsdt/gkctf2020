#!/bin/sh
while true; do (python /var/mail/makeflaghint.py &) && sleep 60; done
