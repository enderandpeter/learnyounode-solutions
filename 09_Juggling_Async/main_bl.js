const http = require('http');
const bl = require('bl');

const urls = process.argv.splice(2);
var responses = [];
var count = 0;

urls.forEach( (url, urlIndex) => {
	http.get(url, (response) => {
		response.pipe(bl( (err, data) => {			
			if (err) throw err;
			
			count++;			
			responses[urlIndex] = data.toString();			
			
			if(count === urls.length){
				responses.forEach( (element) => {
					console.log(element);
				});
			}
		}))
	});
});