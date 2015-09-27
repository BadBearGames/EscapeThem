var roundOver_txt = null;
var enemiesDefeated_txt = null;
var timeSurvived_txt = null;
var finalScore_txt = null;
var newHighScore_txt = null;
var tokens_txt = null;

var continueButton = null;
var continueButton_txt = null;
var postButton = null;
var postButton_txt = null;
var shareButton = null;
var shareButton_txt = null;

var gameOverBackground = null;

var tokenSprite = null;
var sevenRestingGO = null;

var textCount = 0;
var textTimer = 0;

var woosh2_snd = null;
var getCoins_snd = null;
var getHighScore_snd = null;

var isHighScore = false;

var gameOverMuteButton = null;
var gameOverMuteX = null;


BasicGame.GameOver = function (game) {

};

BasicGame.GameOver.prototype = {

	create: function () {
        
        //AUDIO
        if (BasicGame.music != null)
        {
            if (BasicGame.music.name != 'freedomFighter')
            {
                BasicGame.music.stop();
                BasicGame.music = null;
                BasicGame.music = this.add.audio('freedomFighter');
                BasicGame.music.play('', 0, 1, true);
                BasicGame.music.volume = BasicGame.musicVolume;
            }
        }
        else
        {
            BasicGame.music.stop();
            BasicGame.music = null;
            BasicGame.music = this.add.audio('freedomFighter');
            BasicGame.music.play('', 0, 1, true);
            BasicGame.music.volume = BasicGame.musicVolume;
        }

        
        gameOverBackground = this.add.sprite(this.world.centerX, this.world.centerY, 'roundMenuBackground');
		gameOverBackground.anchor.setTo(0.5, 0.5);
        gameOverBackground.width = this.world.width;
        gameOverBackground.height = this.world.height;

		
		roundOver_txt = this.add.text(this.world.centerX - 150 * BasicGame.scaleP, this.world.centerY - 300 * BasicGame.scaleP, this.cache.getText('gameData').roundOver);
    	roundOver_txt.anchor.setTo(0.5, 0.5);
    	roundOver_txt.font = BasicGame.font;
    	roundOver_txt.fontSize = 75 * BasicGame.scaleP;
		grd = roundOver_txt.context.createLinearGradient(0, 0, roundOver_txt.canvas.width, roundOver_txt.canvas.height);
    	grd.addColorStop(0, '#ffffff');   
    	grd.addColorStop(1, '#ff8282');
    	roundOver_txt.fill = grd;
        roundOver_txt.visible = false;
        
        enemiesDefeated_txt = this.add.text(this.world.centerX - 300 * BasicGame.scaleP, this.world.centerY - 150 * BasicGame.scaleP, this.cache.getText('gameData').enemiesDefeated + ": " + BasicGame.enemiesDefeated);
    	enemiesDefeated_txt.anchor.setTo(0.5, 0.5);
    	enemiesDefeated_txt.font = BasicGame.font;
    	enemiesDefeated_txt.fontSize = 30 * BasicGame.scaleP;
		grd = enemiesDefeated_txt.context.createLinearGradient(0, 0, enemiesDefeated_txt.canvas.width, enemiesDefeated_txt.canvas.height);
    	grd.addColorStop(0, '#ffffff');   
    	grd.addColorStop(1, '#ffffff');
    	enemiesDefeated_txt.fill = grd;
        enemiesDefeated_txt.visible = false;

        timeSurvived_txt = this.add.text(this.world.centerX - 300 * BasicGame.scaleP, this.world.centerY, this.cache.getText('gameData').timeSurvived + ": " + this.math.roundTo(BasicGame.roundTime, 0) + " " + this.cache.getText('gameData').seconds);
    	timeSurvived_txt.anchor.setTo(0.5, 0.5);
    	timeSurvived_txt.font = BasicGame.font;
    	timeSurvived_txt.fontSize = 24 * BasicGame.scaleP;
		grd = timeSurvived_txt.context.createLinearGradient(0, 0, timeSurvived_txt.canvas.width, timeSurvived_txt.canvas.height);
    	grd.addColorStop(0, '#ffffff');   
    	grd.addColorStop(1, '#ffffff');
    	timeSurvived_txt.fill = grd;
        timeSurvived_txt.visible = false;

		finalScore_txt = this.add.text(this.world.centerX + 300 * BasicGame.scaleP, this.world.centerY - 150 * BasicGame.scaleP, this.cache.getText('gameData').finalScore + ": " + BasicGame.roundScore);
    	finalScore_txt.anchor.setTo(0.5, 0.5);
    	finalScore_txt.font = BasicGame.font;
    	finalScore_txt.fontSize = 45 * BasicGame.scaleP;
		grd = finalScore_txt.context.createLinearGradient(0, 0, finalScore_txt.canvas.width, finalScore_txt.canvas.height);
    	grd.addColorStop(0, '#ffffff');   
    	grd.addColorStop(1, '#ff8282');
    	finalScore_txt.fill = grd;
        finalScore_txt.visible = false;
        
        tokens_txt = this.add.text(this.world.centerX, this.world.centerY + 210 * BasicGame.scaleP, this.cache.getText('gameData').tokens);
    	tokens_txt.anchor.setTo(1, 0.5);
    	tokens_txt.font = BasicGame.font;
    	tokens_txt.fontSize = 50 * BasicGame.scaleP;
		grd = tokens_txt.context.createLinearGradient(0, 0, tokens_txt.canvas.width, tokens_txt.canvas.height);
    	grd.addColorStop(0, '#ffffff');   
    	grd.addColorStop(1, '#ffff00');
    	tokens_txt.fill = grd;
        tokens_txt.visible = false;
        tokens_txt.x = this.world.centerX + (tokens_txt.width / 2);
        
        tokenSprite = this.add.sprite(tokens_txt.x + 50 * BasicGame.scaleP, tokens_txt.y, 'token');
        tokenSprite.scale.setTo(BasicGame.scaleP, BasicGame.scaleP);
        tokenSprite.anchor.setTo(0.5, 0.5);
        tokenSprite.visible = false;
        
        newHighScore_txt = this.add.text(this.world.centerX + 300 * BasicGame.scaleP, this.world.centerY, this.cache.getText('gameData').newHigh);
    	newHighScore_txt.anchor.setTo(0.5, 0.5);
    	newHighScore_txt.font = BasicGame.font;
    	newHighScore_txt.fontSize = 40 * BasicGame.scaleP;
		grd = newHighScore_txt.context.createLinearGradient(0, 0, newHighScore_txt.canvas.width, newHighScore_txt.canvas.height);
    	grd.addColorStop(0, '#ffffff');   
    	grd.addColorStop(1, '#ff8282');
    	newHighScore_txt.fill = grd;
        newHighScore_txt.visible = false;
        
        //BUTTONS
        continueButton = this.add.button(this.world.centerX, this.world.centerY + 320 * BasicGame.scaleP, 'button', gotoRoundMenu, this, 1, 0, 2);
        continueButton.anchor.setTo(0.5, 0.5);
		continueButton_txt = this.add.text(continueButton.x, continueButton.y, this.cache.getText('gameData').continueButton);
    	continueButton_txt.anchor.setTo(0.5, 0.5);
    	continueButton_txt.font = BasicGame.font;
    	continueButton_txt.fontSize = 50 * BasicGame.scaleP;
		grd = continueButton_txt.context.createLinearGradient(0, 0, continueButton_txt.canvas.width, continueButton_txt.canvas.height);
    	grd.addColorStop(0, '#ffffff');   
    	grd.addColorStop(1, '#ff8282');
    	continueButton_txt.fill = grd;
        continueButton.width = continueButton_txt.width + 25 * BasicGame.scaleP;
		continueButton.height = continueButton_txt.height + 10 * BasicGame.scaleP;
        continueButton.setUpSound(BasicGame.beep);
        
        
        postButton = this.add.button(this.world.centerX + 300 * BasicGame.scaleP, this.world.centerY + 100 * BasicGame.scaleP, 'button', postScore, this, 1, 0, 2);
        postButton.anchor.setTo(0.5, 0.5);
		postButton_txt = this.add.text(postButton.x, postButton.y, this.cache.getText('gameData').postButton);
    	postButton_txt.anchor.setTo(0.5, 0.5);
    	postButton_txt.font = BasicGame.font;
    	postButton_txt.fontSize = 30 * BasicGame.scaleP;
		grd = postButton_txt.context.createLinearGradient(0, 0, postButton_txt.canvas.width, postButton_txt.canvas.height);
    	grd.addColorStop(0, '#ffffff');   
    	grd.addColorStop(1, '#ff8282');
    	postButton_txt.fill = grd;
        postButton.width = postButton_txt.width + 25 * BasicGame.scaleP;
		postButton.height = postButton_txt.height + 10 * BasicGame.scaleP;
        postButton.visible = false;
        postButton_txt.visible = false;
        postButton.setUpSound(BasicGame.beep);
        
        shareButton = this.add.button(this.world.centerX - 300 * BasicGame.scaleP, postButton.y, 'button', shareScore, this, 1, 0, 2);
        shareButton.anchor.setTo(0.5, 0.5);
		shareButton_txt = this.add.text(shareButton.x, shareButton.y, this.cache.getText('gameData').shareButton);
    	shareButton_txt.anchor.setTo(0.5, 0.5);
    	shareButton_txt.font = BasicGame.font;
    	shareButton_txt.fontSize = 30 * BasicGame.scaleP;
		grd = shareButton_txt.context.createLinearGradient(0, 0, shareButton_txt.canvas.width, shareButton_txt.canvas.height);
    	grd.addColorStop(0, '#ffffff');   
    	grd.addColorStop(1, '#ff8282');
    	shareButton_txt.fill = grd;
        shareButton.width = shareButton_txt.width + 25 * BasicGame.scaleP;
		shareButton.height = shareButton_txt.height + 10 * BasicGame.scaleP;
        shareButton.visible = false;
        shareButton_txt.visible = false;
        shareButton.setUpSound(BasicGame.beep);

        
        sevenRestingGO = this.add.sprite(this.world.centerX + 250 * BasicGame.scaleP, this.world.centerY + 330 * BasicGame.scaleP, 'sevenResting');
        sevenRestingGO.anchor.setTo(0.5, 0.5);
        sevenRestingGO.scale.setTo(BasicGame.scaleP, BasicGame.scaleP);
        sevenRestingGO.animations.add('active', [0, 1, 2], 15, true);
        sevenRestingGO.animations.play('active');
        sevenRestingGO.angle = 110;
        
        gameOverMuteButton = this.add.button(this.world.centerX - 450 * BasicGame.scaleP, this.world.centerY - 320 * BasicGame.scaleP, 'muteButton', gameOverMute, this, 1, 0, 2);
        gameOverMuteButton.anchor.setTo(0.5, 0.5);
        gameOverMuteButton.scale.setTo(BasicGame.scaleP, BasicGame.scaleP);
        gameOverMuteX = this.add.sprite(gameOverMuteButton.x, gameOverMuteButton.y, 'muteX');
        gameOverMuteX.anchor.setTo(0.5, 0.5);
        gameOverMuteX.scale.setTo(BasicGame.scaleP, BasicGame.scaleP);
        if (this.sound.mute == false)
        {
            gameOverMuteX.visible = false;
        }
        else 
        {
            gameOverMuteX.visible = true;
        }



        if (woosh2_snd == null)
        {
            woosh2_snd = this.add.audio('wooshSound');
        }
        if (getCoins_snd == null)
        {
            getCoins_snd = this.add.audio('getCoinsSound');
        }
        if (getHighScore_snd == null)
        {
            getHighScore_snd = this.add.audio('getHighScoreSound');
        }
        
        rewardTokens();
        if (BasicGame.roundScore > BasicGame.highScore)
        {
            BasicGame.highScore = BasicGame.roundScore;
            isHighScore = true;
        }
        else
        {
            isHighScore = false;
        }
        saveData();
        
        //SAVE GAME
        
        textCount = 1;
        textTimer = 300;
        
        this.input.onUp.add(gameOverReleaseUp);
	},

	update: function () {
        if (postButton)
        {
        if (textCount < 8)
        {
            if (textTimer > 0)
            {
                textTimer -= this.time.elapsed;
            }
            else
            {
                switch (textCount)
                {
                    case 1:
                    roundOver_txt.visible = true;
                    woosh2_snd.play();
                    break;
                    
                    case 2:
                    enemiesDefeated_txt.visible = true;
                    woosh2_snd.play();
                    break;
                    
                    case 3:
                    timeSurvived_txt.visible = true;
                    woosh2_snd.play();
                    break;
                    
                    case 4:
                    finalScore_txt.visible = true;
                    woosh2_snd.play();
                    break;
                    
                    case 5:
                    checkHighScore();
                    break;
                        
                    case 6:
                    if (fd.clayEnabled)
                    {
                        shareButton.visible = true;
                        shareButton_txt.visible = true;
                    }
                    postButton.visible = true;
                    postButton_txt.visible = true;
                    woosh2_snd.play();
                    break;

                    case 7:
                    tokens_txt.visible = true;
                    tokenSprite.visible = true;
                    if (thisGame.math.roundTo((BasicGame.roundScore / BasicGame.tokensFactor) - ((BasicGame.roundScore / BasicGame.tokensFactor) % 1), 0) > 0)
                    {
                        getCoins_snd.play();
                    }
                    break;
                }
                textTimer = 400;
                textCount++;
            }
        }
            
            
        }
	},
};

