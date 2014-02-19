var HttpError = require('../error').HttpError;

module.exports = function(app) {
	app.get('/', function(req, res, next) {
		res.render('game', {
			title: "Best Game",
			player: "Super Mario"
		});
	});

	app.get('/login', function(req, res, next) {
		res.render('login', {
			title: "Login",
			player: "Ezhik"
		});
	});
}