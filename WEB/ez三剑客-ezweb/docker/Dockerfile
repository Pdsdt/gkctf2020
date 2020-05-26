FROM phusion/baseimage

RUN sed -i 's/http:\/\/archive.ubuntu.com\/ubuntu\//http:\/\/mirrors.tuna.tsinghua.edu.cn\/ubuntu\//g' /etc/apt/sources.list && \
    sed -i '/security/d' /etc/apt/sources.list
RUN apt update -y
RUN apt install apache2 -y

RUN apt install php libapache2-mod-php php-mcrypt php-mysql php-gd php-curl  -y
RUN apt-get install -y gcc make cron net-tools  --fix-missing
RUN apt install python3 -y
RUN rm -f /var/www/html/index.html
COPY /html /var/www/html/
RUN chown -R www-data:www-data /var/www/html/
RUN chmod -R 777 /var/www/html/
COPY 000-default.conf /etc/apache2/sites-enabled/
COPY apache2.conf /etc/apache2/
RUN ln -s /etc/apache2/mods-available/rewrite.load /etc/apache2/mods-enabled/
COPY mpm_prefork.conf /etc/apache2/mods-available/mpm_prefork.conf
#COPY redis-3.2.11.tar.gz /
COPY flag.sh /flag.sh

ADD ./start.sh /etc/my_init.d/
RUN chmod u+x /etc/my_init.d/start.sh && \
    chmod +x /flag.sh
