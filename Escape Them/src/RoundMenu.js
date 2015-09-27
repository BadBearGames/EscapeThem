var startButton = null;
var startButton_txt = null;
var roundMenuBackground = null;
var unlocksButton = null;
var unlocksButton_txt = null;
var roundTokens_txt = null;
var roundTokenSprite = null;
var sevenResting = null;
var sevenFlying = null;
var roundMenuFade = null;
var boom = null;
var blastOff_snd = null;
var boom_snd = null;
var roundMenuMuteButton = null;
var roundMenuMuteX = null;
var quitButton = null;
var roundLogo = null;
var htpButton = null;
var htpButton_txt = null;
var roundHighScore_txt = null;
var inviteFriendsButton = null;
var inviteFriendsButton_txt = null;


BasicGame.RoundMenu = function (game) {

};

BasicGame.RoundMenu.prototype = {

	create: function () {
        
        this.stage.backgroundColor = '#ffffff';

        
        this.physics.startSystem(Phaser.Physics.ARCADE);
        
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
            BasicGame.music = this.add.audio('freedomFighter');
            BasicGame.music.play('', 0, 1, true);
            BasicGame.music.volume = BasicGame.musicVolume;
        }

        
        roundMenuBackground = this.add.sprite(this.world.centerX, this.world.centerY, 'roundMenuBackground');
		roundMenuBackground.anchor.setTo(0.5, 0.5);
        roundMenuBackground.width = this.world.width;
        roundMenuBackground.height = this.world.height;
        
        sevenResting = this.add.sprite(this.world.centerX + 250 * BasicGame.scaleP, this.world.centerY + 330 * BasicGame.scaleP, 'sevenResting');
        sevenResting.anchor.setTo(0.5, 0.5);
        sevenResting.animations.add('active', [0, 1, 2], 15, true);
        sevenResting.animations.play('active');
        sevenResting.angle = 110;
        sevenResting.scale.setTo(BasicGame.scaleP, BasicGame.scaleP);
        
        sevenFlying = this.add.sprite(sevenResting.x, sevenResting.y, 'player' + BasicGame.currentCostume);
        sevenFlying.anchor.setTo(0.5, 0.5);
        sevenFlying.scale.setTo(0.7 * BasicGame.scaleP, 0.7 * BasicGame.scaleP);
        if (BasicGame.currentCostume == 0)
        {
            sevenFlying.animations.add('active', [1, 2, 3, 4, 5], 15, true);
        }
        else
        {
            sevenFlying.animations.add('active', [0], 15, true);
        }
        this.physics.enable(sevenFlying, Phaser.Physics.ARCADE);
        sevenFlying.body.collideWorldBounds = false;
        sevenFlying.visible = false;

		
		startButton = this.add.button(this.world.centerX - 200 * BasicGame.scaleP, this.world.centerY, 'button', startRound, this, 1, 0, 2);
        startButton.anchor.setTo(0.5, 0.5);
		startButton_txt = this.add.text(startButton.x, startButton.y, this.cache.getText('gameData').startButton);
    	startButton_txt.anchor.setTo(0.5, 0.5);
    	startButton_txt.font = BasicGame.font;
    	startButton_txt.fontSize = 50 * BasicGame.scaleP;
		grd = startButton_txt.context.createLinearGradient(0, 0, startButton_txt.canvas.width, startButton_txt.canvas.height);
    	grd.addColorStop(0, '#ffffff');   
    	grd.addColorStop(1, '#ff8282');
    	startButton_txt.fill = grd;
		startButton.width = startButton_txt.width + 25 * BasicGame.scaleP;
		startButton.height = startButton_txt.height + 10 * BasicGame.scaleP;
        //startButton.setUpSound(BasicGame.beep);

        
        unlocksButton = this.add.button(startButton.x, startButton.y + 120 * BasicGame.scaleP, 'button', gotoUnlocks, this, 1, 0, 2);
        unlocksButton.anchor.setTo(0.5, 0.5);
		unlocksButton_txt = this.add.text(unlocksButton.x, unlocksButton.y, this.cache.getText('gameData').unlocksButton);
    	unlocksButton_txt.anchor.setTo(0.5, 0.5);
    	unlocksButton_txt.font = BasicGame.font;
    	unlocksButton_txt.fontSize = 50 * BasicGame.scaleP;
		grd = unlocksButton_txt.context.createLinearGradient(0, 0, unlocksButton_txt.canvas.width, unlocksButton_txt.canvas.height);
    	grd.addColorStop(0, '#ffffff');   
    	grd.addColorStop(1, '#ff8282');
    	unlocksButton_txt.fill = grd;
		unlocksButton.width = unlocksButton_txt.width + 25 * BasicGame.scaleP;
		unlocksButton.height = unlocksButton_txt.height + 10 * BasicGame.scaleP;
        unlocksButton.setUpSound(BasicGame.beep);
        
        
        htpButton = this.add.button(unlocksButton.x, unlocksButton.y + 120 * BasicGame.scaleP, 'button', gotoHTP, this, 1, 0, 2);
        htpButton.anchor.setTo(0.5, 0.5);
		htpButton_txt = this.add.text(htpButton.x, htpButton.y, this.cache.getText('gameData').htpButton);
    	htpButton_txt.anchor.setTo(0.5, 0.5);
    	htpButton_txt.font = BasicGame.font;
    	htpButton_txt.fontSize = 45 * BasicGame.scaleP;
		grd = htpButton_txt.context.createLinearGradient(0, 0, htpButton_txt.canvas.width, htpButton_txt.canvas.height);
    	grd.addColorStop(0, '#ffffff');   
    	grd.addColorStop(1, '#ff8282');
    	htpButton_txt.fill = grd;
		htpButton.width = htpButton_txt.width + 25 * BasicGame.scaleP;
		htpButton.height = htpButton_txt.height + 10 * BasicGame.scaleP;
        htpButton.setUpSound(BasicGame.beep);

        
        quitButton = this.add.button(75 * BasicGame.scaleP, this.world.height - 50 * BasicGame.scaleP, 'button', backToMain, this, 1, 0, 2);
        quitButton.anchor.setTo(0.5, 0.5);
		quitButton_txt = this.add.text(quitButton.x, quitButton.y, this.cache.getText('gameData').quitButton);
    	quitButton_txt.anchor.setTo(0.5, 0.5);
    	quitButton_txt.font = BasicGame.font;
    	quitButton_txt.fontSize = 40 * BasicGame.scaleP;
		grd = quitButton_txt.context.createLinearGradient(0, 0, quitButton_txt.canvas.width, quitButton_txt.canvas.height);
    	grd.addColorStop(0, '#ffffff');   
    	grd.addColorStop(1, '#ff8282');
    	quitButton_txt.fill = grd;
		quitButton.width = quitButton_txt.width + 25 * BasicGame.scaleP;
		quitButton.height = quitButton_txt.height + 10 * BasicGame.scaleP;
        quitButton.setUpSound(BasicGame.boop);

        roundLogo = this.add.sprite(this.world.centerX, this.world.centerY - 200 * BasicGame.scaleP, 'logo');
		roundLogo.anchor.setTo(0.5, 0.5);
        roundLogo.scale.setTo(BasicGame.scaleP, BasicGame.scaleP);

        
        
        roundTokenSprite = this.add.sprite(this.world.width - 40 * BasicGame.scaleP, 40 * BasicGame.scaleP, 'token');
        roundTokenSprite.anchor.setTo(0.5, 0.5);
        roundTokenSprite.scale.setTo(0.7 * BasicGame.scaleP, 0.7 * BasicGame.scaleP);
        
        roundTokens_txt = this.add.text(roundTokenSprite.x - 35 * BasicGame.scaleP, roundTokenSprite.y, "" + BasicGame.tokens + "");
    	roundTokens_txt.anchor.setTo(1, 0.5);
    	roundTokens_txt.font = BasicGame.font;
    	roundTokens_txt.fontSize = 30 * BasicGame.scaleP;
        roundTokens_txt.align = 'right';
		grd = roundTokens_txt.context.createLinearGradient(0, 0, roundTokens_txt.canvas.width, roundTokens_txt.canvas.height);
    	grd.addColorStop(0, '#ffffff');   
    	grd.addColorStop(1, '#ffff00');
    	roundTokens_txt.fill = grd;
        
        
        roundHighScore_txt = this.add.text(this.world.centerX, roundTokens_txt.y, this.cache.getText('gameData').highScore + " " + BasicGame.highScore);
    	roundHighScore_txt.anchor.setTo(0.5, 0.5);
    	roundHighScore_txt.font = BasicGame.font;
    	roundHighScore_txt.fontSize = 35 * BasicGame.scaleP;
        roundHighScore_txt.align = 'center';
		/*grd = roundHighScore_txt.context.createLinearGradient(0, 0, roundHighScore_txt.canvas.width, roundHighScore_txt.canvas.height);
    	grd.addColorStop(0, '#ffffff');   
    	grd.addColorStop(1, '#ff8282');*/
    	roundHighScore_txt.fill = '#36ff4c';
        if (BasicGame.highScore == 0)
        {
            roundHighScore_txt.visible = false;
        }
        else
        {
            roundHighScore_txt.visible = true;
        }
        
        inviteFriendsButton = this.add.button(this.world.centerX, quitButton.y, 'button', inviteFBFriends, this, 1, 0, 2);
        inviteFriendsButton.anchor.setTo(0.5, 0.5);
		inviteFriendsButton_txt = this.add.text(inviteFriendsButton.x, inviteFriendsButton.y, this.cache.getText('gameData').inviteFriends);
    	inviteFriendsButton_txt.anchor.setTo(0.5, 0.5);
    	inviteFriendsButton_txt.font = BasicGame.font;
    	inviteFriendsButton_txt.fontSize = 35 * BasicGame.scaleP;
		grd = inviteFriendsButton_txt.context.createLinearGradient(0, 0, inviteFriendsButton_txt.canvas.width, inviteFriendsButton_txt.canvas.height);
    	grd.addColorStop(0, '#ffffff');   
    	grd.addColorStop(1, '#ff8282');
    	inviteFriendsButton_txt.fill = grd;
		inviteFriendsButton.width = inviteFriendsButton_txt.width + 25 * BasicGame.scaleP;
		inviteFriendsButton.height = inviteFriendsButton_txt.height + 10 * BasicGame.scaleP;
        inviteFriendsButton.setUpSound(BasicGame.beep);
        inviteFriendsButton.visible = fd.clayEnabled;
        inviteFriendsButton_txt.visible = fd.clayEnabled;


        
        //BOOM
        boom = this.add.sprite(this.world.centerX, this.world.centerY, 'hud');
        boom.width = this.world.width;
        boom.height = this.world.height;
        boom.anchor.setTo(0.5, 0.5);
        boom.body = null;
        boom.animations.add('emp', [1, 2, 3], 20, false);
        boom.events.onAnimationComplete.add(boomAnimComplete, this);
        boom.visible = false;
        
        
        roundMenuMuteButton = this.add.button(this.world.centerX - 450 * BasicGame.scaleP, this.world.centerY - 320 * BasicGame.scaleP, 'muteButton', roundMenuMute, this, 1, 0, 2);
        roundMenuMuteButton.anchor.setTo(0.5, 0.5);
        roundMenuMuteButton.scale.setTo(BasicGame.scaleP, BasicGame.scaleP);
        roundMenuMuteX = this.add.sprite(roundMenuMuteButton.x, roundMenuMuteButton.y, 'muteX');
        roundMenuMuteX.anchor.setTo(0.5, 0.5);
        roundMenuMuteX.scale.setTo(BasicGame.scaleP, BasicGame.scaleP);
        if (this.sound.mute == false)
        {
            roundMenuMuteX.visible = false;
        }
        else 
        {
            roundMenuMuteX.visible = true;
        }

        
        
        roundMenuFade = this.add.sprite(this.world.centerX, this.world.centerY, 'whiteFlash');
        roundMenuFade.anchor.setTo(0.5, 0.5);
        roundMenuFade.width = this.world.width;
        roundMenuFade.height = this.world.height;
        roundMenuFade.alpha = 0;
        
        if (blastOff_snd == null)
        {
            blastOff_snd = this.add.audio('blastoffSound');
        }
        if (boom_snd == null)
        {
            boom_snd = this.add.audio('launchSound');
        }
        
        if (BasicGame.isNewGame)
        {
            BasicGame.isTutorial = true;
            htpButton.visible = false;
            htpButton_txt.visible = false;
        }
        else
        {
            BasicGame.isTutorial = false;
        }
        
        this.input.onUp.add(roundMenuReleaseUp);
        
        if (fd.clayAdsEnabled)
        {
            fd.ad.show();
        }
	},

	update: function () {
        if (sevenFlying)
        {
            if (sevenFlying.y < (-100 * BasicGame.scaleP))
            {
                roundMenuFade.alpha += this.time.elapsed / 1000;
                if (roundMenuFade.alpha > 1)
                {
                    roundMenuFade.alpha = 1;
                }
            }

            if ((roundMenuFade.alpha >= 1) && (sevenFlying.visible))
            {
                sevenFlying.visible = false;
                roundMenuFade.alpha = 1;
                launchRound();
            }
        }
	},
};

