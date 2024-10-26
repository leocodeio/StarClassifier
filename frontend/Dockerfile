# Use Node.js LTS version
FROM node:18

# Set working directory
WORKDIR /frontend_app

# Copy package.json and pnpm-lock.yaml for dependency installation
COPY package.json pnpm-lock.yaml ./

# Install dependencies
RUN npm i -g pnpm &&  pnpm install

# Copy the rest of the application code
COPY . .

# Expose the frontend port
EXPOSE 3000

# Start the frontend application
CMD ["pnpm", "run","start"]
