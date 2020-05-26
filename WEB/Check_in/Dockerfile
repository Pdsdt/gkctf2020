FROM dasctfbase/web_php73_apache_mysql

COPY src/index.php /var/www/html

# 添加readflag文件
COPY files/readflag /readflag
COPY files/flag.txt /flag
COPY files/flag.sh /flag.sh
COPY files/start.sh /start.sh
COPY files/php.ini /usr/local/etc/php/
COPY files/mpm_prefork.conf /etc/apache2/mods-available/mpm_prefork.conf

# 修改文件权限
RUN chmod 0700 /flag
RUN chmod 0755 /readflag
RUN chmod +s /readflag
RUN chmod +x /start.sh

EXPOSE 80
