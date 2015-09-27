var loaderBarBack = null;
var loaderBarMiddle = null;
var loaderBarFront = null;
var withSoundButton = null;
var withoutSoundButton = null;
var withSound_txt = null;
var withoutSound_txt = null;
var tempTitle = null;



BasicGame.Preloader = function (game) {

	this.background = null;
	this.preloadBar = null;

	this.ready = false;

};

WebFontConfig = {

    //  'active' means all requested fonts have finished loading
    //  We set a 1 second delay before calling 'createText'.
    //  For some reason if we don't the browser cannot render the text the first time it's created.
    //active: function() { thisGame.time.events.add(Phaser.Timer.SECOND, createText, thisGame); },

    //  The Google Fonts we want to load (specify as many as you like in the array)
    /*google: {
      families: ['Quantico::latin']
    }*/

};


BasicGame.Preloader.prototype = {

	preload: function () {
		
        tempTitle = this.add.sprite(this.world.centerX, this.world.centerY - 250 * BasicGame.scaleP, 'logo');
        tempTitle.scale.setTo(0.8 * BasicGame.scaleP, 0.8 * BasicGame.scaleP);
		tempTitle.anchor.setTo(0.5, 0.5);

        
		//Loader Bar
        loaderBarBack = this.add.sprite(this.world.centerX, this.world.centerY + 270 * BasicGame.scaleP, 'energyBarBack');
        loaderBarBack.anchor.setTo(0.5, 0.5);
        loaderBarBack.scale.setTo(BasicGame.scaleP, BasicGame.scaleP);
        loaderBarMiddle = this.add.sprite(loaderBarBack.x, loaderBarBack.y, 'energyBarMiddle');
        loaderBarMiddle.x = loaderBarBack.x - ((loaderBarMiddle.width * BasicGame.scaleP) / 2);
        this.load.setPreloadSprite(loaderBarMiddle);
        loaderBarMiddle.anchor.setTo(0, 0.5);
        loaderBarMiddle.scale.setTo(BasicGame.scaleP, BasicGame.scaleP);
        loaderBarFront = this.add.sprite(loaderBarBack.x, loaderBarBack.y, 'energyBarFront');
        loaderBarFront.anchor.setTo(0.5, 0.5);
        loaderBarFront.scale.setTo(BasicGame.scaleP, BasicGame.scaleP);
        loaderBarFront.animations.add('electric', [0, 1, 2], 10, true);
        loaderBarFront.animations.play('electric');

		
		//this.load.setPreloadSprite(loaderBarMiddle);

		//GRAPHICS
		this.load.image('badBearGamesLogo', 'assets/badBearGamesLogo.png');
        this.load.image('swarmSymbol', 'assets/swarmSymbol.png');
        this.load.image('fingerprint', 'assets/fingerprint.png');
		this.load.image('background0', 'assets/background.png');
        this.load.image('background1', 'assets/backgroundCosmic.png');
        this.load.image('background2', 'assets/backgroundSweetTooth.png');
        this.load.image('roundMenuBackground', 'assets/roundMenuBackground.png');
        this.load.image('stars', 'assets/stars.png');
		this.load.spritesheet('hud', 'assets/hud.png', 400, 300);
		
		
		//BUTTONS
		this.load.spritesheet('button', 'assets/button.png', 300, 100);
        this.load.spritesheet('yellowButton', 'assets/yellowButton.png', 300, 100);
        this.load.spritesheet('greenButton', 'assets/greenButton.png', 300, 100);
        this.load.spritesheet('empButton', 'assets/empButton.png', 180, 180);
        this.load.spritesheet('pauseButton', 'assets/pauseButton.png', 110, 110);
        this.load.spritesheet('muteButton', 'assets/muteButton.png', 80, 80);
        this.load.image('muteX', 'assets/muteX.png');

		
		//SPRITES
		this.load.spritesheet('player0', 'assets/sevenAnim0.png', 150, 150);
        this.load.spritesheet('player1', 'assets/sevenAnim1.png', 150, 150);
        this.load.spritesheet('player2', 'assets/sevenAnim2.png', 150, 150);
        this.load.spritesheet('player3', 'assets/sevenAnim3.png', 150, 150);
        this.load.spritesheet('jackknife', 'assets/jackknife.png', 150, 151);
        this.load.spritesheet('jackLightning', 'assets/jackLightning.png', 140, 70);
		this.load.spritesheet('jet0', 'assets/jet0.png', 150, 49);
        this.load.spritesheet('jet1', 'assets/jet1.png', 150, 49);
        this.load.spritesheet('jet2', 'assets/jet2.png', 150, 49);
        this.load.spritesheet('magnet0', 'assets/magnet.png', 40, 41);
        this.load.image('magnet1', 'assets/rock.png');
        this.load.image('magnet2', 'assets/cookie.png');
        this.load.spritesheet('sevenResting', 'assets/sevenResting.png', 57, 86);
		this.load.image('rocket', 'assets/rocketAnimation.png');
		this.load.spritesheet('explosion', 'assets/explosion.png', 64, 64, 48);
        this.load.image('spinner0', 'assets/spinner.png');
        this.load.image('spinner1', 'assets/satellite.png');
        this.load.image('spinner2', 'assets/candy.png');
        this.load.image('laser', 'assets/laser.png');
        this.load.image('token', 'assets/token.png');
		this.load.image('whiteFlash', 'assets/whiteFlash.png');
		this.load.image('blackFlash', 'assets/blackFlash.png');
		this.load.image('analog', 'assets/analog.png');
		this.load.image('cloud1', 'assets/cloud1.png');
		this.load.image('cloud2', 'assets/cloud2.png');
		this.load.image('cloud5', 'assets/cloud5.png');
        this.load.image('shootingStar', 'assets/shootingStar.png');
        this.load.image('heart', 'assets/heart.png');
        this.load.image('cutscene1', 'assets/cutscene1.png');
        this.load.image('cutscene2', 'assets/cutscene2.png');
        this.load.image('cutscene3', 'assets/cutscene3.png');
        this.load.image('cutscene4', 'assets/cutscene4.png');
        this.load.image('cutscene5', 'assets/cutscene5.png');

		//SOUNDS
		this.load.audio('openSky', ['assets/openSky.ogg', 'assets/openSky.m4a']);
        this.load.audio('freedomFighter', ['assets/freedomFighter.ogg', 'assets/freedomFighter.m4a']);
        this.load.audio('theHive', ['assets/theHive.ogg', 'assets/theHive.m4a']);
        this.load.audio('explosion1', ['assets/explosion1.ogg', 'assets/explosion1.m4a']);
        this.load.audio('explosion2', ['assets/explosion2.ogg', 'assets/explosion2.m4a']);
        this.load.audio('explosion3', ['assets/explosion3.ogg', 'assets/explosion3.m4a']);
        this.load.audio('empSound', ['assets/emp.ogg', 'assets/emp.m4a']);
        this.load.audio('gainSound', ['assets/gain.ogg', 'assets/gain.m4a']);
        this.load.audio('painSound', ['assets/pain.ogg', 'assets/pain.m4a']);
        this.load.audio('shootSound', ['assets/shoot.ogg', 'assets/shoot.m4a']);
        this.load.audio('wooshSound', ['assets/woosh.ogg', 'assets/woosh.m4a']);
        this.load.audio('warpSound', ['assets/warp.ogg', 'assets/warp.m4a']);
        this.load.audio('blastoffSound', ['assets/blastoff.ogg', 'assets/blastoff.m4a']);
        this.load.audio('launchSound', ['assets/launch.ogg', 'assets/launch.m4a']);
        this.load.audio('deadSound', ['assets/dead.ogg', 'assets/dead.m4a']);
        this.load.audio('jackWarningSound', ['assets/jackWarning.ogg', 'assets/jackWarning.m4a']);
        //this.load.audio('jackAttackingSound', ['assets/jackAttacking.ogg', 'assets/jackAttacking.m4a']);
        this.load.audio('lungeJackSound', ['assets/lungeJack.ogg', 'assets/lungeJack.m4a']);
        this.load.audio('jackDyingSound', ['assets/jackDying.ogg', 'assets/jackDying.m4a']);
        this.load.audio('enterJackSound', ['assets/enterJack.ogg', 'assets/enterJack.m4a']);
        this.load.audio('jackHurtSound', ['assets/jackHurt.ogg', 'assets/jackHurt.m4a']);
        this.load.audio('getCoinsSound', ['assets/getCoins.ogg', 'assets/getCoins.m4a']);
        this.load.audio('getHighScoreSound', ['assets/getHighScore.ogg', 'assets/getHighScore.m4a']);
        this.load.audio('enemyWarningSound', ['assets/enemyWarning.ogg', 'assets/enemyWarning.m4a']);
        this.load.audio('enemyKillSound', ['assets/enemyKill.ogg', 'assets/enemyKill.m4a']);

		
		//SCRIPTS
		//this.load.script('webfont', '//ajax.googleapis.com/ajax/libs/webfont/1.4.7/webfont.js');
		
        //TEXT
        this.load.text('gameData', 'assets/gameData.txt');
		
		//FONTS
		//this.load.bitmapFont('courier', 'assets/courier_0.png', 'assets/courier.fnt');
        this.load.bitmapFont('verdana', 'assets/verdana_0.png', 'assets/verdana.fnt');

	},

	create: function () {
        
        


		loaderBarMiddle.cropEnabled = false;
        this.cache._text['gameData'].data = JSON.parse(this.cache.getText('gameData'));
        
        BasicGame.beep = this.add.audio('beep');
        BasicGame.boop = this.add.audio('boop');

        
        withSoundButton = this.add.button(this.world.centerX, this.world.centerY + 230 * BasicGame.scaleP, 'button', startWithSound, this, 1, 0, 2);
        withSoundButton.width = 450;
        withSoundButton.anchor.setTo(0.5, 0.5);
		withSound_txt = this.add.text(withSoundButton.x, withSoundButton.y, this.cache.getText('gameData').withSoundButton);
    	withSound_txt.anchor.setTo(0.5, 0.5);
    	withSound_txt.font = BasicGame.font;
    	withSound_txt.fontSize = 40 * BasicGame.scaleP;
		grd = withSound_txt.context.createLinearGradient(0, 0, withSound_txt.canvas.width, withSound_txt.canvas.height);
    	grd.addColorStop(0, '#ffffff');   
    	grd.addColorStop(1, '#ff8282');
    	withSound_txt.fill = grd;
        withSoundButton.visible = false;
        withSound_txt.visible = false;
        withSoundButton.width = withSound_txt.width + 25 * BasicGame.scaleP;
		withSoundButton.height = withSound_txt.height + 10 * BasicGame.scaleP;
        //withSoundButton.setUpSound(BasicGame.beep);


        withoutSoundButton = this.add.button(this.world.centerX, this.world.centerY + 320 * BasicGame.scaleP, 'button', startWithoutSound, this, 1, 0, 2);
        withoutSoundButton.width = 520;
        withoutSoundButton.anchor.setTo(0.5, 0.5);
		withoutSound_txt = this.add.text(withoutSoundButton.x, withoutSoundButton.y, this.cache.getText('gameData').withoutSoundButton);
    	withoutSound_txt.anchor.setTo(0.5, 0.5);
    	withoutSound_txt.font = BasicGame.font;
    	withoutSound_txt.fontSize = 40 * BasicGame.scaleP;
		grd = withoutSound_txt.context.createLinearGradient(0, 0, withoutSound_txt.canvas.width, withoutSound_txt.canvas.height);
    	grd.addColorStop(0, '#ffffff');   
    	grd.addColorStop(1, '#ff8282');
    	withoutSound_txt.fill = grd;
        withoutSoundButton.visible = false;
        withoutSound_txt.visible = false;
        withoutSoundButton.width = withoutSound_txt.width + 25 * BasicGame.scaleP;
		withoutSoundButton.height = withoutSound_txt.height + 10 * BasicGame.scaleP;
	},

	update: function () {
		
		if ((this.ready == false) && (this.cache.isSoundDecoded('freedomFighter')))
		{
			this.ready = true;
            withSoundButton.visible = true;
            withSound_txt.visible = true;
            withoutSoundButton.visible = true;
            withoutSound_txt.visible = true;
            loaderBarBack.visible = false;
            loaderBarMiddle.visible = false;
            loaderBarFront.visible = false;

            Clay.Player.fetchUserData( 'isNewGame', function( response ) {
                if (response.data == null)
                {
                    BasicGame.isNewGame = true;
                }
                else
                {
                    BasicGame.isNewGame = response.data.a;
                }
            } );
		}

	}

};


