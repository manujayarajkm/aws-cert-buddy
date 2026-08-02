# Multi-stage Dockerfile for AWS Certification Suite
FROM node:22-slim AS builder

WORKDIR /app

# Install build dependencies for native C++ modules (better-sqlite3)
RUN apt-get update && apt-get install -y python3 make g++ && rm -rf /var/lib/apt/lists/*

# Copy package metadata and install dependencies
COPY package*.json ./
RUN npm ci

# Copy application source code
COPY . .

# Build Vite frontend static bundle and compile TypeScript
RUN npm run build

# --- Runtime Stage ---
FROM node:22-slim AS runner

WORKDIR /app
ENV NODE_ENV=production
ENV PORT=4000

# Install runtime build dependencies for native C++ modules
RUN apt-get update && apt-get install -y python3 make g++ && rm -rf /var/lib/apt/lists/*

# Copy package metadata and install production dependencies
COPY package*.json ./
RUN npm ci --omit=dev

COPY --from=builder /app/dist ./dist
COPY --from=builder /app/server ./server
COPY --from=builder /app/src ./src

# Create database volume directory
RUN mkdir -p /app/db

EXPOSE 4000

CMD ["node", "server/server.js"]
