FROM nginx:1.12
ADD page /usr/share/nginx/html
ADD nginx.conf /etc/nginx/nginx.conf
RUN chmod 777 -R /usr/share/nginx/html