var http = require('http');

var server = http.createServer(function(request, response){
	console.log('request starting....');

	response.write('hello world');
	response.end();
});

server.listen(3000);
console.log('server running...')