
function Game(canvas){
	ctx = canvas.getContext('2d');
	this.playerimage = new Image();
	this.playerimage.src = "images/player.png";
	this.player = new sprite({
    context: ctx,
    width: 96,
    height: 32,
    numberOfFrames: 3,
    ticksPerFrame: 1,
    image: this.playerimage
});
}

Game.prototype.gameLoop = function(e){
	game.player.update();
	game.player.render();
	window.requestAnimationFrame(game.gameLoop);
}

