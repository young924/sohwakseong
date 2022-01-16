FROM node:14.17.6

WORKDIR /usr/app

COPY package.json .
COPY src/ src/
COPY public/ public/
COPY .env.development.local .

RUN npm install --silent
