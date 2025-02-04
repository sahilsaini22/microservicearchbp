	
# Use the latest LTS version of Node.js
FROM node:current-alpine3.20
 
# Set the working directory inside the container
WORKDIR /app
 
# Copy package.json and package-lock.json
COPY package*.json ./
 
# Install dependencies
#RUN npm install
RUN npm install -g pnpm
RUN pnpm install
 
# Copy the rest of your application files
COPY . .

# Expose the port your app runs on
EXPOSE 3000

RUN pnpm build
 
 
# Define the command to run your app
CMD ["pnpm", "dev"]