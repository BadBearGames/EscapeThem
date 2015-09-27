var cutStage = 0;

var fingerprint = null;
var swarmLogo = null;
var openingLogo = null;

var cutscene_txt = null;

var nextButton = null;
var nextButton_txt = null;
var previousButton = null;
var previousButton_txt = null;
var skipButton = null;
var skipButton_txt = null;

var login_snd = null;
var logoff_snd = null;

var cutsceneMuteButton = null;
var cutsceneMuteX = null;

var cutImage = null;

BasicGame.Cutscene = function (game) {

};

BasicGame.Cutscene.prototype = {

	create: function () 
	{
        if (login_snd == null)
        {
            login_snd = this.add.audio('enemyWarningSound');
        }
        if (logoff_snd == null)
        {
            logoff_snd = this.add.audio('enemyWarningSound')
        }
        
		BasicGame.music.stop();
        BasicGame.music = null;

		this.stage.backgroundColor = '#000000';
        
        cutImage = this.add.sprite(this.world.centerX, this.world.centerY - 150 * BasicGame.scaleP, 'cutscene1');
        cutImage.anchor.setTo(0.5, 0.5);
        cutImage.scale.setTo(BasicGame.scaleP, BasicGame.scaleP);
        cutImage.visible = false;

		openingLogo = this.add.sprite(this.world.centerX, this.world.centerY, 'logo');
		openingLogo.anchor.setTo(0.5, 0.5);
		openingLogo.visible = false;
        openingLogo.scale.setTo(BasicGame.scaleP, BasicGame.scaleP);
		
		swarmLogo = this.add.sprite(this.world.centerX, this.world.centerY - 20 * BasicGame.scaleP, 'swarmSymbol');
		swarmLogo.anchor.setTo(0.5, 0.5);
		swarmLogo.visible = false;
        swarmLogo.scale.setTo(BasicGame.scaleP, BasicGame.scaleP);
		
		fingerprint = this.add.sprite(this.world.centerX, this.world.centerY - 70 * BasicGame.scaleP, 'fingerprint');
		fingerprint.anchor.setTo(0.5, 0.5);
        fingerprint.scale.setTo(0.7 * BasicGame.scaleP, 0.7 * BasicGame.scaleP);
		fingerprint.visible = false;
		
		cutscene_txt = this.add.text(this.world.centerX, this.world.centerY + 30 * BasicGame.scaleP, "");
    	cutscene_txt.anchor.setTo(0.5, 0.5);
    	cutscene_txt.font = BasicGame.font;
    	cutscene_txt.fontSize = 30 * BasicGame.scaleP;
        cutscene_txt.align = 'center';
        cutscene_txt.fill = '#ffffff';
		cutscene_txt.visible = false;
        
        nextButton = this.add.button(this.world.width - 100 * BasicGame.scaleP, this.world.height - 50 * BasicGame.scaleP, 'yellowButton', nextScene, this, 1, 0, 2);
        nextButton.anchor.setTo(0.5, 0.5);
		nextButton_txt = this.add.text(nextButton.x, nextButton.y, this.cache.getText('gameData').nextButton);
    	nextButton_txt.anchor.setTo(0.5, 0.5);
    	nextButton_txt.font = BasicGame.font;
    	nextButton_txt.fontSize = 40 * BasicGame.scaleP;
    	nextButton_txt.fill = '#ffea00';
        nextButton.width = nextButton_txt.width + 25 * BasicGame.scaleP;
		nextButton.height = nextButton_txt.height + 10 * BasicGame.scaleP;
        nextButton.setUpSound(BasicGame.beep);
        nextButton.visible = false;
        nextButton_txt.visible = false;
        
        previousButton = this.add.button(100 * BasicGame.scaleP, this.world.height - 50 * BasicGame.scaleP, 'yellowButton', previousScene, this, 1, 0, 2);
        previousButton.anchor.setTo(0.5, 0.5);
		previousButton_txt = this.add.text(previousButton.x, previousButton.y, this.cache.getText('gameData').previousButton);
    	previousButton_txt.anchor.setTo(0.5, 0.5);
    	previousButton_txt.font = BasicGame.font;
    	previousButton_txt.fontSize = 40 * BasicGame.scaleP;
    	previousButton_txt.fill = '#ffea00';
        previousButton.width = previousButton_txt.width + 25 * BasicGame.scaleP;
		previousButton.height = previousButton_txt.height + 10 * BasicGame.scaleP;
        previousButton.setUpSound(BasicGame.boop);
        previousButton.visible = false;
        previousButton_txt.visible = false;

        
        skipButton = this.add.button(this.world.width - 100 * BasicGame.scaleP, 50 * BasicGame.scaleP, 'yellowButton', skipCutscene, this, 1, 0, 2);
        skipButton.anchor.setTo(0.5, 0.5);
		skipButton_txt = this.add.text(skipButton.x, skipButton.y, this.cache.getText('gameData').skipButton);
    	skipButton_txt.anchor.setTo(0.5, 0.5);
    	skipButton_txt.font = BasicGame.font;
    	skipButton_txt.fontSize = 40 * BasicGame.scaleP;
    	skipButton_txt.fill = '#ffea00';
        skipButton.width = skipButton_txt.width + 25 * BasicGame.scaleP;
		skipButton.height = skipButton_txt.height + 10 * BasicGame.scaleP;
        skipButton.setUpSound(BasicGame.boop);

        cutsceneMuteButton = this.add.button(this.world.centerX - 450 * BasicGame.scaleP, this.world.centerY - 320 * BasicGame.scaleP, 'muteButton', cutsceneMute, this, 1, 0, 2);
        cutsceneMuteButton.anchor.setTo(0.5, 0.5);
        cutsceneMuteButton.scale.setTo(BasicGame.scaleP, BasicGame.scaleP);
        cutsceneMuteX = this.add.sprite(cutsceneMuteButton.x, cutsceneMuteButton.y, 'muteX');
        cutsceneMuteX.anchor.setTo(0.5, 0.5);
        cutsceneMuteX.scale.setTo(BasicGame.scaleP, BasicGame.scaleP);
        if (this.sound.mute == false)
        {
            cutsceneMuteX.visible = false;
        }
        else 
        {
            cutsceneMuteX.visible = true;
        }


		//ffea00
		cutStage = 1;
		
		this.input.onDown.add(scan);
        this.input.onUp.add(cutsceneReleaseUp);
		this.time.events.add(Phaser.Timer.SECOND * 2, cutsceneTimer, this);
	},

	update: function () 
	{
        if (swarmLogo.visible)
        {
            if (this.rnd.integerInRange(1, 10) == 5)
            {
                swarmLogo.alpha = this.rnd.integerInRange(40, 100) * 0.01;
            }
            if (this.rnd.integerInRange(1, 15) == 5)
            {
                swarmLogo.x = this.rnd.integerInRange(this.world.centerX - 10 * BasicGame.scaleP, this.world.centerX + 10 * BasicGame.scaleP);
            }
            if (this.rnd.integerInRange(1, 15) == 5)
            {
                swarmLogo.y = this.rnd.integerInRange(this.world.centerY - 20 - 5 * BasicGame.scaleP, this.world.centerY - 20 + 5 * BasicGame.scaleP);
            }
        }
        if (cutscene_txt.visible)
        {
            if (this.rnd.integerInRange(1, 10) == 5)
            {
                cutscene_txt.alpha = this.rnd.integerInRange(85, 100) * 0.01;
            }
            if (this.rnd.integerInRange(1, 70) == 5)
            {
                cutscene_txt.x = this.rnd.integerInRange(this.world.centerX - 10 * BasicGame.scaleP, this.world.centerX + 10 * BasicGame.scaleP);
            }
            if (this.rnd.integerInRange(1, 70) == 5)
            {
                cutscene_txt.y = this.rnd.integerInRange(this.world.centerY + 145 * BasicGame.scaleP, this.world.centerY + 155 * BasicGame.scaleP);
            }
        }
        if (fingerprint.visible)
        {
            if (this.rnd.integerInRange(1, 10) == 5)
            {
                fingerprint.alpha = this.rnd.integerInRange(40, 100) * 0.01;
            }
            if (this.rnd.integerInRange(1, 45) == 5)
            {
                fingerprint.x = this.rnd.integerInRange(this.world.centerX - 10 * BasicGame.scaleP, this.world.centerX + 10 * BasicGame.scaleP);
            }
            if (this.rnd.integerInRange(1, 45) == 5)
            {
                fingerprint.y = this.rnd.integerInRange(this.world.centerY - 20 * BasicGame.scaleP, this.world.centerY);
            }
        }
        
        if ((cutStage >= 5) && (cutStage < 10))
        {
            previousButton.visible = true;
            previousButton_txt.visible = true;
        }
        else
        {
            previousButton.visible = false;
            previousButton_txt.visible = false;
        }
        
        if (cutStage >= 10)
        {
            if (nextButton.visible)
            {
                nextButton.visible = false;
                nextButton_txt.visible = false;
                skipButton.visible = false;
                skipButton_txt.visible = false;
            }
        }
        
        if (cutStage >= 12)
        {
            if (BasicGame.music.volume > 0)
            {
                BasicGame.music.volume -= 0.0001 * this.time.elapsed;
            }
            else
            {
                BasicGame.music.volume = 0;
            }
        }
        
	},
};


