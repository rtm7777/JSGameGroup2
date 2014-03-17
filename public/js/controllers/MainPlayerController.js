define(['jquery',
		'kinetic',
		'views/MainPlayerView'
], function($, Kinetic, MPView) {

	var playerType = 3,
		startPos = {
			x: 34,
			y: 43
		}

	MPView.render(playerType, startPos);

	$(document).keydown(function(event) {
		if (event.keyCode == 37) {
			
			moveMainPlayer("left");
			event.preventDefault();

		} else if (event.keyCode == 38) {
			
			moveMainPlayer("up");
			event.preventDefault();

		} else if (event.keyCode == 39) {

			moveMainPlayer("right");
			event.preventDefault();

		} else if (event.keyCode == 40) {

			moveMainPlayer("down");
			event.preventDefault();	

		};

		function moveMainPlayer(direction) {
			MPView.moveTo(direction, playerType);
		};
	});

});