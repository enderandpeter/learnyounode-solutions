function countNewlines(data){
	return data.split('\n').length - 1;
}

const fs = require('fs');

const bufferString = fs.readFile(process.argv[2], 'utf8', function(err, data){
	if(err) throw err;
	
	const lineCount = countNewlines(data);
	console.log(lineCount);
});
