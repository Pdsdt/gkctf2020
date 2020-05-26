#!/bin/sh
set -e

/flag.sh

# first arg is `-f` or `--some-option`
# or first arg is `something.conf`
if [ "${1#-}" != "$1" ] || [ "${1%.conf}" != "$1" ]; then
		set -- redis-server "$@"
	fi
	service apache2 start
	#service crond start

	exec "$@"
