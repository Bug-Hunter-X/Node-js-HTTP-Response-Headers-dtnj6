const http = require('http');

const server = http.createServer((req, res) => {
  // Setting the Content-Type header to 'text/plain' indicates that the response body is plain text
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World!');
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});