function roundMenuReleaseUp() { //INPUT UP
    
    if ((thisGame.input.activePointer.targetObject != roundMenuMuteButton) && (thisGame.input.activePointer.targetObject != roundMenuMuteX))
    {
        roundMenuMuteButton.frame = 0;
    }
    if ((thisGame.input.activePointer.targetObject != startButton) && (thisGame.input.activePointer.targetObject != startButton_txt))
    {
        startButton.frame = 0;
    }
    if ((thisGame.input.activePointer.targetObject != unlocksButton) && (thisGame.input.activePointer.targetObject != unlocksButton_txt))
    {
        unlocksButton.frame = 0;
    }
    if ((thisGame.input.activePointer.targetObject != quitButton) && (thisGame.input.activePointer.targetObject != quitButton_txt))
    {
        quitButton.frame = 0;
    }
    if ((thisGame.input.activePointer.targetObject != htpButton) && (thisGame.input.activePointer.targetObject != htpButton_txt))
    {
        htpButton.frame = 0;
    }
    if ((thisGame.input.activePointer.targetObject != inviteFriendsButton) && (thisGame.input.activePointer.targetObject != inviteFriendsButton_txt))
    {
        inviteFriendsButton.frame = 0;
    }
}

function gotoHTP()
{
    BasicGame.isTutorial = true;
    startRound();
}

