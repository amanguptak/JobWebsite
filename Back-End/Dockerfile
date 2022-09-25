FROM node:17-alpine
WORKDIR /server
COPY package.json ./
RUN npm install
COPY . ./


CMD ["node" ,"server.js"]

EXPOSE 3050
