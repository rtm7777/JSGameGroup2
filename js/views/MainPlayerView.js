define(['kinetic'], function(Kinetic) {
	
	var mainPlayerLayer = new Kinetic.Layer();

	function render(parametrs) {
		parametrs.stage.add(mainPlayerLayer);

		spirtesImage = new Image();
		spirtesImage.onload = function() {
			mainPlayerLayer.draw();
		};

		spirtesImage.src = parametrs.spritesSource;
		parametrs.mainPlayer.fillPatternImage(spirtesImage);
		mainPlayerLayer.add(parametrs.mainPlayer);
	}

	function moveTo(player, direction, step, playerType) {
		switch (direction) {
			case "left":
				player.setX(player.getX() - step);
				player.setFillPatternX(-96*playerType);
				player.setFillPatternY(-32);
				break;
			case "up":
				player.setY(player.getY() - step);
				player.setFillPatternX(-96*playerType);
				player.setFillPatternY(-96);
				break;
			case "right":
				player.setX(player.getX() + step);
				player.setFillPatternX(-96*playerType);
				player.setFillPatternY(-64);
				break;
			case "down":
				player.setY(player.getY() + step);
				player.setFillPatternX(-96*playerType);
				player.setFillPatternY(0);
				break;
		};
		mainPlayerLayer.draw();
	}

	return {
		render: render,
		moveTo: moveTo
	};

});