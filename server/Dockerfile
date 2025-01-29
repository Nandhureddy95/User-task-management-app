# Use official Node.js image from Docker Hub
From node:16

#Set working directory
Workdir /app

# Copy package.json and package-lock.json
COPY server/package*.json /app/

#install dependecies
RUN npm install

#Copy server code
COPY . /app/

#expose the port
EXPOSE 3000

#start the app
CMD["npm", "start"]
