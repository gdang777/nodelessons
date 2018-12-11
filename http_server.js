const http = require('http');

const server = http.createServer( function(req, res){
  res.send("Hello World");
});

server.get('/', function(req, res){
  res.send("hello world");
});

server.listen(3000, function (){
  console.log('Server is listening on port 3000....');
})