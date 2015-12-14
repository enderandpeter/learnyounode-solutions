var http = require('http');
var bl = require('bl');

var url = process.argv[2];

http.get(url, function(response){
	response.setEncoding('utf8')
	.pipe(bl(function(err, data){
		if (err) throw err;
		
		var dataString = data.toString();
		
		console.log(dataString.length);
		console.log(dataString);
	}));
});