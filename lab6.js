
var game;

function main(){
		var cv = document.getElementById('myCanvas');
		game = new Game(cv);
		window.requestAnimationFrame(game.gameLoop);
}
