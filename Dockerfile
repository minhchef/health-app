# Use the appropriate Node.js base image
FROM node:latest

# Install pnpm globally
RUN npm install -g pnpm

# Set the working directory inside the container
WORKDIR /app

# Copy pnpm configuration files and package manifests
COPY pnpm-lock.yaml package.json ./

# Install project dependencies with pnpm
RUN pnpm install --frozen-lockfile

# Copy the entire project to the container
COPY . .

# Build the application
RUN pnpm run build

# Expose the application port
EXPOSE 3000

# Start the application
CMD ["pnpm", "run", "start"]
