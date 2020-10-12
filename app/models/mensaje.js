var mongoose = require('mongoose');

module.exports = mongoose.model('Mensaje', {
	nombre: String,
	mail: String,
	telefono: String,
    texto: String
});