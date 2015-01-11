var http = require('http');

var server = http.createServer(function(request, response){
	console.log('Evaluating the headers');
	console.log(request.headers);

	res.write('hello world');
	res.end();

});

server.listen(3000);
console.log('Server running on port 3000');