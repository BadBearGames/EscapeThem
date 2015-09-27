var menuBackground = null;
var logo = null;
var newButton = null;
var newButton_txt = null;
var loadButton = null;
var loadButton_txt = null;
var grd = null;
var menuStars1 = null;
var menuStars2 = null;
var menuTempCloud = null;
var menuClouds = null;
var m = 0;
var tempMC = 0;
var mainMenuMuteButton = null;
var mainMenuMuteX = null;
var fullscreenButton = null;
var fullscreenButton_txt = null;
var nelsonCredit_txt = null;
var bbLogo = null;
var pleaseWait_txt = null;

BasicGame.MainMenu = function (game) {

	this.music = null;
	this.playButton = null;

};

BasicGame.MainMenu.prototype = {

	create: function () {
        
		thisGame = this;
		
        this.physics.startSystem(Phaser.Physics.ARCADE);

		menuBackground = this.add.sprite(this.world.centerX, this.world.centerY, 'background0'); //+ BasicGame.currentMode + '');
		menuBackground.anchor.setTo(0.5, 0.5);
		menuBackground.width = this.world.width;
        menuBackground.height = this.world.height;
        
        menuStars1 = this.add.sprite(0, this.world.centerY, 'stars');
        menuStars1.height = this.world.height;
        menuStars1.width = this.world.width;
        menuStars1.anchor.setTo(1, 0.5);
        menuStars1.autoCull = true;
        menuStars1.body = null;
        
        menuStars2 = this.add.sprite(this.world.width, this.world.centerY, 'stars');
        menuStars2.height = this.world.height;
        menuStars2.width = this.world.width;
        menuStars2.anchor.setTo(1, 0.5);
        menuStars2.autoCull = true;
        menuStars2.body = null;
        
        //CLOUDS
        menuClouds = this.add.group();
        if (BasicGame.currentMode != 1)
        {
            menuTempCloud = menuClouds.create(0, 0, 'cloud1');
            menuTempCloud = menuClouds.create(0, 0, 'cloud2');
            menuTempCloud = menuClouds.create(0, 0, 'cloud5');
            menuTempCloud = menuClouds.create(0, 0, 'cloud5');
            menuTempCloud = menuClouds.create(0, 0, 'cloud2');
            menuTempCloud = menuClouds.create(0, 0, 'cloud1');
        }
        for (m = menuClouds.length - 1; m >= 0; m--)
        {
            this.physics.enable(menuClouds.getAt(m), Phaser.Physics.ARCADE);
            resetMenuCloud(menuClouds.getAt(m), this);
            menuClouds.getAt(m).x = this.rnd.integerInRange(0, 700) * BasicGame.scaleP;
            menuClouds.getAt(m).body.allowGravity = false;
            menuClouds.getAt(m).anchor.setTo(0.5, 0.5);
            menuClouds.getAt(m).autoCull = true;
            menuClouds.getAt(m).scale.setTo(2.3 * BasicGame.scaleP, 2.3 * BasicGame.scaleP);
        }


		
		logo = this.add.sprite(this.world.centerX, this.world.centerY - 200 * BasicGame.scaleP, 'logo');
		logo.anchor.setTo(0.5, 0.5);
        logo.scale.setTo(BasicGame.scaleP, BasicGame.scaleP);
		
		newButton = this.add.button(this.world.centerX, this.world.centerY + 100 * BasicGame.scaleP, 'button', newGame, this, 1, 0, 2);
        newButton.anchor.setTo(0.5, 0.5);
		newButton_txt = this.add.text(newButton.x, newButton.y, this.cache.getText('gameData').newButton);
    	newButton_txt.anchor.setTo(0.5, 0.5);
    	newButton_txt.font = BasicGame.font;
    	newButton_txt.fontSize = 50 * BasicGame.scaleP;
		grd = newButton_txt.context.createLinearGradient(0, 0, newButton_txt.canvas.width, newButton_txt.canvas.height);
    	grd.addColorStop(0, '#ffffff');   
    	grd.addColorStop(1, '#ff8282');
    	newButton_txt.fill = grd;
        newButton.width = newButton_txt.width + 25 * BasicGame.scaleP;
		newButton.height = newButton_txt.height + 10 * BasicGame.scaleP;
        newButton.setUpSound(BasicGame.beep);


        loadButton = this.add.button(this.world.centerX, newButton.y + 150 * BasicGame.scaleP, 'button', loadGame, this, 1, 0, 2);
        loadButton.anchor.setTo(0.5, 0.5);
		loadButton_txt = this.add.text(loadButton.x, loadButton.y, this.cache.getText('gameData').loadButton);
    	loadButton_txt.anchor.setTo(0.5, 0.5);
    	loadButton_txt.font = BasicGame.font;
    	loadButton_txt.fontSize = 50 * BasicGame.scaleP;
		grd = loadButton_txt.context.createLinearGradient(0, 0, loadButton_txt.canvas.width, loadButton_txt.canvas.height);
    	grd.addColorStop(0, '#ffffff');   
    	grd.addColorStop(1, '#ff8282');
    	loadButton_txt.fill = grd;
        loadButton.width = loadButton_txt.width + 25 * BasicGame.scaleP;
		loadButton.height = loadButton_txt.height + 10 * BasicGame.scaleP;
        loadButton.setUpSound(BasicGame.beep);
        loadButton.visible = !BasicGame.isNewGame;
        loadButton_txt.visible = !BasicGame.isNewGame;
        
        pleaseWait_txt = this.add.text(this.world.centerX, this.world.height - 50 * BasicGame.scaleP, this.cache.getText('gameData').pleaseWait);
        pleaseWait_txt.align = 'center';
        pleaseWait_txt.fill = '#ffffff';
        pleaseWait_txt.font = BasicGame.font;
        pleaseWait_txt.fontSize = 40 * BasicGame.scaleP;
        pleaseWait_txt.anchor.setTo(0.5, 0.5);
        pleaseWait_txt.visible = false;

        
        mainMenuMuteButton = this.add.button(this.world.centerX - 450 * BasicGame.scaleP, this.world.centerY - 320 * BasicGame.scaleP, 'muteButton', mainMenuMute, this, 1, 0, 2);
        mainMenuMuteButton.anchor.setTo(0.5, 0.5);
        mainMenuMuteButton.scale.setTo(BasicGame.scaleP, BasicGame.scaleP);
        mainMenuMuteX = this.add.sprite(mainMenuMuteButton.x, mainMenuMuteButton.y, 'muteX');
        mainMenuMuteX.anchor.setTo(0.5, 0.5);
        mainMenuMuteX.scale.setTo(BasicGame.scaleP, BasicGame.scaleP);
        if (this.sound.mute == false)
        {
            mainMenuMuteX.visible = false;
        }
        else 
        {
            mainMenuMuteX.visible = true;
        }
        
        
        fullscreenButton = this.add.button(110 * BasicGame.scaleP, this.world.height - 50 * BasicGame.scaleP, 'button', goFullscreen, this, 1, 0, 2);
        fullscreenButton.anchor.setTo(0.5, 0.5);
		fullscreenButton_txt = this.add.text(fullscreenButton.x, fullscreenButton.y, this.cache.getText('gameData').fullscreenButton);
    	fullscreenButton_txt.anchor.setTo(0.5, 0.5);
    	fullscreenButton_txt.font = BasicGame.font;
    	fullscreenButton_txt.fontSize = 35 * BasicGame.scaleP;
		grd = fullscreenButton_txt.context.createLinearGradient(0, 0, fullscreenButton_txt.canvas.width, fullscreenButton_txt.canvas.height);
    	grd.addColorStop(0, '#ffffff');   
    	grd.addColorStop(1, '#ff8282');
    	fullscreenButton_txt.fill = grd;
        fullscreenButton.width = fullscreenButton_txt.width + 25 * BasicGame.scaleP;
		fullscreenButton.height = fullscreenButton_txt.height + 10 * BasicGame.scaleP;
        fullscreenButton.setUpSound(BasicGame.beep);
        
        
        bbLogo = this.add.sprite(this.world.width - 130 * BasicGame.scaleP, this.world.height - 135 * BasicGame.scaleP, 'badBearGamesLogo');
        bbLogo.scale.setTo(0.5 * BasicGame.scaleP, 0.5 * BasicGame.scaleP);
        bbLogo.anchor.setTo(0.5, 0.5);
        
        nelsonCredit_txt = this.add.text(logo.x, logo.y - 130 * BasicGame.scaleP, this.cache.getText('gameData').nelsonCredit);
    	nelsonCredit_txt.anchor.setTo(0.5, 0.5);
    	nelsonCredit_txt.font = BasicGame.font;
    	nelsonCredit_txt.fontSize = 30 * BasicGame.scaleP;
    	nelsonCredit_txt.fill = '#ffffff';



        this.input.onUp.add(mainMenuReleaseUp);
	},

	update: function () {
        
        //BACKGROUND SCROLLING
        menuStars1.x -= 0.4 * BasicGame.scaleP;
        menuStars2.x -= 0.4 * BasicGame.scaleP;
        if (menuStars1.x <= 0)
        {
            menuStars1.x = menuStars2.x + menuStars2.width;
        }
        if (menuStars2.x <= 0)
        {
            menuStars2.x = menuStars1.x + menuStars1.width;
        }
        
        //CLOUDS
        for (m = menuClouds.length - 1; m >= 0; m--)
        {
            if (menuClouds.getAt(m).x < this.world.centerX - 700)
            {
                resetMenuCloud(menuClouds.getAt(m), this);
            }
        }

	},

	startGame: function (pointer) {

		//	Ok, the Play Button has been clicked or touched, so let's stop the music (otherwise it'll carry on playing)
		//this.music.stop();

		//	And start the actual game
		this.state.start('Game');

	}
};

