FROM node:18-alpine
RUN apk update
WORKDIR /app
COPY build .
EXPOSE 4000
CMD ["node", "server.js"]