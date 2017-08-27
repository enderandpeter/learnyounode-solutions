const fs = require('fs');
const path = require('path');

module.exports = (filePath, extension, callback) => {
	fs.readdir(filePath, (err, list) => {
		if(err) return callback(err);
		
		let fileList = [];
		extension = '.' + extension;
		for(let index in list){
			
			if(path.extname(list[index]) === extension){
				fileList.push(list[index]);
			}
		}
		
		callback(null, fileList);
	});
}