function resetMenuCloud(cloud, game)
{
    cloud.x = game.rnd.integerInRange(game.world.centerX + 700 * BasicGame.scaleP, game.world.centerX + 900 * BasicGame.scaleP);
    cloud.y = game.rnd.integerInRange(game.world.centerY - 200 * BasicGame.scaleP, game.world.centerY + 300 * BasicGame.scaleP);
    cloud.body.velocity.x = game.rnd.integerInRange(-1000, -450) * BasicGame.scaleP;
    cloud.angle = game.rnd.angle();
    //tempMC = game.rnd.integerInRange(150, 300) / 100;
    //cloud.scale.setTo(tempMC, tempMC);
}

function mainMenuReleaseUp() { //INPUT UP
    
    if ((thisGame.input.activePointer.targetObject != mainMenuMuteButton) && (thisGame.input.activePointer.targetObject != mainMenuMuteX))
    {
        mainMenuMuteButton.frame = 0;
    }
    if ((thisGame.input.activePointer.targetObject != newButton) && (thisGame.input.activePointer.targetObject != newButton_txt))
    {
        newButton.frame = 0;
    }
    if ((thisGame.input.activePointer.targetObject != loadButton) && (thisGame.input.activePointer.targetObject != loadButton_txt))
    {
        loadButton.frame = 0;
    }
    if ((thisGame.input.activePointer.targetObject != fullscreenButton) && (thisGame.input.activePointer.targetObject != fullscreenButton_txt))
    {
        fullscreenButton.frame = 0;
    }
}



