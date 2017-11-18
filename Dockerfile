FROM node:6-alpine

WORKDIR /app

RUN npm install --quiet

COPY src /app/src/

EXPOSE 8080
CMD ["node", "app/server.js"]
