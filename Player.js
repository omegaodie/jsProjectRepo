function Player(ctx){
	this.playerimage = new Image();
	this.playerimage.src = "images/p_Down.png";
	this.player_Sprite = new sprite({
    context: ctx,
    width: 96,
    height: 32,
    numberOfFrames: 3,
    ticksPerFrame: 1,
    image: this.playerimage
});
	this.xPos = 20;
	this.yPos = 20;
	this.currentanim = "down"
}

Player.prototype.draw = function(ctx){
	if(this.currentanim = "left"){
			this.playerimage = new Image();
			this.playerimage.src = "images/p_Left.png";
			this.player_Sprite = new sprite({
		    context: ctx,
		    width: 96,
		    height: 32,
		    numberOfFrames: 3,
		    ticksPerFrame: 1,
		    image: this.playerimage
		});
	}else if(this.currentanim = "right"){
			this.playerimage = new Image();
			this.playerimage.src = "images/p_Right.png";
			this.player_Sprite = new sprite({
		    context: ctx,
		    width: 96,
		    height: 32,
		    numberOfFrames: 3,
		    ticksPerFrame: 1,
		    image: this.playerimage
		});
	}else if(this.currentanim = "up"){
			this.playerimage = new Image();
			this.playerimage.src = "images/p_Up.png";
			this.player_Sprite = new sprite({
		    context: ctx,
		    width: 96,
		    height: 32,
		    numberOfFrames: 3,
		    ticksPerFrame: 1,
		    image: this.playerimage
		});
	} else{
			this.playerimage = new Image();
			this.playerimage.src = "images/p_Down.png";
			this.player_Sprite = new sprite({
		    context: ctx,
		    width: 96,
		    height: 32,
		    numberOfFrames: 3,
		    ticksPerFrame: 1,
		    image: this.playerimage
		});
	}
}

Player.prototype.update = function(e){
	var kode = e.keyCode;
	if(kode == 97){
		this.xPos -= 25;
		this.currentanim = "left";
	}
	if(kode == 100){
		this.xPos += 25;
		this.currentanim = "right";
	}
	if(kode == 119){
		this.yPos -= 25;
		this.currentanim = "down";
	}
	if(kode == 115){
		this.yPos += 25;
		this.currentanim = "up";
	}
	this.player_Sprite.render();
	this.player_Sprite.update();
}

Player.prototype.checkCollision = function (goal){
        if ((this.xPos < goal.bx + goal.bheight)&&(this.xPos + 75 > goal.bx)&&(this.yPos + 75 > goal.by)&&(this.yPos < goal.by + goal.bheight))
        {                
            this.ReturnBool = true;              
        }
}