function startWithSound() {
    if (BasicGame.devMode)
    {
        this.state.start('MainMenu');
    }
    else
    {
        this.state.start('Splash');
    }
    if (fd.clayEnabled)
    {
        fd.ad.setPosition(fd.adPosition);
        fd.ad.hide();
    }
    shutDownPreloader();
}

function startWithoutSound() {
    if (BasicGame.devMode)
    {
        this.state.start('MainMenu');
    }
    else
    {
        this.state.start('Splash');
    }
    if (fd.clayEnabled)
    {
        fd.ad.setPosition(fd.adPosition);
        fd.ad.hide();
    }
    thisGame.sound.mute = true;
    shutDownPreloader();
}

function shutDownPreloader() {
	
	if (loaderBarBack)
	{
		loaderBarBack.destroy();
		loaderBarBack = null;
	}
	if (loaderBarFront)
	{
		loaderBarFront.destroy();
		loaderBarFront = null;
	}
	if (loaderBarMiddle)
	{
		loaderBarMiddle.destroy();
		loaderBarMiddle = null;
	}
    if (withSoundButton)
    {
        withSoundButton.destroy();
        withSoundButton = null;
    }
    if (withoutSoundButton)
    {
        withoutSoundButton.destroy();
        withoutSoundButton = null;
    }
    if (withSound_txt)
    {
        withSound_txt.destroy();
        withSound_txt = null;
    }
    if (withoutSound_txt)
    {
        withoutSound_txt.destroy();
        withoutSound_txt = null;
    }
    if (tempTitle)
    {
        tempTitle.destroy();
        tempTitle = null;
    }
    thisGame.stage.backgroundColor = '#ffffff';
}