function scan()
{
	if (cutStage == 4)
    {
        if (fingerprint.visible == true)
        {
            login_snd.play();
        }
        fingerprint.visible = false;
        nextButton.visible = true;
        nextButton_txt.visible = true;
        setCutsceneText();
        //Buttons visible
    }
}

function cutsceneTimer()
{
	switch (cutStage)
	{
			case 1:
			//setCutsceneText();
			BasicGame.music = this.add.audio('theHive');
        	BasicGame.music.play('', 0, 1, true);
        	BasicGame.music.volume = BasicGame.musicVolume;
			thisGame.time.events.add(Phaser.Timer.SECOND * 0, cutsceneTimer, thisGame);
			break;
			
			case 2:
			setCutsceneText();
			thisGame.time.events.add(Phaser.Timer.SECOND * 4, cutsceneTimer, thisGame);
            swarmLogo.visible = true;
			break;
            
            case 3:
            setCutsceneText();
            swarmLogo.visible = false;
            fingerprint.visible = true;
            break;
			
			case 10:
			cutscene_txt.visible = false;
            thisGame.time.events.add(Phaser.Timer.SECOND * 2, cutsceneTimer, thisGame);
			break;
			
			case 11:
            openingLogo.visible = true;
			thisGame.time.events.add(Phaser.Timer.SECOND * 4, cutsceneTimer, thisGame);
			break;
			
			case 12:
			openingLogo.visible = false;
            thisGame.time.events.add(Phaser.Timer.SECOND * 3.5, cutsceneTimer, thisGame);
			break;
            
            case 13:
            skipCutscene();
            break;
	}
    cutStage++;
}

