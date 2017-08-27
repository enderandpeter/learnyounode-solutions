const zerofill = (num) => num < 10 ? '0' + num : num;

const net = require('net');
const strftime = require('strftime');

const port = process.argv[2];

net.createServer( (socket) => {
	socket.end(strftime('%F %R', new Date()) + '\n');
}).listen(port);