# Use official Node.js image (LTS version, small footprint)
FROM node:18-alpine

# Set working directory in container
WORKDIR /app

# Copy dependency descriptor files first (layer caching optimization)
COPY package*.json ./

# Install production dependencies only
RUN npm install --production

# Copy source code into container
COPY . .

# Set environment variables (12-factor principle)
ENV NODE_ENV=production
ENV PORT=3000

# Expose port (used by Kubernetes or Docker run -p)
EXPOSE 3000

# Command to run the app (entry point)
CMD ["node", "app.js"]