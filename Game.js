
function Game(canvas){
	this.now = 0;
	this.then = 0;
	ctx = canvas.getContext('2d');
	this.player = new Player(ctx);
}

Game.prototype.gameLoop = function(e){
	game.now = Date.now();
	if((game.then + 100) < game.now){
		game.player.update(e);
		game.player.draw();
		game.then = Date.now();
	}
	window.requestAnimationFrame(game.gameLoop);
}

