var Controller = require ('./controller');

module.exports = function(app) {
    // devolver todos los Personas
	app.get('/app/mensaje', Controller.getMensajes);


  app.post('/app/mensaje', Controller.setMensaje);

	app.get('/blog', function(req, res) {
		res.sendfile('./public/blog.html'); // Carga única de la vista
	});

	app.get('/blog/espiral', function(req, res) {
		res.sendfile('./public/blog/espiral.html'); // Carga única de la vista
	});

	app.get('*', function(req, res) {
		res.sendfile('./public/index.html'); // Carga única de la vista
	});
};
