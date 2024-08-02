FROM node:20-alpine3.20 AS build
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY src src
COPY public public
RUN npm run build

FROM busybox:1-musl
WORKDIR /app

RUN echo "E404:/app/index.html" > /httpd.conf
COPY --from=build /app/build /app

EXPOSE 3000
CMD ["httpd", "-fp3000", "-c/httpd.conf"]
