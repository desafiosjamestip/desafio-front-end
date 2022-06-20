FROM node:17.8.0
WORKDIR /app
COPY package*.json ./
RUN yarn 
COPY . . 
CMD ["yarn", "start"]