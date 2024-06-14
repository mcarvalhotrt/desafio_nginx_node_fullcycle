FROM nginx:latest

#WORKDIR /usr/src/app
EXPOSE 80
COPY nginx.conf /etc/nginx/nginx.conf

ENTRYPOINT [ "/docker-entrypoint.sh" ]
CMD ["nginx", "-g", "daemon off;"]