const http = require('http');

const server = http.createServer((req, res) => {
  // Without setting the Content-Type header, the response might not be handled correctly by the client
  res.end('Hello, World!');
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});