require.config({
	paths: {
		jquery: 'bower_components/jquery/jquery',
		bootstrap: 'bower_components/bootstrap/dist/js/bootstrap',
		kinetic: 'bower_components/kineticjs/kinetic'
	},
	shim: {
		'bootstrap': ["jquery"]
	}
});

require([
	'bootstrap',
	'controllers/MainPlayerController',
	'controllers/MapController',
	'controllers/ItemsController',
	'controllers/ChatController'
]);