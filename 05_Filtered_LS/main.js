const fs = require('fs');
const path = require('path');

const filePath = process.argv[2];
const filterExtension = '.' + process.argv[3];

const bufferString = fs.readdir(filePath, (err, list) => {
	if(err) throw err;
	
	for(let index in list){
		if(path.extname(list[index]) === filterExtension){
			console.log(list[index]);
		}
	}
});
