const prerender = require('prerender');
const prMemoryCache = require('prerender-memory-cache');

const withCache = process.env.WITH_CACHE || 'no';
const server = prerender({
    chromeFlags: ['--no-sandbox', '--headless', '--disable-gpu', '--remote-debugging-port=9222', '--hide-scrollbars', '--disable-dev-shm-usage'],
    forwardHeaders: true,
    chromeLocation: '/usr/bin/chromium-browser'
});


server.use(prerender.blacklist());
server.use(prerender.httpHeaders());
server.use(prerender.removeScriptTags());

if (withCache === "\'yes\'") {
    server.use(prMemoryCache);
}
server.start();
