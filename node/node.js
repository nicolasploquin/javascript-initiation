console.log("Mon premier script NodeJS");

var http = require('http');

var hostname = '127.0.0.1';
var port = 9000;

var server = http.createServer(function(req, res){
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('<h1>Hello World!</h1>');
});

server.listen(port, hostname, function(){
  console.log(`Server running at http://${hostname}:${port}/`);
});
