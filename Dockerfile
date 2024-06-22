FROM caddy:latest

WORKDIR /srv

COPY *.html /srv/
COPY *.css /srv/
COPY src/ /srv/src/

EXPOSE 80

CMD ["caddy", "file-server", "--listen", "0.0.0.0:80"]