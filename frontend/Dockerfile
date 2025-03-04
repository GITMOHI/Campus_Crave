# Use official Node.js image as the base
FROM node:18

# Set working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install dependencies
RUN npm install

# Expose the port that Vite uses
EXPOSE 5173

# Copy the rest of the application code
COPY . .

# Run the development server with hot-reloading (Vite)
CMD ["npm", "run", "dev"]
