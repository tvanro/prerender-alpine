FROM node:10.15-alpine
ENV CHROME_BIN=/usr/bin/chromium-browser
ENV CHROME_PATH=/usr/lib/chromium/

COPY ./package.json .
COPY ./server.js .

# use edge repositories
# RUN sed -i -e 's/v3\.8/edge/g' /etc/apk/repositories

# install chromium and clear cache
RUN apk add --update-cache chromium \
 && rm -rf /var/cache/apk/* /tmp/*

# install npm packages
RUN npm install --no-package-lock

EXPOSE 3000

CMD ["node", "server.js"]
