# Use the Node.js 18 Alpine image for smaller size
FROM node:18-alpine

# Set working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json (if available) to install dependencies
COPY package.json ./
COPY package-lock.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the application code into the container
COPY . .

# Expose the port on which your API Gateway will run
EXPOSE 8080

# Start the API Gateway
CMD ["npm", "start"]
