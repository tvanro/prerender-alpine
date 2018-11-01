const prerender = require('prerender');
const server = prerender({
  chromeFlags: [ '--no-sandbox', '--headless', '--disable-gpu', '--remote-debugging-port=9222', '--hide-scrollbars' ],
  forwardHeaders: true,
  chromeLocation: '/usr/bin/chromium-browser'
});

server.use(require('prerender-extension-blacklist'));
server.use(prerender.blacklist());
server.use(prerender.httpHeaders());
// server.use(prerender.removeScriptTags());

server.start();
