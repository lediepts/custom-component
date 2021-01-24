FROM node:lts-alpine

ENV NODE_ENV production
ENV NPM_CONFIG_LOGLEVEL warn

RUN mkdir /app
WORKDIR /app

COPY package.json yarn.lock ./
COPY . .

RUN npm install

EXPOSE 3000

CMD [ "npm", "run", "dev" ]