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

		} else if (event.keyCode == 38) {
			
			moveMainPlayer("up");

		} else if (event.keyCode == 39) {

			moveMainPlayer("right");

		} else if (event.keyCode == 40) {

			moveMainPlayer("down");	

		};

		function moveMainPlayer(direction) {
			MPView.moveTo(direction, playerType);
		};

		event.preventDefault();

	});

});