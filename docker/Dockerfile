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
RUN sed --quiet 's/^\(.*\)=.*$/\1=__\1__/p' .env > .env.template && \
    mv .env.template .env && \
    npm run build && \
    sed 's/^\(.*\)=.*$/\1/' .env > /home/node/env.var.list && \
    rm .env

################################################################

FROM nginx:stable-alpine-slim

################################################################

COPY --chown=root:root docker/nginx.conf /etc/nginx/conf.d/default.conf
COPY --chown=root:root docker/replace-env-var-placeholders.sh /usr/local/bin/

################################################################

COPY --from=builder --chown=root:root /home/node/env.var.list /srv/
COPY --from=builder --chown=root:root /home/node/build/ /usr/share/nginx/html/

################################################################

ENV MATOMO_SITE_ID=MATOMO_SITE_ID_NOT_SET

################################################################

CMD replace-env-var-placeholders.sh && \
    nginx -g 'daemon off;'

################################################################
