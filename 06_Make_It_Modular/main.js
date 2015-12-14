var readDir = require('./readDir');

var filePath = process.argv[2];
var filterExtension = process.argv[3];

readDir(filePath, filterExtension, function(err, data){
	if(err) throw err;
	
	for(var index in data){
		console.log(data[index]);
	}	
});