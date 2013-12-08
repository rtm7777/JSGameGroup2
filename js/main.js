function draw() {
	var canvas = document.getElementById("game_canvas");
	var ctx = canvas.getContext("2d");

	canvas.width = canvas.clientWidth;
	canvas.height = canvas.clientHeight;

	ctx.fillStyle = "rgba(40, 40, 40, 0.6)";
	ctx.fillRect(0, 0, canvas.width, canvas.height);

	ctx.fillStyle = "rgb(200,0,0)";
	ctx.fillRect(10, 10, 55, 50);

	ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
	ctx.fillRect(30, 30, 55, 50);

	ctx.fillStyle = "rgb(200,0,0)";
	ctx.fillRect(canvas.width - 10, 10, -55, 50);

	ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
	ctx.fillRect(canvas.width - 30, 30, -55, 50);

	ctx.fillStyle = "#03A";
    ctx.font = "italic 30pt Arial";
    ctx.textAlign = "center";
    ctx.textBaseline = "center";
    ctx.fillText("Once here will be a game :)", canvas.width/2, canvas.height/2);
}

$(function() {
	draw();
});