FROM node:18-alpine

# Install system dependencies
RUN apk add --no-cache git

# Set working directory
WORKDIR /app

# Install global dependencies
RUN npm install -g npm@latest

# Create non-root user
RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001

# Change ownership
RUN chown -R nextjs:nodejs /app
USER nextjs

# Copy package files
COPY --chown=nextjs:nodejs package*.json ./

# Install dependencies
RUN npm ci --only=production && npm cache clean --force

# Copy source code
COPY --chown=nextjs:nodejs . .

# Expose port
EXPOSE 3000

# Start development server
CMD ["npm", "run", "dev"]