FROM node:16
ENV NODE_ENV=production

WORKDIR /app

COPY ["package*.json", "./"]

RUN yarn

COPY . .

RUN yarn build

CMD ["node", "dist/main.js"]