function shutDownRoundMenu() 
{
	if (startButton)
	{
		startButton.destroy();
		startButton = null;
	}
	if (startButton_txt)
	{
        startButton_txt.destroy();
		startButton_txt = null;
	}
    if (quitButton)
	{
		quitButton.destroy();
		quitButton = null;
	}
	if (quitButton_txt)
	{
        quitButton_txt.destroy();
		quitButton_txt = null;
	}

    if (roundMenuBackground)
    {
        roundMenuBackground.destroy();
        roundMenuBackground = null;
    }
    if (unlocksButton)
    {
        unlocksButton.destroy();
        unlocksButton = null;
    }
    if (unlocksButton_txt)
    {
        unlocksButton_txt.destroy();
        unlocksButton_txt = null;
    }
    if (roundTokens_txt)
    {
        roundTokens_txt.destroy();
        roundTokens_txt = null;
    }
    if (roundTokenSprite)
    {
        roundTokenSprite.destroy();
        roundTokenSprite = null;
    }
    if (sevenFlying)
    {
        sevenFlying.destroy();
        sevenFlying = null;
    }
    if (sevenResting)
    {
        sevenResting.destroy();
        sevenResting = null;
    }
    if (roundMenuFade)
    {
        roundMenuFade.destroy();
        roundMenuFade = null;
    }
    if (boom)
    {
        boom.destroy();
        boom = null;
    }
    if (roundMenuMuteButton)
    {
        roundMenuMuteButton.destroy();
        roundMenuMuteButton = null;
    }
    if (roundMenuMuteX)
    {
        roundMenuMuteX.destroy();
        roundMenuMuteX = null;
    }
    if (roundLogo)
    {
        roundLogo.destroy();
        roundLogo = null;
    }
    if (htpButton)
    {
        htpButton.destroy();
        htpButton = null;
    }
    if (htpButton_txt)
    {
        htpButton_txt.destroy();
        htpButton_txt = null;
    }
    if (roundHighScore_txt)
    {
        roundHighScore_txt.destroy();
        roundHighScore_txt = null;
    }
    if (inviteFriendsButton)
    {
        inviteFriendsButton.destroy();
        inviteFriendsButton = null;
    }
    if (inviteFriendsButton_txt)
    {
        inviteFriendsButton_txt.destroy();
        inviteFriendsButton_txt = null;
    }
    
    thisGame.input.onUp.remove(roundMenuReleaseUp, thisGame);
}

