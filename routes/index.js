var HttpError = require('../error').HttpError;

module.exports = function(app, passport) {
	app.get('/', isLoggedIn, function(req, res, next) {
		res.render('game', {
			title: "Best Game",
			player: req.user
		});
	});

	app.get('/login', function(req, res, next) {
		res.render('login', {
			title: "Login"
		});
	});

	app.post('/login', passport.authenticate('local-login', {
		successRedirect: '/',
		failureRedirect: '/login',
		failureFlash: true
	}));

	app.get('/signup', function(req, res, next) {
		res.render('signup', {
			title: 'Sign up'
		});
	});

	app.post('/signup', passport.authenticate('local-signup', {
		successRedirect: '/profile',
		failureRedirect: '/signup',
		failureFlash: true
	}));

	app.get('/profile', isLoggedIn, function(req, res) {
		res.render('profile', {
			title: 'profile',
			player: req.user
		});
	});

	app.get('/logout', function(req, res) {
		req.logout();
		res.redirect('/');
	});
};

function isLoggedIn(req, res, next) {
	if (req.isAuthenticated()) {
		return next();
	}
	res.redirect('/login');
}