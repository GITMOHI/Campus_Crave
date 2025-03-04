# Use official Node.js image as the base
FROM node:16

# Set working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port that the backend uses
EXPOSE 5000

# Run the development server using Nodemon
CMD ["npm", "run", "dev"]