function rewardTokens()
{
    BasicGame.tokens += thisGame.math.roundTo((BasicGame.roundScore / BasicGame.tokensFactor) - ((BasicGame.roundScore / BasicGame.tokensFactor) % 1), 0);
    tokens_txt.text = thisGame.cache.getText('gameData').tokens + " +" + thisGame.math.roundTo((BasicGame.roundScore / BasicGame.tokensFactor) - ((BasicGame.roundScore / BasicGame.tokensFactor) % 1), 0);
}

function checkHighScore()
{
    if (isHighScore)
    {
        newHighScore_txt.visible = true
        getHighScore_snd.play();
    }
    else
    {
        if (fd.clayEnabled)
        {
            shareButton.x = postButton.x;
            shareButton.y = postButton.y;
            shareButton_txt.x = postButton_txt.x;
            shareButton_txt.y = postButton_txt.y;
            shareButton.visible = true;
            shareButton_txt.visible = true;
        }
        woosh2_snd.play();
        postButton.y = newHighScore_txt.y;
        postButton_txt.y = newHighScore_txt.y;
        postButton.visible = true;
        postButton_txt.visible = true;
        textCount++;
    }
}

function gotoRoundMenu()
{
    shutDownGameOver();
    thisGame.state.start('RoundMenu');
}

