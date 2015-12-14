var fs = require('fs');
var path = require('path');

var filePath = process.argv[2];
var filterExtension = process.argv[3];

var bufferString = fs.readdir(filePath, function(err, list){
	if(err) throw err;
	
	for(var index in list){
		if(path.extname(list[index]) === '.' + filterExtension){
			console.log(list[index]);
		}
	}
});
