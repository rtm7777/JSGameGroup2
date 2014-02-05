define(['jquery','kinetic','views/MainPlayerView'], function($, Kinetic, MPView) {
	function start(stage) {
		var spritesSource = "img/sprites.png";
		var step = 20;

		var playerType = 3;

		var mainPlayer = new Kinetic.Rect({
			x: 34,
			y: 43,
			width: 32,
			height: 32,
			fillPatternImage: "",
			fillPatternX: -96*playerType,
			fillPatternY: 0
		});

		MPView.render({stage: stage, spritesSource: "img/sprites.png", mainPlayer: mainPlayer});	

		$(document).keydown(function(event) {
			if (event.keyCode == 37) {
				if (mainPlayer.getX() > 0) {
					moveMainPlayer("left");
				};

			} else if (event.keyCode == 38) {
				if (mainPlayer.getY() > 0) {
					moveMainPlayer("up");
				};

			} else if (event.keyCode == 39) {
				if (mainPlayer.getX() < stage.getWidth() - 37) {
					moveMainPlayer("right");
				};

			} else if (event.keyCode == 40) {
				if (mainPlayer.getY() < stage.getHeight() - 37) {
					moveMainPlayer("down");	
				};
			};

			function moveMainPlayer(direction) {
				MPView.moveTo(mainPlayer, direction, step, playerType);
			};

			event.preventDefault();

		});
	}

	return {
		start: start
	};

});