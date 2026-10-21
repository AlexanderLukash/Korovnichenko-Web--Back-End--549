const http = require('node:http');
const port = 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });

  if (req.url === '/about') {
    res.end('<h1>about us page</h1>');
  } else if (req.url === '/contact') {
    res.end('<h1>contact us page</h1>');
  } else {
    res.end('<h1>Hello World!</h1><h2>My name Oleksandr</h2>');
  }
});

server.listen(port, () => {
  console.log(`server start at http://localhost:${port}/`);
});
