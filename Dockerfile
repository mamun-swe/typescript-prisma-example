
# Node version
FROM node:16

# Make work directory
WORKDIR /usr/src/app

# Copy files
COPY package*.json ./
COPY tsconfig.json ./
COPY . ./

# Install & build
RUN npm install
RUN npx prisma generate
RUN npm run build

# PORT defined
EXPOSE ${PORT}

# Set ENV variables
ENV PORT=${PORT}
ENV MONGODB_DATABASE_URL=${MONGODB_DATABASE_URL}

# Execute command
CMD [ "npm", "start"]