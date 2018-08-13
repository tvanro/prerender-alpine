# Prerender Alpine

Lightweight Prerender container built on Alpine Linux with Node and Headless Chrome.

- Prerender 5.4.4
- Chromium 68.0.3440.75-r0
- Node 10.8.0

## Requirements

- Docker

## Usage

Pull and run the image:

```
docker pull tvanro/prerender-alpine:5.4.4
docker run -p 3000:3000 tvanro/prerender-alpine:5.4.4
```
Prerender will now be running on http://localhost:3000. Try the container out with curl:

```
curl http://localhost:3000/render?url=https://www.example.com/
```

See the complete Prerender documentation for additional information: https://github.com/prerender/prerender