function roundMenuMute()
{
    if (thisGame.sound.mute == true)
    {
        thisGame.sound.mute = false;
        roundMenuMuteX.visible = false;
    }
    else
    {
        thisGame.sound.mute = true;
        roundMenuMuteX.visible = true;
    }
}


function startRound() 
{
    if (sevenResting.visible)
    {
        sevenFlying.visible = true;
        sevenFlying.animations.play('active');
        sevenFlying.body.velocity.y = (-1000) * BasicGame.scaleP;

        sevenResting.visible = false;
        sevenResting.animations.stop();
        boom.animations.play('emp');
        boom.visible = true;
        blastOff_snd.play();
        boom_snd.play();
        
        if (fd.clayAdsEnabled)
        {
            fd.ad.hide();
        }
    }
}

function backToMain()
{
    if (fd.clayAdsEnabled)
    {
        fd.ad.hide();
    }
    shutDownRoundMenu();
    thisGame.state.start('MainMenu');
}

function boomAnimComplete(sprite, anim)
{
    sprite.visible = false;
}

function inviteFBFriends()
{
    Clay.Facebook.invite( { caption: "If you're an awesome person, come and play Bad Bear's Escape Them with me!" }, function() {
    console.log( "This is called when at least one friend is successfully invited." );
    } );
}

function launchRound()
{
    shutDownRoundMenu();
    thisGame.state.start('Game');
}

function gotoUnlocks()
{
    if (fd.clayAdsEnabled)
    {
        fd.ad.hide();
    }
    shutDownRoundMenu();
    thisGame.state.start('Unlocks');
}
