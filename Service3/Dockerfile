	
# Use the latest LTS version of Node.js
FROM node:current-alpine3.20
 
# Set the working directory inside the container
WORKDIR /app
 
# Copy package.json and package-lock.json
COPY package*.json ./
 
# Install dependencies
RUN npm install
 
# Copy the rest of your application files
COPY . .
 
# Expose the port your app runs on
EXPOSE 8000

RUN npm run build
 
# Define the command to run your app
CMD ["npm", "run", "dev"]