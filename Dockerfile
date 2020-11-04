FROM node:10-alpine as builder

# install and cache app dependencies
COPY package*.json ./
RUN npm install && mkdir /dubbing 

WORKDIR /dubbing

COPY . .

RUN npm run build 


FROM nginx:alpine
COPY --from=builder /dubbing/build /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d
EXPOSE 80

ENTRYPOINT ["nginx", "-g", "daemon off;"]

