FROM node:alphine

WORKDIR /user/app

COPY package.json .

RUN npm install

COPY . .

EXPOSE 3344

CMD ["npm", "start"]

