const args = process.argv.slice(2);

const sum = args.reduce((acc, cur) => {
	acc += Number(cur)
	return acc
}, 0)

console.log(sum);