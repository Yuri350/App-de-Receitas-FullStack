FROM node:16.18

WORKDIR /app-frontend

COPY package* ./

RUN npm install

COPY . .

CMD [ "npm", "start" ]


