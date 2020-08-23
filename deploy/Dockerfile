#FROM node:12.18.3-alpine3.10 as builder
#
#COPY . /src
#WORKDIR /src
#
#ENV PUBLIC_URL /service/
#RUN npm i && npm run build

#EXPOSE 3000

#CMD ["npm", "start", "--prefix", "/src"]

FROM nginx:1.19.2-alpine

COPY ./build /usr/share/nginx/html
COPY ./deploy/config.example.nginx /etc/nginx/conf.d/default.conf
