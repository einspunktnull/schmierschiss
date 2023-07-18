FROM nginx

COPY ./dist/schmierschiss /usr/share/nginx/html
COPY ./nginx_default.conf /etc/nginx/conf.d/default.conf


