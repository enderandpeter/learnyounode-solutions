var fs = require('fs');
var path = require('path');

module.exports = function(filePath, extension, callback){
	fs.readdir(filePath, function(err, list){
		if(err) return callback(err);
		
		var fileList = [];
		for(var index in list){
			
			if(path.extname(list[index]) === '.' + extension){
				fileList.push(list[index]);
			}
		}
		
		callback(null, fileList);
	});
}