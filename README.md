# Prerender Alpine

Lightweight Prerender container built on Alpine Linux with Node and Headless Chrome.

- Prerender 5.6.0
- Chromium 79.0.3945.130-r0
- Node 12.16.2

## Requirements

- Docker

## Usage

Pull and run the image:

```
docker pull tvanro/prerender-alpine:6.0.1
docker run -p 3000:3000 tvanro/prerender-alpine:6.0.1
```
Prerender will now be running on http://localhost:3000. Try the container out with curl:

```
curl http://localhost:3000/render?url=https://www.example.com/
```

## Prerender plugins

A few default plugins have been activated by default (see `server.js`):
- https://github.com/prerender/prerender/blob/master/lib/plugins/blacklist.js
- https://github.com/prerender/prerender/blob/master/lib/plugins/httpHeaders.js
- https://github.com/prerender/prerender/blob/master/lib/plugins/removeScriptTags.js

This can be modified by creating your own `server.js` and mounting this file as a docker volume:

```
docker run -p 3000:3000 -v $(pwd)/server.js:/server.js tvanro/prerender-alpine:6.0.1 
```

## Prerender memory cache

The [prerender-memory-cache](https://github.com/prerender/prerender-memory-cache) plugin is not activated by default.
You can activate it with the environment variable `WITH_CACHE='yes'`.

You can customize cache behavior with environment variables :
- CACHE_MAXSIZE=1000 : max number of objects in cache
- CACHE_TTL=6000 : time to live in seconds

```
docker run -p 3000:3000 -e WITH_CACHE='yes' -e CACHE_MAXSIZE=1000 -e CACHE_TTL=6000 tvanro/prerender-alpine:6.0.1 
```

## Prerender documentation

Check out the official Prerender documentation: https://github.com/prerender/prerender
