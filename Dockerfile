FROM node:11.11.0-alpine

COPY . /app
WORKDIR /app

RUN npm install

EXPOSE 9000

CMD [ "npm", "start" ]
