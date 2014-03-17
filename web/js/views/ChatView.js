define([
	'jquery'
], function($) {
	var $chat = $(".chat");
	var $chat_messages = $(".chat_messages");

	function showChat() {
		$chat.addClass("hide-chat-styles").removeClass('hide-chat');
		$chat_messages.addClass("scale-messages-styles").removeClass('scale-messages');
	};

	function hideChat() {
		$chat.addClass('hide-chat').removeClass("hide-chat-styles");
		$chat_messages.addClass('scale-messages').removeClass("scale-messages-styles");
	};

	return {
		showChat: showChat,
		hideChat: hideChat
	};

});