# Use the Node.js image
FROM node:18-alpine

# Create and set working directory
WORKDIR /app

# Copy the package.json and install dependencies
COPY package.json ./
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the service port (4002 for listing-service)
EXPOSE 4002

# Start the service
CMD ["npm", "start"]
