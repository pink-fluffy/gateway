# Use Node v16 as the base image
FROM node:16

# Create app directory
WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 9043

ARG GATEWAY_PORT
ARG GATEWAY_HOST

ARG IDENTITY_HOST
ARG IDENTITY_PORT

ARG PRODUCTS_HOST
ARG PRODUCTS_PORT

ARG CARTS_HOST
ARG CARTS_PORT
# Run node
#RUN npm start
CMD ["node", "src/gateway.js"]
