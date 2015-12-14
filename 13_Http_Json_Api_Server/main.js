var http = require('http');
var url = require('url');

var port = process.argv[2];

http.createServer(function(request, response){
	var urlParts = url.parse(request.url, true);
	var path = urlParts.pathname;
	var query = urlParts.query;	
	
	switch(path){
		case '/api/parsetime':
			var date = new Date(query.iso);
			
			var data = {
				hour : date.getHours(),
				minute : date.getMinutes(),
				second : date.getSeconds()
			};
		break;
		
		case '/api/unixtime':
			var date = new Date(query.iso);
			
			var data = {
				unixtime : date.valueOf()
			}
		break;
	}
			
	response.writeHead(200, { 'Content-Type': 'application/json' })
	response.end(JSON.stringify(data));
	
}).listen(port);
