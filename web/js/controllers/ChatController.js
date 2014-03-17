define(['jquery',
	'views/ChatView'
], function($, chatView) {

	var toggle = true;

	$("a[href='#chat']").on('click', function() {
		if (toggle) {
			chatView.hideChat();
			toggle = false;
		} else {
			chatView.showChat();
			toggle = true;
		};
	});

	$("#chat_close").on('click', function() {
		chatView.hideChat();
		toggle = false;
	});

});