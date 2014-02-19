define(['views/ItemsView'], function(ItemsView) {

	var items = [
			{type: 2, posX: 12, posY: 3},
			{type: 1, posX: 10, posY: 15},
			{type: 5, posX: 1, posY: 19},
			{type: 6, posX: 32, posY: 4},
			{type: 10, posX: 10, posY: 12},
			{type: 9, posX: 25, posY: 9},
			{type: 3, posX: 13, posY: 1},
			{type: 5, posX: 17, posY: 8},
			{type: 7, posX: 7, posY: 5}
	];

	ItemsView.render(items);

});