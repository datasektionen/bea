FROM node:20-alpine3.20 AS build
WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY src src
COPY public public
COPY tsconfig.json ./
COPY next.config.mjs ./
RUN npm run build

EXPOSE 3000
CMD ["npm", "run", "start"]
