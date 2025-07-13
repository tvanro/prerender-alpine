FROM node:22-alpine

ENV CHROME_BIN=/usr/bin/chromium-browser
ENV CHROME_PATH=/usr/lib/chromium/
ENV MEMORY_CACHE=0

# install chromium, tini
RUN apk add --no-cache chromium tini

USER node
WORKDIR "/home/node"

COPY ./package.json .
COPY ./server.js .

# install npm packages and clear cache
RUN npm install --no-package-lock \
 && npm cache clean --force \
 && rm -rf /var/cache/apk/* /tmp/*

EXPOSE 3000

ENTRYPOINT ["tini", "--"]
CMD ["node", "server.js"]
