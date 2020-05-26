FROM ubuntu:18.04

RUN sed -i 's/archive.ubuntu.com/mirrors.aliyun.com/g' /etc/apt/sources.list && sed -i 's/security.ubuntu.com/mirrors.aliyun.com/g' /etc/apt/sources.list && apt update && apt-get install -y lib32z1 xinetd && rm -rf /var/lib/apt/lists/ && rm -rf /root/.cache && apt-get autoclean && rm -rf /tmp/* /var/lib/apt/* /var/cache/* /var/log/*
#apt update && apt-get install -y lib32z1 xinetd && rm -rf /var/lib/apt/lists/ && rm -rf /root/.cache && apt-get autoclean && rm -rf /tmp/* /var/lib/apt/* /var/cache/* /var/log/*

COPY ./pwn.xinetd /etc/xinetd.d/pwn

COPY ./service.sh /service.sh

RUN chmod +x /service.sh

# useradd and put flag
RUN useradd -m pwn && echo 'gkctf{baby_simple_easy_vm_here_is_flag}' > /home/pwn/flag
# copy bin
COPY ./bin/pwn /home/pwn/pwn
COPY ./catflag /home/pwn/bin/sh
COPY ./libstdc++.so.6.0.21 /usr/lib/libstdc++.so.6
COPY ./libgcc_s.so.1 /usr/lib/libgcc_s.so.1
# chown & chmod
RUN chown -R root:pwn /home/pwn && chmod -R 750 /home/pwn && chmod 740 /home/pwn/flag
# copy lib,/bin
RUN cp -R /lib* /home/pwn && cp -R /usr/lib* /home/pwn && mkdir /home/pwn/dev && mknod /home/pwn/dev/null c 1 3 && mknod /home/pwn/dev/zero c 1 5 && mknod /home/pwn/dev/random c 1 8 && mknod /home/pwn/dev/urandom c 1 9 && chmod 666 /home/pwn/dev/* && cp /bin/sh /home/pwn/bin && cp /bin/ls /home/pwn/bin && cp /bin/cat /home/pwn/bin

CMD echo $FLAG > /home/pwn/flag && export FLAG=flag_not_here && FLAG=flag_not_here && /service.sh
