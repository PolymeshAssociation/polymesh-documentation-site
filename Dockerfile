################################################################

FROM node:lts-alpine AS builder

################################################################

WORKDIR /home/node
USER node

################################################################

COPY --chown=node:node package.json package-lock.json /home/node/
RUN npm ci --ignore-scripts

################################################################

COPY --chown=node:node . /home/node/
RUN npm run build

################################################################

FROM nginx:stable-alpine-slim

################################################################

COPY --from=builder --chown=root:root /home/node/build/ /usr/share/nginx/html/
COPY --chown=root:root nginx.conf /etc/nginx/conf.d/default.conf

################################################################
