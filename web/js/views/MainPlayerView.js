define(['kinetic',
	'models/MapModel',
	'models/PlayerModel',
	'views/Stage'
], function(Kinetic, mapModel, playerModel, stage) {
	
	var mainPlayerLayer = new Kinetic.Layer();

	var mainPlayer = new Kinetic.Rect({
			x: 0,
			y: 0,
			width: playerModel.width,
			height: playerModel.height,
			fillPatternX: 0,
			fillPatternY: -64
		});

	function render(playerType, startPos) {

		mainPlayer.setFillPatternX(-96*playerType);
		mainPlayer.setX(startPos.x);
		mainPlayer.setY(startPos.y);

		spirtesImage = new Image();
		spirtesImage.onload = function() {
			mainPlayerLayer.moveToTop();
			mainPlayerLayer.draw();
		};

		spirtesImage.src = playerModel.spritesSource;
		mainPlayer.fillPatternImage(spirtesImage);
		mainPlayerLayer.add(mainPlayer);
	}

	function moveTo(direction, playerType) {
		switch (direction) {
			case "left":
				if (mainPlayer.getX() > 0) {
					mainPlayer.setX(mainPlayer.getX() - mapModel.step);
					mainPlayer.setFillPatternX(-96*playerType);
					mainPlayer.setFillPatternY(-32);
				}
				break;
			case "up":
				if (mainPlayer.getY() > 0) {
					mainPlayer.setY(mainPlayer.getY() - mapModel.step);
					mainPlayer.setFillPatternX(-96*playerType);
					mainPlayer.setFillPatternY(-96);
				}
				break;
			case "right":
				if (mainPlayer.getX() < mapModel.width - 37) {
					mainPlayer.setX(mainPlayer.getX() + mapModel.step);
					mainPlayer.setFillPatternX(-96*playerType);
					mainPlayer.setFillPatternY(-64);
				}
				break;
			case "down":
				if (mainPlayer.getY() < mapModel.height - 37) {
					mainPlayer.setY(mainPlayer.getY() + mapModel.step);
					mainPlayer.setFillPatternX(-96*playerType);
					mainPlayer.setFillPatternY(0);
				}
				break;
		};
		mainPlayerLayer.draw();
	}

	stage.add(mainPlayerLayer);

	return {
		render: render,
		moveTo: moveTo
	};

});