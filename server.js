// Inicialización
var express  = require('express');
var app      = express(); 					// Utilizamos express
var port  	 = process.env.PORT || 8080;
var mongoose = require('mongoose');
// Configuracion
mongoose.connect('mongodb://a:a@ds017185.mlab.com:17185/maximorero_mensajes');
app.configure(function() {
	app.use(express.static(__dirname + '/public'));
	app.use(express.logger('dev')); 			// activamos el log en modo 'dev'
	app.use(express.bodyParser());
	app.use(express.methodOverride());
});

// Cargamos los endpoints
require('./app/routes.js')(app);

// Escuchamos el puerto
app.listen(port);

// Alerta de puerto obtenido
console.log("APP por el puerto " + port);
