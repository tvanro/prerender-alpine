# Prerender Alpine

Lightweight Prerender container built on Alpine Linux with Node and Headless Chrome.

- Prerender 5.2.0
- Chromium 63.0.3239.108-r0
- Node 9.3.0

## Requirements

- Docker

## Usage

Pull and run the image:

```
docker pull tvanro/prerender-alpine:5.2.0
docker run -p 3000:3000 tvanro/prerender-alpine:5.2.0
```
Prerender will now be running on http://localhost:3000. Try the container out with curl:

```
curl http://localhost:3000/render?url=https://www.example.com/
```

See the complete Prerender documentation for additional information: https://github.com/prerender/prerender