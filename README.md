# Prerender Alpine

Lightweight Prerender container built on Alpine Linux with Node and Headless Chrome.

- Prerender 5.16.0
- Chromium 93.0.4577.82
- Node 14.17.6

## Requirements

- Docker

## Usage

Pull and run the image:

```
docker pull tvanro/prerender-alpine:6.4.0
docker run -p 3000:3000 tvanro/prerender-alpine:6.4.0
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
docker run -p 3000:3000 -v $(pwd)/server.js:/home/node/server.js tvanro/prerender-alpine:6.4.0 
```

## Prerender memory cache

The [prerender-memory-cache](https://github.com/prerender/prerender-memory-cache) plugin is not activated by default.
You can activate it with the environment variable `MEMORY_CACHE=1`.

You can customize cache behavior with environment variables :
- CACHE_MAXSIZE=1000 : max number of objects in cache
- CACHE_TTL=6000 : time to live in seconds

```
docker run -p 3000:3000 -e MEMORY_CACHE=1 -e CACHE_MAXSIZE=1000 -e CACHE_TTL=6000 tvanro/prerender-alpine:6.3.0 
```

## Prerender documentation

Check out the official Prerender documentation: https://github.com/prerender/prerender
