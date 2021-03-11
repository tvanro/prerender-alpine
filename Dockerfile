FROM node:14-alpine3.12

ENV CHROME_BIN=/usr/bin/chromium-browser
ENV CHROME_PATH=/usr/lib/chromium/
ENV MEMORY_CACHE=0

ENV UNAME=prerender
ENV UID=1001
ENV GID=1001

# install chromium, tini and clear cache
RUN apk add --update-cache chromium tini \
 && rm -rf /var/cache/apk/* /tmp/*

RUN addgroup --gid "$GID" "$UNAME" && \
    adduser --disabled-password --gecos "" --ingroup "$UNAME" --uid "$UID" "$UNAME"

USER $UNAME
WORKDIR "/home/$UNAME"

COPY ./package.json .
COPY ./server.js .

# install npm packages
RUN npm install --no-package-lock

EXPOSE 3000

ENTRYPOINT ["tini", "--"]
CMD ["node", "server.js"]
