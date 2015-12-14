var args = process.argv.splice(2);
var sum = 0;

for(var index in args){
	sum += Number(args[index]);
}

console.log(sum);