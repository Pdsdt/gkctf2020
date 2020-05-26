FROM php:7.3.15-apache

LABEL Organization="CTFHUB" Author="Virink <virink@outlook.com>"

ENV TZ=Asia/Shanghai

COPY _files /tmp/
COPY src /var/www/html

COPY _files/mpm_prefork.conf /etc/apache2/mods-available/mpm_prefork.conf

RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone; \
    mv /tmp/flag.sh /flag.sh \
    && mv /tmp/docker-php-entrypoint /usr/local/bin/docker-php-entrypoint \
    && chown -R www-data:www-data /var/www/html \
    && chmod +x /usr/local/bin/docker-php-entrypoint \
    && mv /usr/local/etc/php/php.ini-production /usr/local/etc/php/php.ini \
    # clear
    && rm -rf /tmp/*

WORKDIR /var/www/html

EXPOSE 80
