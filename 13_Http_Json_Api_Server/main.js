const http = require('http');
const url = require('url');

const port = process.argv[2];

http.createServer( (request, response) => {
	const urlParts = url.parse(request.url, true);
	const path = urlParts.pathname;
	const query = urlParts.query;	
	const date = new Date(query.iso);
	let data = {};
	
	switch(path){
		case '/api/parsetime':
			data = {
				hour : date.getHours(),
				minute : date.getMinutes(),
				second : date.getSeconds()
			};
		break;
		
		case '/api/unixtime':
			data = {
				unixtime : date.valueOf()
			}
		break;
	}
			
	response.writeHead(200, { 'Content-Type': 'application/json' })
	response.end(JSON.stringify(data));
	
}).listen(port);
