const readDir = require('./readDir');

const filePath = process.argv[2];
const filterExtension = process.argv[3];

readDir(filePath, filterExtension, (err, data) => {
	if(err) throw err;
	
	for(let index in data){
		console.log(data[index]);
	}	
});