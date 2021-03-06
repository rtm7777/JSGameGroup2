define([
	'kinetic',
	'models/MapModel',
	'views/Stage'
], function(Kinetic, mapModel, stage) {

	var mapLayer = new Kinetic.Layer();
	
	function render() {
		var mapArray = mapModel.mapArray;
		var sources = mapModel.sources;

		function loadImages(sources, callback) {
			var images = {};
			var numImages = 0;
			var loadedImages = 0;

			for(var src in sources) {
				numImages++;
			}

			for (var src in sources) {
				images[src] = new Image();
				images[src].onload = function() {
					if(++loadedImages >= numImages) {
		              callback(images);
		            }
				};
				images[src].src = sources[src];
			}
		}

		function drawMap(mapArray, images) {
			for (col in mapArray) {
				for (row in mapArray[col]) {
					var res = new Kinetic.Image({
						x: row*20,
						y: col*20,
						image: images[mapArray[col][row]]
					});
					mapLayer.add(res);
				}
			}
			mapLayer.moveToBottom();
			mapLayer.draw();
		}

		loadImages(sources, function(images) {
			drawMap(mapArray, images);
		});
	}

	stage.add(mapLayer);

	return {
		render: render
	};

});