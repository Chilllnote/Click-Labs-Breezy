# Use Node 22 (Current Active LTS in 2026)
FROM node:22-slim

# Set the working directory inside the container
WORKDIR /app

# Copy package files first to leverage Docker caching
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your frontend code
COPY . .

# Expose Vite's default port
EXPOSE 5173

# Start Vite with the --host flag to allow external access
CMD ["npm", "run", "dev", "--", "--host"]