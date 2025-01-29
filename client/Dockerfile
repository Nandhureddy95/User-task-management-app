#use the image from docker hub 
FROM node:16 as build

#set the Working directory
WORKDIR /app

#copy the files package.json and yarn.lock
COPY client/package*.json client/yarn.lock /app

#run install dependencies
RUN yarn install

#copy all client files
COPY client/. /app

RUN yarn build

# Serve the built frontend
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html

# Expose port for Nginx
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
