# Prerender Alpine

Lightweight Prerender container built on Alpine Linux with Node and Headless Chrome.

- Prerender 5.4.2
- Chromium 64.0.3282.168-r0
- Node 10.5.0

## Requirements

- Docker

## Usage

Pull and run the image:

```
docker pull tvanro/prerender-alpine:5.4.2-1
docker run -p 3000:3000 tvanro/prerender-alpine:5.4.2-1
```
Prerender will now be running on http://localhost:3000. Try the container out with curl:

```
curl http://localhost:3000/render?url=https://www.example.com/
```

Check out the official Prerender documentation: https://github.com/prerender/prerender