function shutDownMainMenu() {
	if (menuBackground)
	{
		menuBackground.destroy();
		menuBackground = null;
	}
	if (menuStars1)
    {
        menuStars1.destroy();
        menuStars1 = null;
    }
    if (menuStars2)
    {
        menuStars2.destroy();
        menuStars2 = null;
    }

	if (logo)
	{
		logo.destroy();
		logo = null;
	}
    if (pleaseWait_txt)
    {
        pleaseWait_txt.destroy();
        pleaseWait_txt = null;
    }
	if (newButton)
	{
		newButton.destroy();
		newButton = null;
	}
	if (newButton_txt)
	{
        newButton_txt.destroy();
		newButton_txt = null;
	}
    if (loadButton)
    {
        loadButton.destroy();
        loadButton = null;
    }
    if (loadButton_txt)
    {
        loadButton_txt.destroy();
        loadButton_txt = null;
    }
    if (mainMenuMuteButton)
    {
        mainMenuMuteButton.destroy();
        mainMenuMuteButton = null;
    }
    if (mainMenuMuteX)
    {
        mainMenuMuteX.destroy();
        mainMenuMuteX = null;
    }
    if (fullscreenButton)
    {
        fullscreenButton.destroy();
        fullscreenButton = null;
    }
    if (fullscreenButton_txt)
    {
        fullscreenButton_txt.destroy();
        fullscreenButton_txt = null;
    }
    if (nelsonCredit_txt)
    {
        nelsonCredit_txt.destroy();
        nelsonCredit_txt = null;
    }
    if (bbLogo)
    {
        bbLogo.destroy();
        bbLogo = null;
    }
    
    thisGame.input.onUp.remove(mainMenuReleaseUp, thisGame);
}

function newGame() 
{
    BasicGame.isNewGame = true;
    handleSaveData(BasicGame.isNewGame);
    shutDownMainMenu();
	thisGame.state.start('Cutscene');
}

function loadGame() 
{
    BasicGame.isNewGame = false;
    pleaseWait_txt.visible = true;
    handleSaveData(BasicGame.isNewGame);
    
    //thisGame.state.start('RoundMenu');
}



function handleSaveData(newGame) //If new game == true -> set, else load
{
    if (newGame)
    {
        wipeData();
    }
    else
    {
        setData();
    }
}

function wipeData()
{
    BasicGame.isNewGame = true;
    BasicGame.tokens = 0;
    BasicGame.highScore = 0;
    BasicGame.empUnlocked = false;
    BasicGame.secondChance = false;
    BasicGame.moreEnergy = false;
    BasicGame.moreForce = false;
    BasicGame.noGravity = false;
    BasicGame.currentCostume = 0;
    BasicGame.babyFaceUnlocked = false;
    BasicGame.classicUnlocked = false;
    BasicGame.angryDonutUnlocked = false;
    BasicGame.currentMode = 0;
    BasicGame.cosmicUnlocked = false;
    BasicGame.sweetToothUnlocked = false;
    saveData();
}

