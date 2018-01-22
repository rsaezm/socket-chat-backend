var app = require('./app');
var server = require('http').Server(app);
var io = require('socket.io')(server);


io.on('connection', function(socket){
	var mensajes = [{
		mensaje: 'Bienvenido al chat de Socket.io y NodeJS de Roberto Sáez',
		nickname: 'Bot - margotta.cl'
	}];

	console.log('io.connection ' + socket.handshake.address);

	socket.emit('mensajes', mensajes);

	socket.on('agregar-mensaje', function(mensaje){
		mensajes.push(mensaje);

		io.sockets.emit('mensajes', mensajes);
	});
});

server.listen(6677, function(){
	console.log('Servidor está funcionando en http://localhost:6677');
})
