BasicGame = {
    thisGame: null,
    
    devMode: false,
    isDesktop: false,
    scaleP: gameScaleData.scaleValue,
    
    font: 'verdana', //Quantico
    
    //SAVE VARS
    distance: 0,
    lives: 0,
    tokensFactor: 25,
    playerBounce: 0.9,
    playerSpeed: 2.6,
    playerMaxSpeed: 100,
    playerForce: 2,
    playerMaxDamage: 100,
    maxEnergy: 210,
    energyDrain: 0.08,
    empDamage: 250,
    empDrain: 70,
    

    //SCORE VARS
    isTutorial: false,
    isNewGame: false,
    tokens: 0,
    highScore: 0,
    enemiesDefeated: 0,
    roundTime: 0,
    roundScore: 0,
    roundBonus: 0,
    
    //---UNLOCKS
    //UPGRADES
    empUnlocked: false,
    empUnlockedCost: 5,
    secondChance: false,
    secondChanceCost: 15,
    moreEnergy: false,
    moreEnergyCost: 15,
    moreForce: false,
    moreForceCost: 10,
    noGravity: false,
    noGravityCost: 5,
    //COSTUMES
    babyFaceUnlocked: false,
    babyFaceCost: 5,
    angryDonutUnlocked: false,
    angryDonutCost: 10,
    classicUnlocked: false,
    classicCost: 10,
    currentCostume: 0,
    //MODES
    cosmicUnlocked: false,
    cosmicCost: 10,
    sweetToothUnlocked: false,
    sweetToothCost: 15,
    currentMode: 0,
    
    //ENEMY SCORE BONUSES
    jetPoints: 5,
    magnetPoints: 2,
    spinnerPoints: 4,
    jackknifePoints: 10,
    
    music: null,
    musicVolume: 0.8,
    beep: null,
    boop: null,

    orientated: false
};

BasicGame.Boot = function (game) {
    thisGame = game;
    this.readyBoot = false;
};

BasicGame.Boot.prototype = {

    preload: function () {

        //  Here we load the assets required for our preloader (in this case a background and a loading bar)
        this.load.image('orientationSprite', 'images/orientation.jpg');
        this.load.image('logo', 'assets/escapeThemLogo.png');
        this.load.image('energyBarBack', 'assets/energyBarBack.png');
		this.load.image('energyBarMiddle', 'assets/energyBarMiddle.png');
		this.load.spritesheet('energyBarFront', 'assets/energyBarFront.png', 600, 100);
        this.load.audio('beep', ['assets/beep.ogg', 'assets/beep.m4a']);
        this.load.audio('boop', ['assets/boop.ogg', 'assets/boop.m4a']);
    },

    create: function () {

        
        this.input.maxPointers = 1;
        this.scale.forceLandscape = true;
        this.scale.forceOrientation(true, false, 'orientationSprite');


        if (this.game.device.desktop)
        {
            this.scale.scaleMode = Phaser.ScaleManager.EXACT_FIT;
            this.scale.fullScreenScaleMode = Phaser.ScaleManager.EXACT_FIT;
            //this.scale.minWidth = 480;
            //this.scale.minHeight = 260;
            this.scale.pageAlignHorizontally = true;
            this.scale.pageAlignVertically = true;
            this.scale.setScreenSize(true);
            BasicGame.isDesktop = true;
        }
        else
        {
            this.scale.scaleMode = Phaser.ScaleManager.EXACT_FIT;
            this.scale.fullScreenScaleMode = Phaser.ScaleManager.EXACT_FIT;
            //this.scale.minWidth = 480;
            //this.scale.minHeight = 260;
            this.scale.pageAlignHorizontally = true;
            this.scale.pageAlignVertically = true;
            this.scale.forceOrientation(true, false);
            this.scale.hasResized.add(this.gameResized, this);
            this.scale.enterIncorrectOrientation.add(this.enterIncorrectOrientation, this);
            this.scale.leaveIncorrectOrientation.add(this.leaveIncorrectOrientation, this);
            this.scale.setScreenSize(true);
        }
        
        this.game.stage.backgroundColor = '#000000';
        this.game.state.start('Preloader');
        this.game.renderer.roundPixels = true;
        this.stage.disableVisibilityChange = false;
        this.scale.refresh();
        this.game.input.maxPointers = 3;
    },
    
    update: function () {
        if (this.readyBoot == false)
        {
            this.readyBoot = true;
            this.state.start('Preloader');
        }
    },

    gameResized: function (width, height) {

        //  This could be handy if you need to do any extra processing if the game resizes.
        //  A resize could happen if for example swapping orientation on a device.

    },

    enterIncorrectOrientation: function () {

        BasicGame.orientated = false;

        document.getElementById('orientation').style.display = 'block';

    },

    leaveIncorrectOrientation: function () {

        BasicGame.orientated = true;

        document.getElementById('orientation').style.display = 'none';

    }
};