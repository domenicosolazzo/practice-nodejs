var http = require('http');
var fs = require('fs');

function send404(response){
	response.writeHead(404, {'Content-Type':'text/plain'});
	response.write('Error 404:resource not found');
	response.end();
}

var server = http.createServer(function(request, response){
	if (req.method == 'GET' && req.url == '/url'){
		res.writeHead(200, {'Content-Type':'text/html'});
		fs.createReadStream('./index.html').pipe(res);
	}else{
		send404(request);
	}
}).listen(3000);

console.log('Server running...');