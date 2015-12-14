var http = require('http');

var urls = process.argv.splice(2);
var responses = [];
var doneQueue = [];

for(var index in urls){
	responses[index] = '';
	doneQueue[index] = false;
}


urls.forEach(function(url, urlIndex){
	http.get(url, function(response){
		response.setEncoding('utf8')
		.on('data', function(data){
			responses[urlIndex] += data;
		})
		.on('end', function(){
			doneQueue[urlIndex] = true;
			
			var ready = doneQueue.every(function(status){
				return status;
			});
			
			if(ready){
				responses.forEach(function(element){
					console.log(element);
				});
			}
		})
		.on('error', console.error);
	});
});