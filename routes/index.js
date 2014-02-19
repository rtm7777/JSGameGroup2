var HttpError = require('../error').HttpError;

module.exports = function(app) {
	app.get('/', function(req, res, next) {
		res.render('index', {
			title: "Best Game",
			player: "Super Mario"
		});
	});
}