const http = require('http');
const bl = require('bl');

const url = process.argv[2];

http.get(url, (response) => {
	response.setEncoding('utf8')
	.pipe(bl( (err, data) => {
		if (err) throw err;
		
		const dataString = data.toString();
		
		console.log(dataString.length);
		console.log(dataString);
	}));
});