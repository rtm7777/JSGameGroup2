require.config({
	paths: {
		jquery: 'bower_components/jquery/jquery',
		bootstrap: 'bower_components/bootstrap/dist/js/bootstrap',
		kinetic: 'bower_components/kineticjs/kinetic'
	}
});

require(['jquery', 'bootstrap', 'kinetic', 'controllers/MapController', 'controllers/MainPlayerController'], function($, NaN, Kinetic, MapController, MPController) {
	$(function() {

		var stage = new Kinetic.Stage({
			container: 'game',
			width: 700,
			height: 500
		});

		MapController.start(stage);

		MPController.start(stage);


		

	});
});