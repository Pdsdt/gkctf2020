FROM node:lts-alpine

LABEL Author="Yoshino-s <yoshino.prog@gmail.com>"

COPY files /tmp/

WORKDIR /app

RUN mv /tmp/src/* /app \
    && yarn \
    && mv /tmp/docker-php-entrypoint /docker-php-entrypoint \
    && chmod +x /docker-php-entrypoint \
    && rm -rf /tmp/* \
    && rm -rf /etc/apk

EXPOSE 80

CMD ["/docker-php-entrypoint"]