FROM phusion/baseimage

ADD ./mysql-passwd /tmp/
RUN sed -i "s/http:\/\/archive.ubuntu.com/http:\/\/mirrors.aliyun.com/g" /etc/apt/sources.list
RUN apt update
RUN apt install apache2 python -y
RUN debconf-set-selections /tmp/mysql-passwd && apt install mysql-server -y
RUN rm -rf /tmp/mysql-passwd
RUN apt install php libapache2-mod-php php-mcrypt php-mysql php-gd zip cron php-curl php7.0-zip php7.0-xml php-mbstring*  -y

ADD init_db.sh /tmp/init_db.sh
RUN chmod u+x /tmp/init_db.sh
ADD flag.sh /flag.sh
RUN chmod u+x /flag.sh
ADD ./init.sql /root/
RUN /tmp/init_db.sh && \
    touch /flag.hint

RUN echo "flag{this_is_fake_flag/true_flag_in_/root}" > /flag \
    && echo "flag{test}" > /root/flag

RUN rm -f /var/www/html/index.html
RUN rm -f /etc/php/7.0/apache2/php.ini
COPY html/ /var/www/html
COPY makeflaghint.py /var/mail/
COPY root /var/spool/cron/crontabs/
COPY php.ini /etc/php/7.0/apache2/
#RUN cd /var/www/ \
    #&& unzip html.zip \
    #&& rm -f html.zip
RUN chown -R www-data:www-data /var/www/html \
    && chmod -R 777 /var/www/html/ \
    && chmod -R 766 /var/mail/makeflaghint.py

COPY 000-default.conf /etc/apache2/sites-enabled/
COPY apache2.conf /etc/apache2/
COPY mpm_prefork.conf /etc/apache2/mods-available/mpm_prefork.conf
RUN ln -s /etc/apache2/mods-available/rewrite.load /etc/apache2/mods-enabled/
ADD ./start.sh /etc/my_init.d/
ADD auto.sh /auto.sh
RUN chmod u+x /etc/my_init.d/start.sh && \
  chmod +x /auto.sh
EXPOSE 80
