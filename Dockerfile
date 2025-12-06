FROM node:24-alpine AS build
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