var http = require('http');
var bl = require('bl');

var urls = process.argv.splice(2);
var responses = [];
var count = 0;

urls.forEach(function(url, urlIndex){
	http.get(url, function(response){
		response.pipe(bl(function(err, data){			
			if (err) throw err;
			
			count++;			
			responses[urlIndex] = data.toString();			
			
			if(count === urls.length){
				responses.forEach(function(element){
					console.log(element);
				});
			}
		}))
	});
});