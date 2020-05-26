FROM phusion/baseimage

MAINTAINER w4nder

RUN sed -i 's/http:\/\/archive.ubuntu.com\/ubuntu\//http:\/\/mirrors.tuna.tsinghua.edu.cn\/ubuntu\//g' /etc/apt/sources.list && \
    sed -i '/security/d' /etc/apt/sources.list
RUN apt-get -y update \
    && apt install apache2 -y \
    && apt-get -y install gcc  php libapache2-mod-php make cron net-tools php-curl php-gd

RUN echo "flag{test}" > /flag
RUN  mkdir -p /usr/src/
COPY redis-3.2.11.tar.gz /usr/src/

RUN cd /usr/src/ \
    &&  tar zxvf redis-3.2.11.tar.gz  \
    && cd /usr/src/redis-3.2.11/ \
    && make MALLOC=libc \
    && make install \
    && make clean \
    && cd /

RUN echo '<?php echo "被你发现了,但你也许需要试试其他服♂务,就在这台机子上! ...我说的是端口啦";?>'> /var/www/html/index.php \
    && rm -f /var/www/html/index.html
ADD ./start.sh /etc/my_init.d/
RUN chmod u+x /etc/my_init.d/start.sh
COPY docker-entrypoint.sh /usr/local/bin/
COPY flag.sh /flag.sh
COPY mpm_prefork.conf /etc/apache2/mods-available/mpm_prefork.conf

RUN  chmod +x /usr/local/bin/docker-entrypoint.sh && \
    chmod +x /flag.sh

EXPOSE 6379

ENTRYPOINT ["/usr/local/bin/docker-entrypoint.sh"]
CMD ["redis-server","/usr/src/redis-3.2.11/redis.conf"]