function setCutsceneText()
{
	switch (cutStage)
	{
			case 1:
			cutscene_txt.text = thisGame.cache.getText('gameData').cutsceneText1;
            cutscene_txt.y = thisGame.world.centerY;
            cutscene_txt.fontSize = 40 * BasicGame.scaleP;
			cutscene_txt.fill = '#ffffff';
			break;
			
			case 2:
			cutscene_txt.text = thisGame.cache.getText('gameData').cutsceneText2;
            cutscene_txt.y = thisGame.world.centerY + 150 * BasicGame.scaleP;
            cutscene_txt.fontSize = 30 * BasicGame.scaleP;
			cutscene_txt.fill = '#ffea00';
			break;
			
			case 3:
			if (BasicGame.isDesktop)
			{
				cutscene_txt.text = thisGame.cache.getText('gameData').cutsceneText3Click;
			}
			else
			{
				cutscene_txt.text = thisGame.cache.getText('gameData').cutsceneText3Touch;
			}
			cutscene_txt.fill = '#ffea00';
			break;
			
			case 4:
			cutscene_txt.text = thisGame.cache.getText('gameData').cutsceneText4;
			cutscene_txt.fill = '#ff4747';
            cutImage.visible = true;
            cutImage.loadTexture('cutscene1');
			break;
			
			case 5:
			cutscene_txt.text = thisGame.cache.getText('gameData').cutsceneText5;
			cutscene_txt.fill = '#ff4747';
            cutImage.loadTexture('cutscene2');
			break;
			
			case 6:
			cutscene_txt.text = thisGame.cache.getText('gameData').cutsceneText6;
			cutscene_txt.fill = '#ff4747';
            cutImage.loadTexture('cutscene3');
			break;
			
			case 7:
			cutscene_txt.text = thisGame.cache.getText('gameData').cutsceneText7;
			cutscene_txt.fill = '#ff4747';
            cutImage.loadTexture('cutscene4');
			break;
			
			case 8:
			cutscene_txt.text = thisGame.cache.getText('gameData').cutsceneText8;
			cutscene_txt.fill = '#ff4747';
            cutImage.loadTexture('cutscene5');
			break;
			
			case 9:
			cutscene_txt.text = thisGame.cache.getText('gameData').cutsceneText9;
			cutscene_txt.fill = '#ff4747';
			break;
			
			case 10:
			cutscene_txt.text = thisGame.cache.getText('gameData').cutsceneText10;
            cutscene_txt.fill = '#ffea00';
			break;
	}
	cutscene_txt.visible = true;
}

