function zerofill(num){
	return num < 10 ? '0' + num : num;
}

var net = require('net');

var port = process.argv[2];

net.createServer(function(socket){
	var date = new Date();	
	
	var month = zerofill(date.getMonth() + 1);
	var dayOfMonth = zerofill(date.getDate());
	var hours = zerofill(date.getHours());
	var minutes = zerofill(date.getMinutes());
	
	var dateString = date.getFullYear() + '-' + month + '-' + dayOfMonth + ' ' + hours + ':' + minutes;
	socket.end(dateString + '\n');
}).listen(port);