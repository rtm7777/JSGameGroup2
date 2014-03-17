define(['kinetic',
	'models/MapModel',
	'models/ItemsModel',
	'views/Stage'
], function(Kinetic, mapModel, itemsModel, stage) {

	var itemsLayer = new Kinetic.Layer();

	var amplitude = 2;
	var period = 100;
	var animation = new Kinetic.Animation(function(frame) {
		itemsLayer.setY(amplitude * Math.sin(frame.time/period));
	}, itemsLayer);
	animation.start();


	function render(items) {
		itemsImage = new Image();
		itemsImage.onload = function() {
			drawItems(items);
		};
		itemsImage.src = itemsModel.itemsSource;
		itemsLayer.moveDown();
	};

	function drawItems(items) {
		itemsLayer.removeChildren();
		for (var item in items) {
			var res = new Kinetic.Rect({
				x: items[item].posX*mapModel.step-2,
				y: items[item].posY*mapModel.step-3,
				width: itemsModel.width,
				height: itemsModel.height,
				fillPatternX: -24*items[item].type,
				fillPatternY: 0,
				fillPatternImage: itemsImage
			});
			itemsLayer.add(res);
		}
		itemsLayer.draw();
	};

	stage.add(itemsLayer);

	return {
		render: render,
		drawItems: drawItems
	};

});
	