function nextScene()
{
    cutStage++;
	setCutsceneText();
    if (cutStage == 10)
    {
        logoff_snd.play();
        cutImage.visible = false;
        thisGame.time.events.add(Phaser.Timer.SECOND * 4, cutsceneTimer, thisGame);
    }
}

function previousScene()
{
	cutStage--;
    setCutsceneText();
}

function skipCutscene()
{
	shutDownCutscene();
    thisGame.state.start('RoundMenu');
}

function cutsceneReleaseUp() { //INPUT UP
    
    if ((thisGame.input.activePointer.targetObject != nextButton) && (thisGame.input.activePointer.targetObject != nextButton_txt))
    {
        nextButton.frame = 0;
    }
    if ((thisGame.input.activePointer.targetObject != previousButton) && (thisGame.input.activePointer.targetObject != previousButton_txt))
    {
        previousButton.frame = 0;
    }
    if ((thisGame.input.activePointer.targetObject != skipButton) && (thisGame.input.activePointer.targetObject != skipButton_txt))
    {
        skipButton.frame = 0;
    }
    if ((thisGame.input.activePointer.targetObject != cutsceneMuteButton) && (thisGame.input.activePointer.targetObject != cutsceneMuteX))
    {
        cutsceneMuteButton.frame = 0;
    }
}

function cutsceneMute()
{
    if (thisGame.sound.mute == true)
    {
        thisGame.sound.mute = false;
        cutsceneMuteX.visible = false;
    }
    else
    {
        thisGame.sound.mute = true;
        cutsceneMuteX.visible = true;
    }
}



function shutDownCutscene()
{
	if (openingLogo)
	{
		openingLogo.destroy();
		openingLogo = null;
	}
	if (fingerprint)
	{
		fingerprint.destroy();
		fingerprint = null;
	}
	if (cutscene_txt)
	{
		cutscene_txt.destroy();
		cutscene_txt = null;
	}
	if (swarmLogo)
	{
		swarmLogo.destroy();
		swarmLogo = null;
	}
    if (nextButton)
    {
        nextButton.destroy();
        nextButton = null;
    }
    if (nextButton_txt)
    {
        nextButton_txt.destroy();
        nextButton_txt = null;
    }
    if (previousButton)
    {
        previousButton.destroy();
        previousButton = null;
    }
    if (previousButton_txt)
    {
        previousButton_txt.destroy();
        previousButton_txt = null;
    }
    if (skipButton)
    {
        skipButton.destroy();
        skipButton = null;
    }
    if (skipButton_txt)
    {
        skipButton_txt.destroy();
        skipButton_txt = null;
    }
    if (cutsceneMuteX)
    {
        cutsceneMuteX.destroy();
        cutsceneMuteX = null;
    }
    if (cutsceneMuteButton)
    {
        cutsceneMuteButton.destroy();
        cutsceneMuteButton = null;
    }
    if (cutImage)
    {
        cutImage.destroy();
        cutImage = null;
    }
	thisGame.input.onDown.remove(scan, thisGame);
    thisGame.input.onUp.remove(cutsceneReleaseUp, thisGame);
}