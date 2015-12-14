function countNewlines(data){
	return data.split('\n').length - 1;
}

var fs = require('fs');

var bufferString = fs.readFile(process.argv[2], 'utf8', function(err, data){
	if(err) throw err;
	
	var lineCount = countNewlines(data);
	console.log(lineCount);
});
