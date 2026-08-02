# Multi-stage Dockerfile for AWS Certification Suite
FROM node:20-alpine AS builder

WORKDIR /app

# Copy package metadata and install dependencies
COPY package*.json ./
RUN npm ci

# Copy application source code
COPY . .

# Build Vite frontend static bundle and compile TypeScript
RUN npm run build

# --- Runtime Stage ---
FROM node:20-alpine AS runner

WORKDIR /app
ENV NODE_ENV=production
ENV PORT=4000

# Copy built artifacts and dependencies
COPY package*.json ./
RUN npm ci --only=production

COPY --from=builder /app/dist ./dist
COPY --from=builder /app/server ./server
COPY --from=builder /app/src ./src

# Create database volume directory
RUN mkdir -p /app/db

EXPOSE 4000

CMD ["node", "server/server.js"]
