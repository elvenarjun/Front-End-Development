FROM node:10.16-alpine
WORKDIR /usr/src/app
COPY package.json .
RUN npm install --silent
COPY . .
EXPOSE 3000
CMD ["npm","run start"]
CMD ["npm","start"]