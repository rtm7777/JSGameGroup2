require.config({
	paths: {
		jquery: 'bower_components/jquery/jquery',
		bootstrap: 'bower_components/bootstrap/dist/js/bootstrap',
		kinetic: 'bower_components/kineticjs/kinetic'
	}
});

require(['jquery', 'bootstrap', 'kinetic', 'controllers/MapController'], function($, NaN, Kinetic, MapController) {
	$(function() {

		var players = {};

		var step = 20;

		var stage = new Kinetic.Stage({
			container: 'game',
			width: 700,
			height: 500
		});

		var layer = new Kinetic.Layer();
		stage.add(layer);

		MapController.start(stage);

		spirtesImage = new Image();
		spirtesImage.onload = function() {
			layer.draw();
		};
		spirtesImage.src = "img/sprites.png";


		var currentPlayer = new Kinetic.Rect({
			x: 34,
			y: 43,
			width: 32,
			height: 32,
			fillPatternImage: spirtesImage,
			fillPatternX: -96*5,
			fillPatternY: 0
		});
		layer.add(currentPlayer);		


		$(document).keydown(function(event) {
			if (event.keyCode == 37) {
				if (currentPlayer.getX() > 0) {
					movePlayer(currentPlayer, "left");
					currentPlayer.setFillPatternX(-96*5);
					currentPlayer.setFillPatternY(-32);
				};

			} else if (event.keyCode == 38) {

				if (currentPlayer.getY() > 0) {
					movePlayer(currentPlayer, "up");
					currentPlayer.setFillPatternX(-96*5);
					currentPlayer.setFillPatternY(-96);
				};

			} else if (event.keyCode == 39) {

				if (currentPlayer.getX() < stage.getWidth() - 37) {
					movePlayer(currentPlayer, "right");
					currentPlayer.setFillPatternX(-96*5);
					currentPlayer.setFillPatternY(-64);
				};

			} else if (event.keyCode == 40) {

				if (currentPlayer.getY() < stage.getHeight() - 37) {
					movePlayer(currentPlayer, "down");
					currentPlayer.setFillPatternX(-96*5);
					currentPlayer.setFillPatternY(0);
				};

			};

			layer.draw();
			event.preventDefault();

		});

		function movePlayer(player, direction) {
			switch (direction) {
				case "left":
					player.setX(player.getX() - step);
					break;
				case "up":
					player.setY(player.getY() - step);
					break;
				case "right":
					player.setX(player.getX() + step);
					break;
				case "down":
					player.setY(player.getY() + step);
					break;
			};
		};


	});
});