function gameOverMute()
{
    if (thisGame.sound.mute == true)
    {
        thisGame.sound.mute = false;
        gameOverMuteX.visible = false;
    }
    else
    {
        thisGame.sound.mute = true;
        gameOverMuteX.visible = true;
    }
}


function shareScore()
{
    /*Clay.Facebook.post( { message: thisGame.cache.getText('gameData').fbMessage1 + BasicGame.roundScore + thisGame.cache.getText('gameData').fbMessage2, link: thisGame.cache.getText('gameData').fbUrl, name: thisGame.cache.getText('gameData').fbUrlName//, picture: thisGame.cache.getText('gameData').fbUrlPicture
    }, function(obj) {
    // Optional callback
    console.log( obj );
    } );*/
    
    Clay.Facebook.post( { 
    message: thisGame.cache.getText('gameData').fbMessage1 + BasicGame.roundScore + thisGame.cache.getText('gameData').fbMessage2,
    link: thisGame.cache.getText('gameData').fbUrl,
    name: thisGame.cache.getText('gameData').fbUrlName,
    picture: thisGame.cache.getText('gameData').fbUrlPicture
    }, function(obj) {
    console.log( obj );
    } );

}

function postScore()
{
    fd.leaderboard.post( { score: BasicGame.roundScore }, function( response ) {
    // Callback
    console.log( response );
    fd.leaderboard.show();
    } );
    //fd.leaderboard.show();
}

