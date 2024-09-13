# Use the official Node.js image from Docker Hub
FROM node:16-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json files to install dependencies
COPY package*.json ./

# Install the Node.js dependencies
RUN npm install

# Copy the entire project folder to the container's working directory
COPY . .

# Expose the port the app runs on (for example, 3000)
EXPOSE 8080

# Command to run the app
CMD ["node", "index.js"]
