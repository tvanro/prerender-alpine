const prerender = require('prerender');
const server = prerender({
  chromeFlags: [ '--no-sandbox', '--headless', '--disable-gpu', '--remote-debugging-port=9222', '--hide-scrollbars' ],
  chromeLocation: '/usr/bin/chromium-browser'
});

server.use(prerender.blacklist());
server.use(prerender.httpHeaders());

server.start();
