define([
	'kinetic',
	'models/MapModel'
], function(Kinetic, mapModel) {
	var stage = new Kinetic.Stage({
		container: mapModel.container,
		width: mapModel.width,
		height: mapModel.height
	});

	return stage;
});