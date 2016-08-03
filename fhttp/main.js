'use strict'

const http = require('http');

http.createServer(function(request, response){
  response.writeHead(200, {'content-Type': 'text/plain'});
  response.end('Hello World\n');
}).listen(8000);

