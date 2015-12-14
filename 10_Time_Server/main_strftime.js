function zerofill(num){
	return num < 10 ? '0' + num : num;
}

var net = require('net');
var strftime = require('strftime');

var port = process.argv[2];

net.createServer(function(socket){
	socket.end(strftime('%F %R', new Date()) + '\n');
}).listen(port);