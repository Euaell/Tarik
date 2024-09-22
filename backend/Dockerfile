# backend/Dockerfile

# Stage 1: Install dependencies and build the application
FROM node:20 AS builder

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and yarn.lock to install dependencies
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn install

# Copy the rest of the application code
COPY . .

# Build the NestJS application
RUN yarn build

# Stage 2: Run the application
FROM node:14

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy the built application and node_modules from the builder stage
COPY --from=builder /usr/src/app/package.json ./
COPY --from=builder /usr/src/app/yarn.lock ./
COPY --from=builder /usr/src/app/node_modules ./node_modules
COPY --from=builder /usr/src/app/dist ./dist

# Expose the application port
EXPOSE 3000

# Set environment variables for production (can be overridden in Docker Compose)
ENV NODE_ENV=production

# Start the application
CMD ["node", "dist/main.js"]