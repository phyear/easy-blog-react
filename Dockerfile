from nginx
copy ./build/ /usr/share/nginx/html/
copy ./nginx.conf /etc/nginx/conf.d/default.conf
