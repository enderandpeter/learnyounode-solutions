const zerofill = (num) => num < 10 ? '0' + num : num;

const net = require('net');

const port = process.argv[2];

net.createServer( (socket) => {
	const date = new Date();	
	
	const month = zerofill(date.getMonth() + 1);
	const dayOfMonth = zerofill(date.getDate());
	const hours = zerofill(date.getHours());
	const minutes = zerofill(date.getMinutes());
	
	const dateString = `${date.getFullYear()}-${month}-${dayOfMonth} ${hours}:${minutes}`;
	socket.end(dateString + '\n');
}).listen(port);