function gameOverReleaseUp() { //INPUT UP
    
    if ((thisGame.input.activePointer.targetObject != gameOverMuteButton) && (thisGame.input.activePointer.targetObject != gameOverMuteX))
    {
        gameOverMuteButton.frame = 0;
    }
    if ((thisGame.input.activePointer.targetObject != postButton) && (thisGame.input.activePointer.targetObject != postButton_txt))
    {
        postButton.frame = 0;
    }
    if ((thisGame.input.activePointer.targetObject != continueButton) && (thisGame.input.activePointer.targetObject != continueButton_txt))
    {
        continueButton.frame = 0;
    }
}


function shutDownGameOver() 
{
	if (roundOver_txt)
	{
		roundOver_txt.destroy();
		roundOver_txt = null;
	}
    if (enemiesDefeated_txt)
    {
        enemiesDefeated_txt.destroy();
        enemiesDefeated_txt = null;
    }
    if (timeSurvived_txt)
    {
        timeSurvived_txt.destroy();
        timeSurvived_txt = null;
    }
    if (finalScore_txt)
    {
        finalScore_txt.destroy();
        finalScore_txt = null;
    }
    if (newHighScore_txt)
    {
        newHighScore_txt.destroy();
        newHighScore_txt = null;
    }
    if (tokens_txt)
    {
        tokens_txt.destroy();
        tokens_txt = null;
    }
    if (gameOverBackground)
    {
        gameOverBackground.destroy();
        gameOverBackground = null;
    }
    if (continueButton)
    {
        continueButton.destroy();
        continueButton = null;
    }
    if (continueButton_txt)
    {
        continueButton_txt.destroy();
        continueButton_txt = null;
    }
    if (postButton)
    {
        postButton.destroy();
        postButton = null;
    }
    if (postButton_txt)
    {
        postButton_txt.destroy();
        postButton_txt = null;
    }
    if (tokenSprite)
    {
        tokenSprite.destroy();
        tokenSprite = null;
    }
    if (sevenRestingGO)
    {
        sevenRestingGO.destroy();
        sevenRestingGO = null;
    }
    if (gameOverMuteButton)
    {
        gameOverMuteButton.destroy();
        gameOverMuteButton = null;
    }
    if (gameOverMuteX)
    {
        gameOverMuteX.destroy();
        gameOverMuteX = null;
    }
    if (shareButton)
    {
        shareButton.destroy();
        shareButton = null;
    }
    if (shareButton_txt)
    {
        shareButton_txt.destroy();
        shareButton_txt = null;
    }
    thisGame.input.onUp.remove(gameOverReleaseUp, thisGame);
}
