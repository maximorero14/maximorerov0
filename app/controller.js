var Mensaje = require('./models/mensaje');
// Guarda un objeto Mensaje en base de datos
exports.setMensaje = function (req, res) {

    // Creo el objeto Mensaje
    Mensaje.create({
        nombre: req.body.nombre,
        mail: req.body.mail,
        telefono: req.body.telefono,
        texto: req.body.texto
    }, function (err, persona) {
        if (err)
            res.send(err);
        else
            res.send("OK!");
    });
}

// Obtiene todos los objetos Mensajes de la base de datos
exports.getMensajes = function (req, res) {
    Mensaje.find(
        function (err, mensajes) {
            if (err)
                res.send(err)
            res.json(mensajes); // devuelve todas los Mensajes en JSON		
        }
    );
}