function setData()
{
    Clay.Player.fetchUserData( 'isNewGame', function( response ) {
        BasicGame.isNewGame = response.data.a;
    } );
    Clay.Player.fetchUserData( 'tokens', function( response ) {
        BasicGame.tokens = response.data.a;
    } );
    Clay.Player.fetchUserData( 'highScore', function( response ) {
        BasicGame.highScore = response.data.a;
    } );
    
    //PERKS
    Clay.Player.fetchUserData( 'empUnlocked', function( response ) {
        BasicGame.empUnlocked = response.data.a;
    } );
    Clay.Player.fetchUserData( 'secondChance', function( response ) {
        BasicGame.secondChance = response.data.a;
    } );
    Clay.Player.fetchUserData( 'moreEnergy', function( response ) {
        BasicGame.moreEnergy = response.data.a;
    } );
    Clay.Player.fetchUserData( 'moreForce', function( response ) {
        BasicGame.moreForce = response.data.a;
    } );
    Clay.Player.fetchUserData( 'noGravity', function( response ) {
        BasicGame.noGravity = response.data.a;
    } );
    
    //COSTUMES
    Clay.Player.fetchUserData( 'currentCostume', function( response ) {
        BasicGame.currentCostume = response.data.a;
    } );
    Clay.Player.fetchUserData( 'babyFace', function( response ) {
        BasicGame.babyFaceUnlocked = response.data.a;
    } );
    Clay.Player.fetchUserData( 'classic', function( response ) {
        BasicGame.classicUnlocked = response.data.a;
    } );
    Clay.Player.fetchUserData( 'angryDonut', function( response ) {
        BasicGame.angryDonutUnlocked = response.data.a;
    } );

    //MODES
    Clay.Player.fetchUserData( 'currentMode', function( response ) {
        BasicGame.currentMode = response.data.a;
    } );
    Clay.Player.fetchUserData( 'cosmic', function( response ) {
        BasicGame.cosmicUnlocked = response.data.a;
    } );
    Clay.Player.fetchUserData( 'sweetTooth', function( response ) {
        BasicGame.sweetToothUnlocked = response.data.a;
        if ((response.success) && (BasicGame.isNewGame == false))
        {
            shutDownMainMenu();
            thisGame.state.start('RoundMenu');
        }
    } );
}

function saveData()
{
    Clay.Player.saveUserData( 'isNewGame', {a: BasicGame.isNewGame}, function( response ) {} );
    Clay.Player.saveUserData( 'tokens', {a: BasicGame.tokens}, function( response ) {} );
    Clay.Player.saveUserData( 'highScore', {a: BasicGame.highScore}, function( response ) {} );
    
    //PERKS
    Clay.Player.saveUserData( 'empUnlocked', {a: BasicGame.empUnlocked}, function( response ) {} );
    Clay.Player.saveUserData( 'secondChance', {a: BasicGame.secondChance}, function( response ) {} );
    Clay.Player.saveUserData( 'moreEnergy', {a: BasicGame.moreEnergy}, function( response ) {} );
    Clay.Player.saveUserData( 'moreForce', {a: BasicGame.moreForce}, function( response ) {} );
    Clay.Player.saveUserData( 'noGravity', {a: BasicGame.noGravity}, function( response ) {} );
    
    //COSTUMES
    Clay.Player.saveUserData( 'currentCostume', {a: BasicGame.currentCostume}, function( response ) {} );
    Clay.Player.saveUserData( 'babyFace', {a: BasicGame.babyFaceUnlocked}, function( response ) {} );
    Clay.Player.saveUserData( 'classic', {a: BasicGame.classicUnlocked}, function( response ) {} );
    Clay.Player.saveUserData( 'angryDonut', {a: BasicGame.angryDonutUnlocked}, function( response ) {} );

    //MODES
    Clay.Player.saveUserData( 'currentMode', {a: BasicGame.currentMode}, function( response ) {} );
    Clay.Player.saveUserData( 'cosmic', {a: BasicGame.cosmicUnlocked}, function( response ) {} );
    Clay.Player.saveUserData( 'sweetTooth', {a: BasicGame.sweetToothUnlocked}, function( response ) {} );
}

function mainMenuMute()
{
    if (thisGame.sound.mute == true)
    {
        thisGame.sound.mute = false;
        mainMenuMuteX.visible = false;
    }
    else
    {
        thisGame.sound.mute = true;
        mainMenuMuteX.visible = true;
    }
}

function goFullscreen()
{
    thisGame.scale.startFullScreen();
}

