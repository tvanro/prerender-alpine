'use strict';

const prerender = require('prerender');
const prMemoryCache = require('prerender-memory-cache');

const server = prerender({
    chromeFlags: ['--no-sandbox', '--headless', '--disable-gpu', '--remote-debugging-port=9222', '--hide-scrollbars', '--disable-dev-shm-usage'],
    forwardHeaders: true,
    chromeLocation: '/usr/bin/chromium-browser'
});

const memCache = Number(process.env.MEMORY_CACHE) || 0;
if (memCache === 1) {
    server.use(prMemoryCache);
}

const s3Cache = Number(process.env.S3_CACHE) || 0;
if (s3Cache === 1) {
    server.use(require('prerender-aws-s3-cache'));
}

server.use(prerender.blacklist());
server.use(prerender.httpHeaders());
server.use(prerender.removeScriptTags());

server.start();
