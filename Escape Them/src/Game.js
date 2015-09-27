//VARS
{
//OBJECTS
var background = null;
var stars1 = null;
var stars2 = null;
var player = null;
var jackknife = null;
var analog = null;

//SOUND
var explosion1_snd = null;
var explosion2_snd = null;
var explosion3_snd = null;
var emp_snd = null;
var shoot_snd = null;
var gain_snd = null;
var pain_snd = null;
var woosh_snd = null;
var warp_snd = null;
var dead_snd = null;
var jackWarning_snd = null;
var jackDying_snd = null;
var jackHurt_snd = null;
//var jackAttacking_snd = null;
var enterJack_snd = null;
var lungeJack_snd = null;
var enemyWarning_snd = null;
var enemyKill_snd = null;

//HUD
var energyBarFront = null;
var energyBarMiddle = null;
var energyBarBack = null;
var empButton = null;
var pauseButton = null;
var hud = null;
var score_txt = null;
var muteButton = null;
var muteX = null;
var blackFade = null;
var paused_txt = null;
var whiteFade = null;
var continueGameButton = null;
var continueGameButton_txt = null;
var quitGameButton = null;
var quitGameButton_txt = null;
var tutorial_txt = null;
var fps_txt = null;
var important_txt = null;
var importantTimer = 0;

//GROUPS
var clouds = null;
var jets = null;
var magnets = null;
var rockets = null;
var explosions = null;
var spinners = null;
var lasers = null;
var jackLightning = null;

//MATERIALS
var playerMaterial = null;
var worldMaterial = null;
var jetMaterial = null;
var magnetMaterial = null;
var rocketMaterial = null;
var jackknifeMaterial = null;
var spinnerMaterial = null;
var laserMaterial = null;
var jackLightningMaterial = null;
var playerWorldContactMaterial = null;
var playerJetContactMaterial = null;
var playerMagnetContactMaterial = null;
var playerRocketContactMaterial = null;
var playerJackknifeContactMaterial = null;
var playerSpinnerContactMaterial = null;
var playerLaserContactMaterial = null;
var playerJackLightningContactMaterial = null;

//COLLISION GROUPS
var playerCollisionGroup = null;
var jetCollisionGroup = null;
var magnetCollisionGroup = null;
var rocketCollisionGroup = null;
var jackknifeCollisionGroup = null;
var spinnerCollisionGroup = null;
var laserCollisionGroup = null;
var jackLightningCollisionGroup = null;
var jackDeadGroup = null;
var noGroup = null;

//NUMBERS
var tutorialNumber = 0;
var energy = 0;
var difficultyLevel = 0;
var difficultyCap = 0;
var energyWidth = 0;
var rocketDamage = 0;
var rocketSpeed = 0;
var rocketProbability = 0;
var spinnerHealth = 0;
var spinnerGain = 0;
var laserDamage = 0;
var magnetDamage = 0;
var magnetHealth = 0;
var magnetGain = 0;
var jetHealth = 0;
var jetGain = 0;
var inputDownX = 0;
var inputDownY = 0;
var swipeTime = 0;
var startTime = 0;
var spawnCount = 0;
var numberOfWaves = 0;
var i = 0;
var i2 = 0;
var s = 0;
var x = 0;
var e = 0;
var q = 0;
var em = 0;

//JACKKNIFE
var jackLunges = 0;
var jackLungeTime = 0;
var jackLungeTimeCap = 0;
var jackLungeCap = 0;
var jackHangTime = 0;
var jackHangTimeCap = 0;
var jackAttack = false;
var jackDamage = 0;
var jackHealth = 0;
var jackSpeed = 0;
var jackGain = 0;
var jackProbability = 0;
var jackLightningProbability = 0;


//BOOLEANS
var catchFlag = false;
var spawning = false;
var gamePaused = false;
var tutorialTimerActive = false;
var pauseQuit = false;

//TEMP VARS
var tempCloud = null;
var tempJet = null;
var tempMagnet = null;
var tempExplosion = null;
var tempRocket = null;
var tempSpinner = null;
var tempLaser = null;
var tempJackLightning = null;
var temp = 0;
}

BasicGame.Game = function (game) {

	//	When a State is added to Phaser it automatically has the following properties set on it, even if they already exist:

    this.game;		//	a reference to the currently running game
    this.add;		//	used to add sprites, text, groups, etc
    this.camera;	//	a reference to the game camera
    this.cache;		//	the game cache
    this.input;		//	the global input manager (you can access this.input.keyboard, this.input.mouse, as well from it)
    this.load;		//	for preloading assets
    this.math;		//	lots of useful common math operations
    this.sound;		//	the sound manager - add a sound, play one, set-up markers, etc
    this.stage;		//	the game stage
    this.time;		//	the clock
    this.tweens;	//	the tween manager
    this.world;		//	the game world
    this.particles;	//	the particle manager
    this.physics;	//	the physics manager
    this.rnd;		//	the repeatable random number generator

    //	You can use any of these from any function within this State.
    //	But do consider them as being 'reserved words', i.e. don't create a property for your own game called "world" or you'll over-write the world reference.

};

BasicGame.Game.prototype = {

	create: function () {
        //AUDIO
        BasicGame.music.stop();
        BasicGame.music = null;
        BasicGame.music = this.add.audio('openSky');
        BasicGame.music.play('', 0, 1, true);
        BasicGame.music.volume = BasicGame.musicVolume;
        
        if (explosion1_snd == null)
        {
            explosion1_snd = this.add.audio('explosion1');
        }
        if (explosion2_snd == null)
        {
            explosion2_snd = this.add.audio('explosion2');
        }
        if (explosion3_snd == null)
        {
            explosion3_snd = this.add.audio('explosion3');
        }
        if (emp_snd == null)
        {
            emp_snd = this.add.audio('empSound');
        }
        if (shoot_snd == null)
        {
            shoot_snd = this.add.audio('shootSound');
        }
        if (gain_snd == null)
        {
            gain_snd = this.add.audio('gainSound');
        }
        if (pain_snd == null)
        {
            pain_snd = this.add.audio('painSound');
        }
        if (woosh_snd == null)
        {
            woosh_snd = this.add.audio('wooshSound');
        }
        if (warp_snd == null)
        {
            warp_snd = this.add.audio('warpSound');
        }
        if (dead_snd == null)
        {
            dead_snd = this.add.audio('deadSound');
        }
        if (jackWarning_snd == null)
        {
            jackWarning_snd = this.add.audio('jackWarningSound');
        }
        /*if (jackAttacking_snd == null)
        {
            jackAttacking_snd = this.add.audio('jackAttackingSound');
        }*/
        if (jackDying_snd == null)
        {
            jackDying_snd = this.add.audio('jackDyingSound');
        }
        if (jackHurt_snd == null)
        {
            jackHurt_snd = this.add.audio('jackHurtSound');
        }
        if (lungeJack_snd == null)
        {
            lungeJack_snd = this.add.audio('lungeJackSound');
        }
        if (enterJack_snd == null)
        {
            enterJack_snd = this.add.audio('enterJackSound');
        }
        if (enemyWarning_snd == null)
        {
            enemyWarning_snd = this.add.audio('enemyWarningSound');
        }
        if (enemyKill_snd == null)
        {
            enemyKill_snd = this.add.audio('enemyKillSound');
        }
        
        //PHYSICS
        this.physics.startSystem(Phaser.Physics.P2JS);
        this.physics.arcade.gravity.y = 200;
        this.physics.p2.gravity.y = 200;
        this.physics.p2.setImpactEvents(true);
        
        
        //SCROLLING BACKGROUND
        background = this.add.sprite(this.world.centerX, this.world.centerY, 'background' + BasicGame.currentMode + '');
        background.width = this.world.width;
        background.height = this.world.height;
        background.anchor.setTo(0.5, 0.5);
        
        stars1 = this.add.sprite(0, this.world.centerY, 'stars');
        stars1.height = this.world.height;
        stars1.width = this.world.width;
        stars1.anchor.setTo(1, 0.5);
        //stars1.autoCull = true;
        stars1.body = null;
        
        stars2 = this.add.sprite(this.world.width, this.world.centerY, 'stars');
        stars2.height = this.world.height;
        stars2.width = this.world.width;
        stars2.anchor.setTo(1, 0.5);
        //stars2.autoCull = true;
        stars2.body = null;
        
        //GROUPS
        clouds = this.add.group();
        explosions = this.add.group();
        jets = this.add.group();
        rockets = this.add.group();
        magnets = this.add.group();
        lasers = this.add.group();
        spinners = this.add.group();
        jackLightning = this.add.group();
        
        //CLOUDS
        if (BasicGame.currentMode == 0)
        {
            tempCloud = clouds.create(0, 0, 'cloud1');
            tempCloud = clouds.create(0, 0, 'cloud2');
            tempCloud = clouds.create(0, 0, 'cloud5');
            tempCloud = clouds.create(0, 0, 'cloud5');
            tempCloud = clouds.create(0, 0, 'cloud2');
            tempCloud = clouds.create(0, 0, 'cloud1');
        }
        else if (BasicGame.currentMode == 1)
        {
            tempCloud = clouds.create(0, 0, 'shootingStar');
            tempCloud = clouds.create(0, 0, 'shootingStar');
            tempCloud = clouds.create(0, 0, 'shootingStar');
            tempCloud = clouds.create(0, 0, 'shootingStar');
            tempCloud = clouds.create(0, 0, 'shootingStar');
            tempCloud = clouds.create(0, 0, 'shootingStar');
        }
        else if (BasicGame.currentMode == 2)
        {
            tempCloud = clouds.create(0, 0, 'heart');
            tempCloud = clouds.create(0, 0, 'heart');
            tempCloud = clouds.create(0, 0, 'heart');
            tempCloud = clouds.create(0, 0, 'heart');
            tempCloud = clouds.create(0, 0, 'heart');
            tempCloud = clouds.create(0, 0, 'heart');
        }
        for (i = clouds.length - 1; i >= 0; i--)
        {
            this.physics.enable(clouds.getAt(i), Phaser.Physics.ARCADE);
            resetCloud(clouds.getAt(i), this);
            clouds.getAt(i).x = this.rnd.integerInRange(0, 700) * BasicGame.scaleP;
            clouds.getAt(i).body.allowGravity = false;
            clouds.getAt(i).anchor.setTo(0.5, 0.5);
            if (BasicGame.currentMode == 0)
            {
                clouds.getAt(i).scale.setTo(2.3 * BasicGame.scaleP, 2.3 * BasicGame.scaleP);
            }
            else if (BasicGame.currentMode == 2)
            {
                clouds.getAt(i).scale.setTo(0.6 * BasicGame.scaleP, 0.6 * BasicGame.scaleP);
            }
            else
            {
                clouds.getAt(i).scale.setTo(0.4 * BasicGame.scaleP, 0.4 * BasicGame.scaleP);
            }
            clouds.getAt(i).body.allowSleep = true;
            clouds.getAt(i).body.enable = false;
        }

        
        
        //JETS
        for (i = 0; i < 3; i++) //3
        {
            tempJet = jets.create(this.rnd.integerInRange(-1500, -1000) * BasicGame.scaleP, this.rnd.integerInRange(-500, 500) * BasicGame.scaleP, 'jet' + BasicGame.currentMode);
            tempJet.anchor.setTo(0.5, 0.5);
            tempJet.scale.setTo(BasicGame.scaleP, BasicGame.scaleP);
            if (BasicGame.currentMode == 0)
            {
                tempJet.animations.add('fly', [0, 1, 2, 3], 8, true);
            }
            else
            {
                tempJet.animations.add('fly', [0], 1, true);
            }
            //this.physics.enable(tempJet, Phaser.Physics.P2JS);
            //tempJet.body.data.gravityScale = 0;
            //tempJet.body = null;
            tempJet.autoCull = true;
            tempJet.health = 0;
            tempJet.kill();
            this.physics.p2.enableBody(tempJet, false);
            tempJet.body.allowSleep = true;
            //tempJet.autoCull = true;
            //spawnJet(tempJet, this);
        }
        
        //MAGNETS
        for (i = 0; i < 4; i++) //4
        {
            tempMagnet = magnets.create(this.rnd.integerInRange(-1500, -1000) * BasicGame.scaleP, this.rnd.integerInRange(-500, 500) * BasicGame.scaleP, 'magnet' + BasicGame.currentMode);
            tempMagnet.anchor.setTo(0.5, 0);
            tempMagnet.scale.setTo(BasicGame.scaleP, BasicGame.scaleP);
            if (BasicGame.currentMode == 0)
            {
                tempMagnet.animations.add('active', [0, 1, 2], 10, true);
            }
            else
            {
                tempMagnet.animations.add('active', [0], 1, true);
            }
            tempMagnet.health = 0;
            tempMagnet.kill();
            this.physics.p2.enableBody(tempMagnet, false);
            tempMagnet.body.allowSleep = true;
            //tempMagnet.autoCull = true;
        }
        
        //SPINNERS
        for (i = 0; i < 3; i++) //3
        {
            tempLaser = lasers.create(this.rnd.integerInRange(-1500, -1000) * BasicGame.scaleP, this.rnd.integerInRange(-500, 500) * BasicGame.scaleP, 'laser');
            tempLaser.scale.setTo(this.rnd.integerInRange(4, 7) * BasicGame.scaleP, 0.5 * BasicGame.scaleP);
            tempLaser.anchor.setTo(0.5, 0.5);
            tempLaser.health = 0;
            tempLaser.kill();
            this.physics.p2.enableBody(tempLaser, false);
            tempLaser.body.allowSleep = true;
            //tempLaser.autoCull = true;
            
            tempSpinner = spinners.create(this.rnd.integerInRange(-1500, -1000) * BasicGame.scaleP, this.rnd.integerInRange(-500, 500) * BasicGame.scaleP, 'spinner' + BasicGame.currentMode);
            tempSpinner.anchor.setTo(0.5, 0.5);
            tempSpinner.scale.setTo(BasicGame.scaleP, BasicGame.scaleP);
            tempSpinner.health = 0;
            tempSpinner.kill();
            this.physics.p2.enableBody(tempSpinner, false);
            tempSpinner.body.allowSleep = true;
            //tempSpinner.autoCull = true;
        }
        
        //ROCKETS
        for (i = 0; i < 3; i++) //3
        {
            tempRocket = rockets.create(0, 0, 'rocket');
            tempRocket.anchor.setTo(0, 0.5);
            tempRocket.scale.setTo(BasicGame.scaleP, BasicGame.scaleP);
            tempRocket.health = 0;
            tempRocket.kill();
            this.physics.arcade.enableBody(tempRocket, false);
            tempRocket.body.collideWorldBounds = false;
            tempRocket.body.allowSleep = true;
            //tempRocket.autoCull = true;
        }
        
        //JACK LIGHTNING
        for (i = 0; i < 2; i++) //2
        {
            tempJackLightning = jackLightning.create(0, 0, 'jackLightning');
            tempJackLightning.scale.setTo(BasicGame.scaleP, BasicGame.scaleP);
            tempJackLightning.anchor.setTo(0, 0.5);
            tempJackLightning.health = 0;
            tempJackLightning.kill();
            this.physics.p2.enableBody(tempJackLightning, false);
            tempJackLightning.body.collideWorldBounds = false;
            tempJackLightning.animations.add('active', [0, 1, 2, 3], 20, true);
            tempJackLightning.body.allowSleep = true;
            //tempJackLightning.autoCull = true;
        }

        
        
        //PLAYER
        player = this.add.sprite(this.world.centerX, this.world.centerY, 'player' + BasicGame.currentCostume);
        player.anchor.setTo(0.5, 0.5);
        player.scale.setTo(0.8 * BasicGame.scaleP, 0.8 * BasicGame.scaleP);
        if (BasicGame.currentCostume == 0)
        {
            player.animations.add('active', [1, 2, 3, 4, 5], 13, false);
            player.animations.add('gain', [6], 10, false);
            player.animations.add('pain', [7], 10, false);
            player.animations.add('fall', [8], 3, false);
            player.animations.add('stop', [0], 10, true);
        }
        else
        {
            player.animations.add('active', [0], 13, false);
            player.animations.add('gain', [1], 5, false);
            player.animations.add('pain', [2], 5, false);
            player.animations.add('fall', [3], 3, false);
            player.animations.add('stop', [0], 10, true);
        }
        
        player.animations.play('active');
        player.events.onAnimationComplete.add(playerAnimComplete, this);
        //P2
        this.physics.enable(player, Phaser.Physics.P2JS);
        player.body.applyGravity = true;
        player.body.setCircle(50 * BasicGame.scaleP);
        player.body.data.gravityScale = 1;
        player.body.data.damping = 0.3;
        player.body.allowSleep = true;
        
        
        jackknife = this.add.sprite(this.rnd.integerInRange(-1500, -1000) * BasicGame.scaleP, this.rnd.integerInRange(-500, 500) * BasicGame.scaleP, 'jackknife');
        jackknife.anchor.setTo(0.5, 0.5);
        jackknife.scale.setTo(BasicGame.scaleP, BasicGame.scaleP);
        jackknife.animations.add('active', [4, 5, 6, 7], 14, false);
        jackknife.animations.add('open', [1, 2, 3], 10, false);
        jackknife.animations.add('fall', [0], 10, false);
        jackknife.events.onAnimationComplete.add(jackknifeAnimComplete, this);
        //P2
        this.physics.enable(jackknife, Phaser.Physics.P2JS);
        jackknife.body.setCircle(70 * BasicGame.scaleP);
        jackknife.body.data.gravityScale = 1;
        jackknife.body.collideWorldBounds = false;
        jackknife.health = 0;
        jackknife.body.allowSleep = true;
        
        
        
        analog = this.add.sprite(this.world.centerX, this.world.centerY, 'analog');
        this.physics.enable(analog, Phaser.Physics.ARCADE);
        analog.body.allowGravity = false;
        analog.width = 15 * BasicGame.scaleP;
        analog.rotation = 220;
        analog.alpha = 0;
        analog.anchor.setTo(0.5, 0.0);
        
        
        //EXPLOSIONS
        for (i = 0; i < 4; i++) //4
        {
            tempExplosion = explosions.create(this.world.centerX, this.world.centerY, 'explosion');
            tempExplosion.animations.add('exp1', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 30, false);
            tempExplosion.animations.add('exp2', [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31], 30, false);
            tempExplosion.animations.add('exp3', [32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48], 30, false);
            tempExplosion.events.onAnimationComplete.add(explosionAnimComplete, this);
            tempExplosion.x = -800 * BasicGame.scaleP;
            tempExplosion.y = -500 * BasicGame.scaleP;
            //tempExplosion.autoCull = true;
            tempExplosion.body = null;
            tempExplosion.kill();
        }
        

        //MATERIALS
        playerMaterial = this.physics.p2.createMaterial('playerMaterial', player.body);
        jackknifeMaterial = this.physics.p2.createMaterial('jackknifeMaterial', jackknife.body);

        
        worldMaterial = this.physics.p2.createMaterial('worldMaterial');
        this.physics.p2.setWorldMaterial(worldMaterial, true, true, true, true);
        
        jetMaterial = this.physics.p2.createMaterial('jetMaterial');
        jetMaterial.restitution = 1;
        
        magnetMaterial = this.physics.p2.createMaterial('magnetMaterial');
        magnetMaterial.restitution = 1;

        rocketMaterial = this.physics.p2.createMaterial('rocketMaterial');
        rocketMaterial.restitution = 1;
        
        spinnerMaterial = this.physics.p2.createMaterial('spinnerMaterial');
        spinnerMaterial.restitution = 1;
        
        laserMaterial = this.physics.p2.createMaterial('laserMaterial');
        laserMaterial.restitution = 1;
        
        jackLightningMaterial = this.physics.p2.createMaterial('jackLightingMaterial');
        jackLightningMaterial.restitution = 1;

        
        playerWorldContactMaterial = this.physics.p2.createContactMaterial(playerMaterial, worldMaterial);
        playerWorldContactMaterial.restitution = BasicGame.playerBounce;
        playerJetContactMaterial = this.physics.p2.createContactMaterial(playerMaterial, jetMaterial);
        playerJetContactMaterial.restitution = BasicGame.playerBounce;
        //playerRocketContactMaterial = this.physics.p2.createContactMaterial(playerMaterial, rocketMaterial);
        //playerRocketContactMaterial.restitution = BasicGame.playerBounce;
        playerMagnetContactMaterial = this.physics.p2.createContactMaterial(playerMaterial, magnetMaterial);
        playerMagnetContactMaterial.restitution = 0.6;
        playerJackknifeContactMaterial = this.physics.p2.createContactMaterial(jackknifeMaterial, playerMaterial, worldMaterial);
        playerJackknifeContactMaterial.restitution = 1;
        playerSpinnerContactMaterial = this.physics.p2.createContactMaterial(playerMaterial, spinnerMaterial);
        playerSpinnerContactMaterial.restitution = BasicGame.playerBounce;
        playerLaserContactMaterial = this.physics.p2.createContactMaterial(playerMaterial, laserMaterial);
        playerLaserContactMaterial.restitution = BasicGame.playerBounce;
        playerJackLightningContactMaterial = this.physics.p2.createContactMaterial(playerMaterial, jackLightningMaterial);
        playerJackLightningContactMaterial.restitution = 0.5;
        
        
        //COLLISION GROUPS
        playerCollisionGroup = this.physics.p2.createCollisionGroup();
        jetCollisionGroup = this.physics.p2.createCollisionGroup();
        magnetCollisionGroup = this.physics.p2.createCollisionGroup();
        //rocketCollisionGroup = this.physics.p2.createCollisionGroup();
        jackknifeCollisionGroup = this.physics.p2.createCollisionGroup();
        laserCollisionGroup = this.physics.p2.createCollisionGroup();
        spinnerCollisionGroup = this.physics.p2.createCollisionGroup();
        jackLightningCollisionGroup = this.physics.p2.createCollisionGroup();
        jackDeadGroup = this.physics.p2.createCollisionGroup();
        noGroup = this.physics.p2.createCollisionGroup();
        //player.body.setCollisionGroup(playerCollisionGroup);
        this.physics.p2.updateBoundsCollisionGroup();


        
        
        //HIT TESTS
        //player.body.createBodyCallback(jets, hitJet, this);
        player.body.collides(jetCollisionGroup, hitJet, this);
        player.body.collides(magnetCollisionGroup, hitMagnet, this);
        //player.body.collides(rocketCollisionGroup, hitRocket, this);
        player.body.collides(jackknifeCollisionGroup, hitJackknife, this);
        player.body.collides(spinnerCollisionGroup, hitSpinner, this);
        player.body.collides(laserCollisionGroup, hitLaser, this);
        player.body.collides(jackLightningCollisionGroup, hitJackLightning, this);

        
        //HUD
        energyBarBack = this.add.sprite(this.world.centerX - 250 * BasicGame.scaleP, this.world.centerY - 350 * BasicGame.scaleP, 'energyBarBack');
        energyBarBack.anchor.setTo(0.5, 0.5);
        energyBarBack.scale.setTo(BasicGame.scaleP, BasicGame.scaleP);
        energyBarMiddle = this.add.sprite(energyBarBack.x, energyBarBack.y, 'energyBarMiddle');
        energyBarMiddle.anchor.setTo(0, 0.5);
        energyBarMiddle.scale.setTo(BasicGame.scaleP, BasicGame.scaleP);
        energyBarMiddle.x = energyBarBack.x - (energyBarMiddle.width / 2);
        energyBarFront = this.add.sprite(energyBarBack.x, energyBarBack.y, 'energyBarFront');
        energyBarFront.anchor.setTo(0.5, 0.5);
        energyBarFront.scale.setTo(BasicGame.scaleP);
        energyBarFront.animations.add('electric', [0, 1, 2], 9, true);
        energyBarFront.animations.play('electric');
        /*energyBarBack.visible = false;
        energyBarFront.visible = false;
        energyBarMiddle.visible = false;*/
        
        empButton = this.add.button(this.world.centerX - 400 * BasicGame.scaleP, this.world.centerY + 280 * BasicGame.scaleP, 'empButton', emp, this, 1, 0, 2);
        empButton.anchor.setTo(0.5, 0.5);
        empButton.scale.setTo(BasicGame.scaleP, BasicGame.scaleP);
        empButton.visible = BasicGame.empUnlocked;

        //HUD EFFECTS
        hud = this.add.sprite(this.world.centerX, this.world.centerY, 'hud');
        hud.width = this.world.width;
        hud.height = this.world.height;
        hud.anchor.setTo(0.5, 0.5);
        hud.body = null;
        hud.animations.add('none', [0], 5, true);
        hud.animations.add('emp', [1, 2, 3], 20, false);
        hud.animations.add('pain1', [4], 20, false);
        hud.animations.add('pain2', [5], 20, false);
        hud.animations.add('pain3', [6], 20, false);
        hud.animations.add('gain1', [7], 20, false);
        hud.animations.add('gain2', [8], 20, false);
        hud.animations.add('gain3', [9], 20, false);
        hud.animations.play('none');
        hud.events.onAnimationComplete.add(hudAnimComplete, this);
        
        
        //PAUSE MENU
        blackFade = this.add.sprite(this.world.centerX, this.world.centerY, 'blackFlash');
        blackFade.anchor.setTo(0.5, 0.5);
        blackFade.alpha = 0.3;
        blackFade.visible = false;
        blackFade.width = this.world.width;
        blackFade.height = this.world.height;
        
        
        pauseButton = this.add.button(this.world.centerX + 420 * BasicGame.scaleP, this.world.centerY + 320 * BasicGame.scaleP, 'pauseButton', pauseGame, this, 1, 0, 2);
        pauseButton.anchor.setTo(0.5, 0.5);
        pauseButton.scale.setTo(BasicGame.scaleP, BasicGame.scaleP);
        pauseButton.setUpSound(BasicGame.boop);


        muteButton = this.add.button(this.world.centerX + 310 * BasicGame.scaleP, this.world.centerY + 325 * BasicGame.scaleP, 'muteButton', muteGame, this, 1, 0, 2);
        muteButton.anchor.setTo(0.5, 0.5);
        muteButton.scale.setTo(BasicGame.scaleP, BasicGame.scaleP);
        muteX = this.add.sprite(muteButton.x, muteButton.y, 'muteX');
        muteX.anchor.setTo(0.5, 0.5);
        muteX.scale.setTo(BasicGame.scaleP, BasicGame.scaleP);
        if (this.sound.mute == false)
        {
            muteX.visible = false;
        }
        else 
        {
            muteX.visible = true;
        }

        
        score_txt = this.add.text(this.world.centerX + 380 * BasicGame.scaleP, this.world.centerY - 350 * BasicGame.scaleP, this.cache.getText('gameData').score + 0);
    	score_txt.anchor.setTo(0.5, 0.5);
    	score_txt.font = BasicGame.font;
    	score_txt.fontSize = 40 * BasicGame.scaleP;
        score_txt.allign = 'right';
        score_txt.fill = '#ffffff';
		//grd = score_txt.context.createLinearGradient(0, 0, score_txt.canvas.width, score_txt.canvas.height);
    	//grd.addColorStop(0, '#ffffff');   
    	//grd.addColorStop(1, '#ff8282');
    	//score_txt.fill = grd;
        
        /*fps_txt = this.add.text(this.world.centerX, this.world.centerY, this.cache.getText('gameData').score + 0);
    	fps_txt.anchor.setTo(0.5, 0.5);
    	fps_txt.font = BasicGame.font;
    	fps_txt.fontSize = 20;
        fps_txt.allign = 'right';
        fps_txt.fill = '#ffffff';
        this.time.advancedTiming = true;*/

        
        tutorial_txt = this.add.text(this.world.centerX, this.world.centerY - 150 * BasicGame.scaleP, "Tut text here ababababababababbababaaba\nabaababababbaatutitudj!!!!");
    	tutorial_txt.anchor.setTo(0.5, 0.5);
    	tutorial_txt.font = BasicGame.font;
    	tutorial_txt.fontSize = 36 * BasicGame.scaleP;
        tutorial_txt.align = 'center';
        tutorial_txt.fill = '#fbf200';
        if (!BasicGame.isTutorial)
        {
            tutorial_txt.visible = false;
        }
        
        
        important_txt = this.add.text(this.world.centerX, this.world.centerY - 150, "");
    	important_txt.anchor.setTo(0.5, 0.5);
    	important_txt.font = BasicGame.font;
    	important_txt.fontSize = 50 * BasicGame.scaleP;
        important_txt.align = 'center';
        important_txt.fill = '#fbf200';
        important_txt.visible = false;


        paused_txt = this.add.text(this.world.centerX, this.world.centerY - 200 * BasicGame.scaleP, this.cache.getText('gameData').paused);
    	paused_txt.anchor.setTo(0.5, 0.5);
    	paused_txt.font = BasicGame.font;
    	paused_txt.fontSize = 50 * BasicGame.scaleP;
		grd = paused_txt.context.createLinearGradient(0, 0, paused_txt.canvas.width, paused_txt.canvas.height);
    	grd.addColorStop(0, '#ffffff');   
    	grd.addColorStop(1, '#ff8282');
    	paused_txt.fill = grd;
        paused_txt.visible = false;
        
        continueGameButton = this.add.button(this.world.centerX, this.world.centerY, 'button', pauseGame, this, 1, 0, 2);
        continueGameButton.anchor.setTo(0.5, 0.5);
		continueGameButton_txt = this.add.text(continueGameButton.x, continueGameButton.y, this.cache.getText('gameData').continueGameButton);
    	continueGameButton_txt.anchor.setTo(0.5, 0.5);
    	continueGameButton_txt.font = BasicGame.font;
    	continueGameButton_txt.fontSize = 50 * BasicGame.scaleP;
		grd = continueGameButton_txt.context.createLinearGradient(0, 0, continueGameButton_txt.canvas.width, continueGameButton_txt.canvas.height);
    	grd.addColorStop(0, '#ffffff');   
    	grd.addColorStop(1, '#ff8282');
    	continueGameButton_txt.fill = grd;
        continueGameButton.width = continueGameButton_txt.width + 25 * BasicGame.scaleP;
		continueGameButton.height = continueGameButton_txt.height + 10 * BasicGame.scaleP;
        continueGameButton.visible = false;
        continueGameButton_txt.visible = false;
        continueGameButton.setUpSound(BasicGame.beep);

        
        quitGameButton = this.add.button(this.world.centerX, this.world.centerY + 150 * BasicGame.scaleP, 'button', makeRoundEnd, this, 1, 0, 2);
        quitGameButton.anchor.setTo(0.5, 0.5);
		quitGameButton_txt = this.add.text(quitGameButton.x, quitGameButton.y, this.cache.getText('gameData').quitGameButton);
    	quitGameButton_txt.anchor.setTo(0.5, 0.5);
    	quitGameButton_txt.font = BasicGame.font;
    	quitGameButton_txt.fontSize = 50 * BasicGame.scaleP;
		grd = quitGameButton_txt.context.createLinearGradient(0, 0, quitGameButton_txt.canvas.width, quitGameButton_txt.canvas.height);
    	grd.addColorStop(0, '#ffffff');   
    	grd.addColorStop(1, '#ff8282');
    	quitGameButton_txt.fill = grd;
        quitGameButton.width = quitGameButton_txt.width + 25 * BasicGame.scaleP;
		quitGameButton.height = quitGameButton_txt.height + 10 * BasicGame.scaleP;
        quitGameButton.visible = false;
        quitGameButton_txt.visible = false;
        quitGameButton.setUpSound(BasicGame.boop);



        
        whiteFade = this.add.sprite(this.world.centerX, this.world.centerY, 'whiteFlash');
        whiteFade.anchor.setTo(0.5, 0.5);
        whiteFade.width = this.world.width;
        whiteFade.height = this.world.height;
        whiteFade.alpha = 1;

        
        this.input.onDown.add(pressDown);
        this.input.onUp.add(releaseUp);
        
        init();
        
        respawnPlayer();
	},

	update: function () {
        
        //BACKGROUND SCROLLING
        stars1.x -= 0.4 * BasicGame.scaleP;
        stars2.x -= 0.4 * BasicGame.scaleP;
        if (stars1.x <= 0)
        {
            stars1.x = stars2.x + stars2.width;
        }
        if (stars2.x <= 0)
        {
            stars2.x = stars1.x + stars1.width;
        }

        //CLOUDS
        for (i = clouds.length - 1; i >= 0; i--)
        {
            if (clouds.getAt(i).x < this.world.centerX - 700 * BasicGame.scaleP)
            {
                resetCloud(clouds.getAt(i), this);
            }
        }

        
        if (!gamePaused)
        {
            
        //INPUT
        if (energy > 0)
        {
            if (catchFlag)
            {
                analog.x = player.x;
                analog.y = player.y;
                analog.alpha = 0.5;
                analog.angle = this.math.radToDeg(this.math.angleBetween(inputDownX, inputDownY, this.input.activePointer.x, this.input.activePointer.y)) - 90; //* -1
                analog.height = this.math.distance(inputDownX, inputDownY, this.input.activePointer.x, this.input.activePointer.y);//this.physics.arcade.distanceToPointer(analog);
            }
            else
            {
                analog.alpha = 0;
            }
        }
        else if (catchFlag)
        {
            if ((player.scale.x == 1) && (player.scale.y == 1))
            {
                player.scale.setTo(0.8, 0.8);
                player.body.setZeroVelocity();
                player.body.data.gravityScale = 1;
                catchFlag = false;
                analog.visible = false;
            }
        }
        
        //ROCKETS
        for (i = rockets.length - 1; i >= 0; i--)
        {
            if (rockets.getAt(i) != null)
            {
                if ((rockets.getAt(i).health > 0) && (rockets.getAt(i).exists))
                {
                    if ((overlapWithPlayer(rockets.getAt(i))) && (energy > 0))
                    {
                        hitRocket(player.body, rockets.getAt(i).body);
                    }
                    else if (!rockets.getAt(i).inCamera)
                    {
                        killRocket(rockets.getAt(i), this);
                    }
                }
            }
        }

        //JACK LIGHTNING
        for (i = jackLightning.length - 1; i >= 0; i--)
        {
            if (jackLightning.getAt(i) != null)
            {
                if ((jackLightning.getAt(i).health > 0) && (jackLightning.getAt(i).exists))
                {
                    if (!jackLightning.getAt(i).inCamera)
                    {
                        killJackLightning(jackLightning.getAt(i), this);
                    }
                }
            }
        }

        //MAGNETS
        for (i = magnets.length - 1; i >= 0; i--)
        {
            if ((magnets.getAt(i) != null) && (magnets.getAt(i).exists))
            {
                if (magnets.getAt(i).health > 30)
                {
                    if (energy > 0)
                    {
                        //SET TO COLLIDE IN WORLD
                        if ((magnets.getAt(i).body.collideWorldBounds == false) && (magnets.getAt(i).inCamera))
                        {
                            magnets.getAt(i).body.collideWorldBounds = true;
                        }


                        if (!magnets.getAt(i).inCamera)
                        {
                            if (magnets.getAt(i).x > player.x)
                            {
                                magnets.getAt(i).body.velocity.x = -200 * BasicGame.scaleP;
                            }
                            else
                            {
                                magnets.getAt(i).body.velocity.x = 200 * BasicGame.scaleP;
                            }
                        }
                        else
                        {
                            //CHARGE PLAYER
                            if (!magnets.getAt(i).overlap(player))
                            {
                                this.physics.arcade.moveToObject(magnets.getAt(i), player, 550 * BasicGame.scaleP);
                            }

                            magnets.getAt(i).angle = this.math.radToDeg(this.physics.arcade.angleBetween(magnets.getAt(i), player)) + 90;
                        }
                    }
                }
                else if (magnets.getAt(i).health > 0)//GOING DOWN
                {
                    magnets.getAt(i).health -= 0.2;
                    
                    if (magnets.getAt(i).inCamera == false)
                    {
                        magnets.getAt(i).health = 0;
                    }
                    
                    if (magnets.getAt(i).health <= 0)
                    {
                        killMagnet(magnets.getAt(i), this);
                    }
                }
                else if (magnets.getAt(i).visible)//KILL IT!!!
                {
                    killMagnet(magnets.getAt(i), this);
                }

            }
        }
        
        //JETS
        for (i = jets.length - 1; i >= 0; i--)
        {
            if ((jets.getAt(i).exists) && (jets.getAt(i) != null)) //IF EXISTS
            {
                if (jets.getAt(i).health > 40) //HEALTHY
                {
                    if (energy > 0)
                    {
                        if ((jets.getAt(i).body.collideWorldBounds == false) && (jets.getAt(i).inCamera))
                        {
                            jets.getAt(i).body.collideWorldBounds = true;
                        }

                        if (((jets.getAt(i).x > player.x + 350 * BasicGame.scaleP) || (jets.getAt(i).x < player.x - 350 * BasicGame.scaleP)) || (!jets.getAt(i).inCamera))
                        {
                            if (jets.getAt(i).x > player.x)
                            {
                                jets.getAt(i).body.velocity.x = -150 * BasicGame.scaleP;

                                //console.log("hereR")
                            }
                            else
                            {
                                jets.getAt(i).body.velocity.x = 150 * BasicGame.scaleP;
                            }
                        }
                        else
                        {

                            //FLIP JET
                            if ((jets.getAt(i).x < player.x) && (jets.getAt(i).scale.x < 0))
                            {
                                jets.getAt(i).scale.x *= -1;
                            }
                            if ((jets.getAt(i).x > player.x) && (jets.getAt(i).scale.x > 0))
                            {
                                jets.getAt(i).scale.x *= -1;
                            }

                        }


                        //MOVE Y TOWARDS PLAYER
                        if ((jets.getAt(i).y > player.y + 50) || (jets.getAt(i).y < player.y - 50))
                        {
                            if (jets.getAt(i).y > player.y)
                            {
                                jets.getAt(i).body.velocity.y = -350 * BasicGame.scaleP;
                            }
                            else
                            {
                                jets.getAt(i).body.velocity.y = 350 * BasicGame.scaleP;
                            }
                        }

                        //FIRE ROCKETS AT PLAYER
                        if (((jets.getAt(i).y <= player.y + 80 * BasicGame.scaleP) && (jets.getAt(i).y >= player.y - 80 * BasicGame.scaleP)
                        && (jets.getAt(i).x <= player.x + 300 * BasicGame.scaleP) && (jets.getAt(i).x >= player.x - 300 * BasicGame.scaleP)) && (energy > 0))
                        {
                            if (this.rnd.integerInRange(1, rocketProbability) == 1)
                            {
                                spawnRocket(jets.getAt(i), this);
                            }
                        }
                    }
                }
                else if (jets.getAt(i).health > 0)//GOING DOWN
                {
                    jets.getAt(i).health -= 0.4;
                    
                    if (jets.getAt(i).inCamera == false)
                    {
                        jets.getAt(i).health = 0;
                    }
                    
                    if (jets.getAt(i).health <= 0)
                    {
                        killJet(jets.getAt(i), this);
                    }
                }
                else if (jets.getAt(i).visible)//KILL IT!!!
                {
                    killJet(jets.getAt(i), this);
                }
            }
        }
        
        //SPINNERS
        for (i = spinners.length - 1; i >= 0; i--)
        {
            if ((spinners.getAt(i) != null) && (spinners.getAt(i).exists))
            {
                if (spinners.getAt(i).health > 0)
                {
                    if (energy > 0)
                    {
                        if ((spinners.getAt(i).x > this.world.centerX + 150 * BasicGame.scaleP) || (spinners.getAt(i).x < this.world.centerX - 150 * BasicGame.scaleP)
                        || (spinners.getAt(i).y > this.world.centerY + 150 * BasicGame.scaleP) || (spinners.getAt(i).y < this.world.centerY - 150 * BasicGame.scaleP))
                        {
                            //this.physics.arcade.moveToObject(spinners.getAt(i), player, 1000);
                            this.physics.arcade.moveToXY(spinners.getAt(i), this.world.centerX, this.world.centerY, 1000 * BasicGame.scaleP);
                        }
                        else
                        {
                            spinners.getAt(i).angle += spinnerSpeed;
                            lasers.getAt(i).angle = spinners.getAt(i).angle;
                            lasers.getAt(i).body.angle = spinners.getAt(i).angle;
                            spinners.getAt(i).body.velocity.x = 0;
                            spinners.getAt(i).body.velocity.y = 0;
                            lasers.getAt(i).body.velocity.x = 0;
                            lasers.getAt(i).body.velocity.y = 0;
                        }
                        lasers.getAt(i).body.x = spinners.getAt(i).body.x;
                        lasers.getAt(i).body.y = spinners.getAt(i).body.y;
                        lasers.getAt(i).x = lasers.getAt(i).body.x;
                        lasers.getAt(i).y = lasers.getAt(i).body.y;
                    }
                }
                else if (spinners.getAt(i).visible) //KILL IT
                {
                    killSpinner(spinners.getAt(i), lasers.getAt(i), this);
                }
            }
        }
        
        //JACKKNIFE
        if ((jackknife.exists) && (jackknife != null))
        {
            if ((!jackknife.inCamera) && (jackknife.health > 0))
            {
                //FLY TO PLAYER
                this.physics.arcade.moveToObject(jackknife, player, 600 * BasicGame.scaleP);     
                jackknife.angle = this.math.radToDeg(this.physics.arcade.angleBetween(jackknife, player)) + 90;
            }
            else if (jackknife.health > 0)
            {
                if (energy > 0)
                {
                    //IN CAMERA FIGHTING

                    if (jackknife.body.collideWorldBounds == false) //SET BOUNDS TO TRUE
                    {
                        jackknife.body.collideWorldBounds = true;
                        jackWarning_snd.play();
                        enterJack_snd.play();
                    }

                    if (jackAttack)
                    {
                        //LUNGING
                        if (jackLungeTime > 0)
                        {
                            //IF IN A LUNGE
                            jackLungeTime -= this.time.elapsed;
                        }
                        else
                        {
                            if (jackLunges > 0)
                            {
                                //START A LUNGE
                                lungeJack_snd.play();
                                Xvector = ((player.x - jackknife.x) * jackSpeed) / 10;
                                Yvector = ((player.y - jackknife.y) * jackSpeed) / 10;
                                jackknife.body.velocity.x = Xvector;
                                jackknife.body.velocity.y = Yvector;
                                //VARS
                                jackLunges--;
                                jackLungeTime = jackLungeTimeCap;
                            }
                            else
                            {
                                //COMPLETE LUNGING
                                jackLunges = 0;
                                jackHangTime = jackHangTimeCap;
                                jackAttack = false;
                                jackknife.animations.play('open');
                            }
                        }
                    }
                    else
                    {
                        //OPEN
                        if (jackHangTime > 0)
                        {
                            //ATTACK HERE
                            if (this.physics.arcade.distanceBetween(jackknife, player) > 400)
                            {
                                if (this.rnd.integerInRange(1, jackLightningProbability) == 2)
                                {
                                    spawnJackLightning(this);
                                }
                            }

                            //jackknife.body.velocity.x = 0;
                            //jackknife.body.velocity.y = 0;
                            jackknife.body.data.damping = 0.5;
                            jackHangTime -= this.time.elapsed;
                        }
                        else
                        {
                            jackHangTime = 0;
                            jackLunges = jackLungeCap;
                            jackAttack = true;
                            jackLungeTime = jackLungeTimeCap;
                            jackknife.animations.play('active');
                            //jackAttacking_snd.play();
                            jackknife.body.data.damping = 0;
                        }
                    }
                }
            }
            else
            {
                //FALL AWAY
                if (jackknife.inCamera)
                {
                    if (jackknife.body.collideWorldBounds)
                    {
                        setImportantText(false, jackknife.body.x, jackknife.body.y, BasicGame.jackknifePoints);
                        jackknife.body.collideWorldBounds = false;
                        jackDying_snd.play();
                        enemyKill_snd.play();
                        jackknife.body.setCollisionGroup(jackDeadGroup);
                        jackknife.body.data.gravityScale = 1;
                        BasicGame.roundBonus += BasicGame.jackknifePoints;
                    }
                }
                
                //KILL JACK
                if (jackknife.body.data.gravityScale > 0)
                {
                    if (jackknife.y > (this.world.centerY + (this.world.height * 0.5)) + 600 * BasicGame.scaleP)
                    {
                        jackknife.body.velocity.x = 0;
                        jackknife.body.velocity.y = 0;
                        jackknife.body.angle = 0;
                        jackknife.angle = 0;
                        jackknife.body.data.gravityScale = 0;
                    }
                }
            }
        }
        
        //TUTORIAL  
        if (BasicGame.isTutorial)
        {
            switch (tutorialNumber)
            {
                case 1:
                    if (BasicGame.isDesktop)
                    {
                        tutorial_txt.text = this.cache.getText('gameData').tutorial1Click;
                    }
                    else
                    {
                        tutorial_txt.text = this.cache.getText('gameData').tutorial1Touch;
                    }
                    
                    if (!tutorialTimerActive)
                    {
                        this.time.events.add(Phaser.Timer.SECOND * 8, tutorialTimer, this);
                        tutorialTimerActive = true;
                    }
                break;
                    
                case 2:
                    tutorial_txt.text = this.cache.getText('gameData').tutorial2;
                    if (!tutorialTimerActive)
                    {
                        this.time.events.add(Phaser.Timer.SECOND * 8, tutorialTimer, this);
                        tutorialTimerActive = true;
                    }
                break;
                    
                case 3:
                    tutorial_txt.text = this.cache.getText('gameData').tutorial3;
                    if (!tutorialTimerActive)
                    {
                        this.time.events.add(Phaser.Timer.SECOND * 8, tutorialTimer, this);
                        tutorialTimerActive = true;
                    }
                break;
                
                case 4:
                    tutorial_txt.text = this.cache.getText('gameData').tutorial4;
                    if (!tutorialTimerActive)
                    {
                        x = 0;
                        for (s = jets.length - 1; s >= 0; s--)
                        {
                            if ((x < 1) && (jets.getAt(s).health <= 0))
                            {
                                spawnJet(jets.getAt(s), this);
                                x++;
                            }
                        }
                        tutorialTimerActive = true;
                    }
                break;
                    
                case 5:
                    tutorial_txt.text = this.cache.getText('gameData').tutorial5;
                    if (!tutorialTimerActive)
                    {
                        x = 0;
                        for (s = magnets.length - 1; s >= 0; s--)
                        {
                            if ((x < 1) && (magnets.getAt(s).health <= 0))
                            {
                                spawnMagnet(magnets.getAt(s), this);
                                x++;
                            }
                        }
                        tutorialTimerActive = true;
                    }
                break;
                
                case 6:
                    tutorial_txt.text = this.cache.getText('gameData').tutorial6;
                    if (!tutorialTimerActive)
                    {
                        x = 0;
                        for (s = spinners.length - 1; s >= 0; s--)
                        {
                            if ((x < 1) && (spinners.getAt(s).health <= 0))
                            {
                                spawnSpinner(spinners.getAt(s), lasers.getAt(s), this);
                                x++;
                            }
                        }
                        tutorialTimerActive = true;
                    }
                break;

                case 7:
                    tutorial_txt.text = this.cache.getText('gameData').tutorial7;
                    if (!tutorialTimerActive)
                    {
                        this.time.events.add(Phaser.Timer.SECOND * 8, tutorialTimer, this);
                        tutorialTimerActive = true;
                    }
                break;
            }
        }
        
        //SPAWN LOGIC
        if ((spawning) && (!BasicGame.isTutorial))
        {
            spawnCount = 0;
            for (i = jets.length - 1; i >= 0; i--)
            {
                if (jets.getAt(i) != null)
                {
                    if ((jets.getAt(i).exists) && (jets.getAt(i).health > 0))
                    {
                        spawnCount++;
                    }
                }
            }
            for (i = magnets.length - 1; i >= 0; i--)
            {
                if (magnets.getAt(i) != null)
                {
                    if ((magnets.getAt(i).exists) && (magnets.getAt(i).health > 0))
                    {
                        spawnCount++;
                    }
                }
            }
            for (i = spinners.length - 1; i >= 0; i--)
            {
                if (spinners.getAt(i) != null)
                {
                    if ((spinners.getAt(i).exists) && (spinners.getAt(i).health > 0))
                    {
                        spawnCount++;
                    }
                }
            }
            
            if ((jackknife != null) && (jackknife.health > 0) && (jackknife.exists))
            {
                spawnCount++;
            }

            if (spawnCount == 0)
            {
                spawn(1, this);
            }
        }
        
        
        
        //ENERGY
        if (energy > 0)
        {
            energy -= BasicGame.energyDrain;
        }
        if (energy < 0)
        {
            energy = 0;
        }
            
        if ((BasicGame.isTutorial) && (energy < 1) && (!pauseQuit))
        {
            energy = 1;
        }

        
        //CROP ENERGY BAR
        energyBarMiddle.width = energyWidth * (energy / BasicGame.maxEnergy);
        
        
        //SCORE
        if ((energy > 0) && (!BasicGame.isTutorial))
        {
            //BasicGame.roundTime = this.math.roundTo(this.time.elapsedSince(startTime) * 0.001, 0);
            BasicGame.roundTime += this.time.elapsed * 0.001;//this.math.roundTo( * 0.001, 0);
        }
        BasicGame.roundScore = this.math.roundTo(BasicGame.roundTime + BasicGame.roundBonus, 0);
        if ((this.cache.getText('gameData').score + BasicGame.roundScore) != (score_txt.text))
        {
            score_txt.text = "";
            score_txt.text = "" + this.cache.getText('gameData').score + BasicGame.roundScore;
        }
        if (fps_txt)
        {
            fps_txt.text = "";
            fps_txt.text = "FPS: " + this.time.fps;
        }
        
        if (importantTimer > 0)
        {
            importantTimer--;
            if (importantTimer <= 0)
            {
                importantTimer = 0;
                important_txt.visible = false;
            }
        }
        
        
        //PLAYER
        if (energy > 0)
        {
            if ((player.body.collideWorldBounds == false) && (player.y < (this.world.centerY + (this.world.height * 0.5)) - player.height))
            {
                player.body.collideWorldBounds = true;
                player.body.setCollisionGroup(playerCollisionGroup);
                spawning = true;
            }
            if (whiteFade.alpha > 0)
            {
                whiteFade.alpha -= this.time.elapsed * 0.001;
                if (whiteFade.alpha <= 0)
                {
                    whiteFade.alpha = 0;
                }
            }
            
            //OUTSIDE SCREEN FIX
            if ((catchFlag) && (this.input.activePointer.withinGame == false))
            {
                releaseUp();
            }
        }
        else if (energy <= 0)
        {
            if (player.health > 0)
            {
                player.health = 0;
                player.body.collideWorldBounds = false;
                player.body.velocity.x = 0;
                player.body.velocity.y = (-150);
                player.body.setCollisionGroup(noGroup);
                dead_snd.play();
                player.body.data.gravityScale = 2.5;
                player.animations.play('fall');
                //player.body.kinematic = true;
            }
            
            //KILL PLAYER
            if (((player.y > (this.world.centerY + (this.world.height * 0.5)) + 500 * BasicGame.scaleP) || (pauseQuit)) && (BasicGame.lives == 1))
            {
                if (whiteFade.alpha == 0)
                {
                    
                }
                
                if (whiteFade.alpha < 1)
                {
                    whiteFade.alpha += this.time.elapsed * 0.001;
                }
            }
            else if (player.y > (this.world.centerY + (this.world.height * 0.5)) + 500 * BasicGame.scaleP)
            {
                BasicGame.lives -= 1;
                whiteFade.alpha = 0;
                respawnPlayer();
            }

            
            if (whiteFade.alpha >= 1)
            {
                BasicGame.lives -= 1;
                if (BasicGame.lives > 0)
                {
                    whiteFade.alpha = 0;
                    respawnPlayer();
                }
                else
                {
                    endRound();
                }
            }
        }
        }
	},

	quitGame: function (pointer) {
        
		this.state.start('MainMenu');
	}

};

function pressDown() { //INPUT DOWN
    if ((energy > 0) && (thisGame.input.activePointer.targetObject == null) && (!gamePaused) && (whiteFade.alpha <= 0.5))
    {
        inputDownX = thisGame.input.activePointer.worldX;
        inputDownY = thisGame.input.activePointer.worldY;
        analog.x = player.x;//player.x; //inputDownX
        analog.y = player.y;//player.y; //inputDownY
        swipeTime = thisGame.time.now;
        catchFlag = true;

        //PLAYER
        player.animations.play('stop');
        player.scale.setTo(1 * BasicGame.scaleP, 1 * BasicGame.scaleP);
        player.body.setZeroVelocity();
        player.body.data.gravityScale = 0;
    }
}

function releaseUp() { //INPUT UP
    
    if ((energy > 0) && (catchFlag))
    {
        if (thisGame.time.elapsedSince(swipeTime) < 1000)
        {
            Xvector = ((thisGame.input.activePointer.worldX - inputDownX) * BasicGame.playerSpeed) * (1 + ((1000 - thisGame.time.elapsedSince(swipeTime)) / 1000));// / ((thisGame.time.elapsedSince(swipeTime) * 1.00) / 190); //190
            Yvector = ((thisGame.input.activePointer.worldY - inputDownY) * BasicGame.playerSpeed) * (1 + ((1000 - thisGame.time.elapsedSince(swipeTime)) / 1000));
        }
        else
        {
            Xvector = ((thisGame.input.activePointer.worldX - inputDownX) * BasicGame.playerSpeed);// / ((thisGame.time.elapsedSince(swipeTime) * 1.00) / 190); //190
            Yvector = ((thisGame.input.activePointer.worldY - inputDownY) * BasicGame.playerSpeed);
        }
        //Xvector = ((thisGame.input.activePointer.worldX - inputDownX) * BasicGame.playerSpeed);// / ((thisGame.time.elapsedSince(swipeTime) * 1.00) / 190); //190
        //Yvector = ((thisGame.input.activePointer.worldY - inputDownY) * BasicGame.playerSpeed);// / ((thisGame.time.elapsedSince(swipeTime) * 1.00) / 190);
        player.body.velocity.x = Xvector;
        player.body.velocity.y = Yvector;

        catchFlag = false;

        //ARCADE
        //player.body.velocity.setTo(Xvector, Yvector);

        //PLAYER
        player.animations.play('active');
        player.scale.setTo(0.8 * BasicGame.scaleP, 0.8 * BasicGame.scaleP);
        if (BasicGame.noGravity == true)
        {
            player.body.data.gravityScale = 0;
        }
        else
        {
            player.body.data.gravityScale = 1.3;
        }
        woosh_snd.play();
    }
    
    if (thisGame.input.activePointer.targetObject != empButton)
    {
        empButton.frame = 0;
    }
    if (thisGame.input.activePointer.targetObject != pauseButton)
    {
        pauseButton.frame = 0;
    }
    if ((thisGame.input.activePointer.targetObject != muteButton) && (thisGame.input.activePointer.targetObject != muteX))
    {
        muteButton.frame = 0;
    }
    if ((thisGame.input.activePointer.targetObject != continueGameButton) && (thisGame.input.activePointer.targetObject != continueGameButton_txt))
    {
        continueGameButton.frame = 0;
    }
    if ((thisGame.input.activePointer.targetObject != quitGameButton) && (thisGame.input.activePointer.targetObject != quitGameButton_txt))
    {
        quitGameButton.frame = 0;
    }
}

function resetCloud(cloud, game)
{
    cloud.x = game.rnd.integerInRange(game.world.centerX + 700 * BasicGame.scaleP, game.world.centerX + 900 * BasicGame.scaleP);
    cloud.y = game.rnd.integerInRange(game.world.centerY - 200 * BasicGame.scaleP, game.world.centerY + 300 * BasicGame.scaleP);
    cloud.body.velocity.x = game.rnd.integerInRange(-1000, -450) * BasicGame.scaleP;
    cloud.angle = game.rnd.angle();
    //temp = game.rnd.integerInRange(150, 300) / 100;
    //cloud.scale.setTo(temp, temp);
}

function tutorialTimer()
{
    if (tutorialNumber == 7)
    {
        BasicGame.isTutorial = false;
        tutorial_txt.visible = false;
        energy = BasicGame.maxEnergy;
        startTime = thisGame.time.now;
        
        if (BasicGame.isNewGame)
        {
            //SAVE GAME
            BasicGame.isNewGame = false;
        }
    }
    else
    {
        tutorialNumber++;
    }
    tutorialTimerActive = false;
}

function spawn(type, game)
{
    if (difficultyLevel - 5 >= 1)
    {
        type = game.rnd.integerInRange(difficultyLevel - 5, difficultyLevel);
    }
    else
    {
        type = game.rnd.integerInRange(1, difficultyLevel);
    }

    switch (type) //TYPE OF GROUP TO SPAWN
    {
        case 1: //1 JET
            x = 0;
            for (s = jets.length - 1; s >= 0; s--)
            {
                if ((x < 1) && (jets.getAt(s).health <= 0))
                {
                    spawnJet(jets.getAt(s), game);
                    x++;
                }
            }
        break;
            
        case 2: //1 SPINNER
            x = 0;
            for (s = spinners.length - 1; s >= 0; s--)
            {
                if ((x < 1) && (spinners.getAt(s).health <= 0))
                {
                    spawnSpinner(spinners.getAt(s), lasers.getAt(s), game);
                    x++;
                }
            }
        break;

            
        case 3: //1 MAGNET
            x = 0;
            for (s = magnets.length - 1; s >= 0; s--)
            {
                if ((x < 1) && (magnets.getAt(s).health <= 0))
                {
                    spawnMagnet(magnets.getAt(s), game);
                    x++;
                }
            }
        break;
            
        case 4: //2 JETS
            x = 0;
            for (s = jets.length - 1; s >= 0; s--)
            {
                if ((x < 2) && (jets.getAt(s).health <= 0))
                {
                    spawnJet(jets.getAt(s), game);
                    x++;
                }
            }
        break;

            
        case 5: //1 MAGNET, 1 JET
            x = 0;
            for (s = magnets.length - 1; s >= 0; s--)
            {
                if ((x < 1) && (magnets.getAt(s).health <= 0))
                {
                    spawnMagnet(magnets.getAt(s), game);
                    x++;
                }
            }
            x = 0;
            for (s = jets.length - 1; s >= 0; s--)
            {
                if ((x < 1) && (jets.getAt(s).health <= 0))
                {
                    spawnJet(jets.getAt(s), game);
                    x++;
                }
            }
        break;
            
        case 6: //JACK
            if ((jackknife.health <= 0) && (!jackknife.inCamera))
            {
                spawnJackknife(game);
            }
        break;

            
        case 7: //1 JET, 1 SPINNER
            x = 0;
            for (s = jets.length - 1; s >= 0; s--)
            {
                if ((x < 1) && (jets.getAt(s).health <= 0))
                {
                    spawnJet(jets.getAt(s), game);
                    x++;
                }
            }
            x = 0;
            for (s = spinners.length - 1; s >= 0; s--)
            {
                if ((x < 1) && (spinners.getAt(s).health <= 0))
                {
                    spawnSpinner(spinners.getAt(s), lasers.getAt(s), game);
                    x++;
                }
            }
        break;
            
        case 8: //2 MAGNETS
            x = 0;
            for (s = magnets.length - 1; s >= 0; s--)
            {
                if ((x < 2) && (magnets.getAt(s).health <= 0))
                {
                    spawnMagnet(magnets.getAt(s), game);
                    x++;
                }
            }
        break;
            
        case 9: //1 SPINNER, 1 MAGNET
            x = 0;
            for (s = spinners.length - 1; s >= 0; s--)
            {
                if ((x < 1) && (spinners.getAt(s).health <= 0))
                {
                    spawnSpinner(spinners.getAt(s), lasers.getAt(s), game);
                    x++;
                }
            }
             x = 0;
            for (s = magnets.length - 1; s >= 0; s--)
            {
                if ((x < 1) && (magnets.getAt(s).health <= 0))
                {
                    spawnMagnet(magnets.getAt(s), game);
                    x++;
                }
            }
        break;

            
        case 10: //2 JETS, 1 MAGNET
            x = 0;
            for (s = magnets.length - 1; s >= 0; s--)
            {
                if ((x < 1) && (magnets.getAt(s).health <= 0))
                {
                    spawnMagnet(magnets.getAt(s), game);
                    x++;
                }
            }
            x = 0;
            for (s = jets.length - 1; s >= 0; s--)
            {
                if ((x < 2) && (jets.getAt(s).health <= 0))
                {
                    spawnJet(jets.getAt(s), game);
                    x++;
                }
            }
        break;
            
        case 11: //TWO SPINNERS
            x = 0;
            for (s = spinners.length - 1; s >= 0; s--)
            {
                if ((x < 2) && (spinners.getAt(s).health <= 0))
                {
                    spawnSpinner(spinners.getAt(s), lasers.getAt(s), game);
                    x++;
                }
            }
        break;
            
        case 12: //JACK
            if ((jackknife.health <= 0) && (!jackknife.inCamera))
            {
                spawnJackknife(game);
            }
        break;
            
        case 13: //2 JETS, 2 MAGNETS
            x = 0;
            for (s = magnets.length - 1; s >= 0; s--)
            {
                if ((x < 2) && (magnets.getAt(s).health <= 0))
                {
                    spawnMagnet(magnets.getAt(s), game);
                    x++;
                }
            }
            x = 0;
            for (s = jets.length - 1; s >= 0; s--)
            {
                if ((x < 2) && (jets.getAt(s).health <= 0))
                {
                    spawnJet(jets.getAt(s), game);
                    x++;
                }
            }
        break;
            
        case 14: //1 SPINNER, 2 MAGNETS
            {
                x = 0;
                for (s = spinners.length - 1; s >= 0; s--)
                {
                    if ((x < 1) && (spinners.getAt(s).health <= 0))
                    {
                        spawnSpinner(spinners.getAt(s), lasers.getAt(s), game);
                        x++;
                    }
                }
                x = 0;
                for (s = magnets.length - 1; s >= 0; s--)
                {
                    if ((x < 2) && (magnets.getAt(s).health <= 0))
                    {
                        spawnMagnet(magnets.getAt(s), game);
                        x++;
                    }
                }
            }
        break;

        
        case 15: //2 MAGNETS, JACK
            x = 0;
            for (s = magnets.length - 1; s >= 0; s--)
            {
                if ((x < 2) && (magnets.getAt(s).health <= 0))
                {
                    spawnMagnet(magnets.getAt(s), game);
                    x++;
                }
            }
            if ((jackknife.health <= 0) && (!jackknife.inCamera))
            {
                spawnJackknife(game);
            }
        break;
            
        case 16: //1 MAGNET, 1 JET, 1 SPINNER
            x = 0;
            for (s = jets.length - 1; s >= 0; s--)
            {
                if ((x < 1) && (jets.getAt(s).health <= 0))
                {
                    spawnJet(jets.getAt(s), game);
                    x++;
                }
            }
            x = 0;
            for (s = spinners.length - 1; s >= 0; s--)
            {
                if ((x < 1) && (spinners.getAt(s).health <= 0))
                {
                    spawnSpinner(spinners.getAt(s), lasers.getAt(s), game);
                    x++;
                }
            }
            x = 0;
            for (s = magnets.length - 1; s >= 0; s--)
            {
                if ((x < 1) && (magnets.getAt(s).health <= 0))
                {
                    spawnMagnet(magnets.getAt(s), game);
                    x++;
                }
            }
        break;
            
        case 17: // 2 JETS, 1 SPINNER
            x = 0;
            for (s = spinners.length - 1; s >= 0; s--)
            {
                if ((x < 1) && (spinners.getAt(s).health <= 0))
                {
                    spawnSpinner(spinners.getAt(s), lasers.getAt(s), game);
                    x++;
                }
            }
            x = 0;
            for (s = jets.length - 1; s >= 0; s--)
            {
                if ((x < 2) && (jets.getAt(s).health <= 0))
                {
                    spawnJet(jets.getAt(s), game);
                    x++;
                }
            }
        break;
            
        case 18: //3 SPINNERS
            x = 0;
            for (s = spinners.length - 1; s >= 0; s--)
            {
                if ((x < 3) && (spinners.getAt(s).health <= 0))
                {
                    spawnSpinner(spinners.getAt(s), lasers.getAt(s), game);
                    x++;
                }
            }
        break;
            
        case 19: //1 MAGNET, 1 JET, 1 SPINNER, JACK
            x = 0;
            for (s = spinners.length - 1; s >= 0; s--)
            {
                if ((x < 1) && (spinners.getAt(s).health <= 0))
                {
                    spawnSpinner(spinners.getAt(s), lasers.getAt(s), game);
                    x++;
                }
            }
            x = 0;
            for (s = jets.length - 1; s >= 0; s--)
            {
                if ((x < 1) && (jets.getAt(s).health <= 0))
                {
                    spawnJet(jets.getAt(s), game);
                    x++;
                }
            }
            x = 0;
            for (s = magnets.length - 1; s >= 0; s--)
            {
                if ((x < 1) && (magnets.getAt(s).health <= 0))
                {
                    spawnMagnet(magnets.getAt(s), game);
                    x++;
                }
            }
            if ((jackknife.health <= 0) && (!jackknife.inCamera))
            {
                spawnJackknife(game);
            }
        break;
            
        case 20: //3 JETS
            x = 0;
            for (s = jets.length - 1; s >= 0; s--)
            {
                if ((x < 3) && (jets.getAt(s).health <= 0))
                {
                    spawnJet(jets.getAt(s), game);
                    x++;
                }
            }
        break;
            
        case 21: //1 JET, 1 MAGNET, 2 SPINNERS
            x = 0;
            for (s = spinners.length - 1; s >= 0; s--)
            {
                if ((x < 2) && (spinners.getAt(s).health <= 0))
                {
                    spawnSpinner(spinners.getAt(s), lasers.getAt(s), game);
                    x++;
                }
            }
            x = 0;
            for (s = jets.length - 1; s >= 0; s--)
            {
                if ((x < 1) && (jets.getAt(s).health <= 0))
                {
                    spawnJet(jets.getAt(s), game);
                    x++;
                }
            }
            x = 0;
            for (s = magnets.length - 1; s >= 0; s--)
            {
                if ((x < 1) && (magnets.getAt(s).health <= 0))
                {
                    spawnMagnet(magnets.getAt(s), game);
                    x++;
                }
            }
        break;
            
        case 22: //2 SPINNERS, JACK
            x = 0;
            for (s = spinners.length - 1; s >= 0; s--)
            {
                if ((x < 2) && (spinners.getAt(s).health <= 0))
                {
                    spawnSpinner(spinners.getAt(s), lasers.getAt(s), game);
                    x++;
                }
            }
            if ((jackknife.health <= 0) && (!jackknife.inCamera))
            {
                spawnJackknife(game);
            }
        break;
            
        case 23: //4 MAGNETS
            x = 0;
            for (s = magnets.length - 1; s >= 0; s--)
            {
                if ((x < 4) && (magnets.getAt(s).health <= 0))
                {
                    spawnMagnet(magnets.getAt(s), game);
                    x++;
                }
            }
        break;
            
        case 24: //1 SPINNER, 2 MAGNETS, 1 JET
            x = 0;
            for (s = spinners.length - 1; s >= 0; s--)
            {
                if ((x < 1) && (spinners.getAt(s).health <= 0))
                {
                    spawnSpinner(spinners.getAt(s), lasers.getAt(s), game);
                    x++;
                }
            }
            x = 0;
            for (s = jets.length - 1; s >= 0; s--)
            {
                if ((x < 1) && (jets.getAt(s).health <= 0))
                {
                    spawnJet(jets.getAt(s), game);
                    x++;
                }
            }
            x = 0;
            for (s = magnets.length - 1; s >= 0; s--)
            {
                if ((x < 2) && (magnets.getAt(s).health <= 0))
                {
                    spawnMagnet(magnets.getAt(s), game);
                    x++;
                }
            }
        break;
            
        case 25: //JACK, 1 SPINNER, 2 MAGNETS, 2 JETS
            x = 0;
            for (s = spinners.length - 1; s >= 0; s--)
            {
                if ((x < 1) && (spinners.getAt(s).health <= 0))
                {
                    spawnSpinner(spinners.getAt(s), lasers.getAt(s), game);
                    x++;
                }
            }
            x = 0;
            for (s = jets.length - 1; s >= 0; s--)
            {
                if ((x < 2) && (jets.getAt(s).health <= 0))
                {
                    spawnJet(jets.getAt(s), game);
                    x++;
                }
            }
            x = 0;
            for (s = magnets.length - 1; s >= 0; s--)
            {
                if ((x < 2) && (magnets.getAt(s).health <= 0))
                {
                    spawnMagnet(magnets.getAt(s), game);
                    x++;
                }
            }
            if ((jackknife.health <= 0) && (!jackknife.inCamera))
            {
                spawnJackknife(game);
            }
        break;
            
        default:
        break;
    }
    
    if (difficultyLevel < difficultyCap)
    {
        difficultyLevel++;
    }
    
    if (jackknife.health <= 0)
    {
        //enemyWarning_snd.play();
    }
}
 
function spawnExplosion(x, y, size, game)
{
    q = 0;
    for (e = explosions.length - 1; e >= 0; e--)
    {
        if ((!explosions.getAt(e).exists) && (q == 0))
        {
            explosions.getAt(e).reset(x, y);
            explosions.getAt(e).scale.setTo(size / BasicGame.scaleP, size / BasicGame.scaleP);
            explosions.getAt(e).angle = game.rnd.angle();
            explosions.getAt(e).anchor.setTo(0.5, 0.5);
            
            switch (game.rnd.integerInRange(1, 3))
            {
                    case 1:
                    explosions.getAt(e).animations.play('exp1');
                    explosion1_snd.play();
                    break;
                    
                    case 2:
                    explosions.getAt(e).animations.play('exp2');
                    explosion2_snd.play();
                    break;
                    
                    case 3:
                    explosions.getAt(e).animations.play('exp3');
                    explosion3_snd.play();
                    break;
                    
                    default:
                    break;
            }
            q++;
        }
    }
}

function spawnRocket(jet, game)
{
    q = 0;
    for (e = rockets.length - 1; e >= 0; e--)
    {
        if (rockets.getAt(e) != null)
        {
            if ((rockets.getAt(e).health <= 0) && (q == 0))
            {
                rockets.getAt(e).exists = true;
                rockets.getAt(e).reset(jet.x, jet.y, 100);
                //rockets.getAt(e).body.data.gravityScale = 0;
                rockets.getAt(e).body.allowGravity = false;
                rockets.getAt(e).angle = 0;
                rockets.getAt(e).body.angle = 0;

                //rockets.getAt(e).body.setMaterial(rocketMaterial);

                //rockets.getAt(e).body.setCollisionGroup(rocketCollisionGroup);
                //rockets.getAt(e).body.collides([jetCollisionGroup, playerCollisionGroup]);

                rockets.getAt(e).exists = true;
                
                rockets.getAt(e).body.allowSleep = true;

                //Face and go
                if (jet.scale.x > 0)
                {
                    //Going Right
                    if (rockets.getAt(e).scale.x < 0)
                    {
                        rockets.getAt(e).scale.x *= -1;
                    }
                    rockets.getAt(e).body.velocity.x = rocketSpeed;
                }
                else
                {
                    //Going Left
                    if (rockets.getAt(e).scale.x > 0)
                    {
                        rockets.getAt(e).scale.x *= -1;
                    }
                    rockets.getAt(e).body.velocity.x = -rocketSpeed;
                }
                shoot_snd.play();
                q++;
            }
        }
    }

}

function hitRocket(player, rocket)
{
    if (energy > 0)
    {
        player.velocity.x += rocket.velocity.x;
        player.velocity.y += rocket.velocity.y;
        
        player.sprite.animations.play('pain');
        pain_snd.play();
        switch (thisGame.rnd.integerInRange(1, 3)) //PLAY HUD ANIMATION
        {
            case 1:
            hud.animations.play('pain1');
            break;

            case 2:
            hud.animations.play('pain2');
            break;

            case 3:
            hud.animations.play('pain3');
            break;

            default:
            break;
        }



        energy -= rocketDamage;
        if (energy < 0)
        {
            energy = 0;
        }
    }
    
    killRocket(rocket.sprite, thisGame);
}

function killRocket(rocket, game)
{
    if (rocket.inCamera)
    {
        spawnExplosion(rocket.x, rocket.y, 2 * BasicGame.scaleP, game);
    }
    
    rocket.health = 0;
    
    rocket.visible = false;
    rocket.x = game.rnd.integerInRange(900 * BasicGame.scaleP, 1200 * BasicGame.scaleP);
    rocket.y = game.rnd.integerInRange(900 * BasicGame.scaleP, 1200 * BasicGame.scaleP);
    rocket.body.x = rocket.x;
    rocket.body.y = rocket.y;
    rocket.angle = 0;
    rocket.body.angle = 0;
    //rocket.body.data.gravityScale = 0;
    //rocket.body.setZeroVelocity();
    rocket.body.collideWorldBounds = false;
    
}

function overlapWithPlayer(sprite)
{
    if ((sprite.x < player.x + (player.width * 0.5)) && (sprite.x > player.x - (player.width * 0.5))
    && (sprite.y < player.y + (player.height * 0.5)) && (sprite.y > player.y - (player.height * 0.5)))
    {
        return true;
    }

    return false;
}

function spawnJackLightning(game)
{
    q = 0;
    for (e = jackLightning.length - 1; e >= 0; e--)
    {
        if (jackLightning.getAt(e) != null)
        {
            if ((jackLightning.getAt(e).health <= 0) && (q == 0))
            {
                jackLightning.getAt(e).exists = true;
                jackLightning.getAt(e).reset(jackknife.x, jackknife.y, 100);
                jackLightning.getAt(e).body.data.gravityScale = 0;

                jackLightning.getAt(e).body.setMaterial(jackLightningMaterial);

                jackLightning.getAt(e).body.setCollisionGroup(jackLightningCollisionGroup);
                jackLightning.getAt(e).body.collides([jackLightningCollisionGroup, playerCollisionGroup]);

                jackLightning.getAt(e).exists = true;
                
                jackLightning.getAt(e).angle = game.rnd.angle();
                Xvector = ((player.x - jackLightning.getAt(e).x) * jackSpeed * BasicGame.scaleP) / 30;
                Yvector = ((player.y - jackLightning.getAt(e).y) * jackSpeed * BasicGame.scaleP) / 30;
                jackLightning.getAt(e).body.velocity.x = Xvector;
                jackLightning.getAt(e).body.velocity.y = Yvector;

                jackLightning.getAt(e).body.allowSleep = true;
                jackLightning.getAt(e).animations.play('active');
                shoot_snd.play();
                q++;
            }
        }
    }

}

function hitJackLightning(player, lightning)
{
    if (energy > 0)
    {
        player.sprite.animations.play('pain');
        pain_snd.play();
        switch (thisGame.rnd.integerInRange(1, 3)) //PLAY HUD ANIMATION
        {
            case 1:
            hud.animations.play('pain1');
            break;

            case 2:
            hud.animations.play('pain2');
            break;

            case 3:
            hud.animations.play('pain3');
            break;

            default:
            break;
        }



        energy -= jackDamage / 3;
        if (energy < 0)
        {
            energy = 0;
        }
    }
    
    killJackLightning(lightning.sprite, thisGame);

}

function killJackLightning(lightning, game)
{
    if (lightning.inCamera)
    {
        spawnExplosion(lightning.x, lightning.y, 4 * BasicGame.scaleP, game);
    }
    
    lightning.health = 0;
    
    lightning.visible = false;
    lightning.x = game.rnd.integerInRange(900 * BasicGame.scaleP, 1200 * BasicGame.scaleP);
    lightning.y = game.rnd.integerInRange(900 * BasicGame.scaleP, 1200 * BasicGame.scaleP);
    lightning.body.x = lightning.x;
    lightning.body.y = lightning.y;
    lightning.angle = 0;
    lightning.body.angle = 0;
    lightning.body.data.gravityScale = 0;
    lightning.body.setZeroVelocity();
    lightning.body.collideWorldBounds = false;
    lightning.animations.stop();
}

function spawnSpinner(spinner, laser, game)
{
    spinner.reset(player.x, player.y, spinnerHealth);
    
    if (game.rnd.integerInRange(1, 2) == 1)
    {
        spinner.x = game.world.centerX - 600 * BasicGame.scaleP;
    }
    else
    {
        spinner.x = game.world.centerX + 600 * BasicGame.scaleP;
    }
    
    if (game.rnd.integerInRange(1, 2) == 1)
    {
        spinner.y = game.world.centerY - 600 * BasicGame.scaleP;
    }
    else
    {
        spinner.y = game.world.centerY + 600 * BasicGame.scaleP;
    }

    
    spinner.exists = true;
    spinner.body.reset(spinner.x, spinner.y);
    spinner.body.angle = spinner.angle;
    spinner.body.collideWorldBounds = false;
    spinner.body.data.gravityScale = 0;
    spinner.body.data.damping = 0;
    spinner.body.setMaterial(spinnerMaterial);
    spinner.body.setCollisionGroup(spinnerCollisionGroup);
    spinner.body.collides([playerCollisionGroup]);
    spinner.exists = true;
    spinner.body.fixedRotation = true;
    spinner.body.kinematic = true;
    spinner.body.allowSleep = true;
    
    
    laser.body.x = spinner.body.x;
    laser.body.y = spinner.body.y;
    laser.exists = true;
    
    laser.body.reset(laser.x, laser.y, 100);
    laser.body.angle = laser.angle;
    laser.body.collideWorldBounds = false;
    laser.body.data.gravityScale = 0;
    laser.body.data.damping = 0;
    laser.body.setMaterial(laserMaterial);
    laser.body.setCollisionGroup(laserCollisionGroup);
    laser.body.collides([playerCollisionGroup]);
    laser.exists = true;
    //laser.body.fixedRotation = true;
    //laser.body.debug = true;
    laser.body.kinematic = true;
    laser.mass = 200;
    laser.body.allowSleep = true;
}

function hitSpinner(player, spinner)
{
    if (energy > 0)
    {
        player.sprite.animations.play('gain');
        gain_snd.play();
        switch (thisGame.rnd.integerInRange(1, 3)) //PLAY HUD ANIMATION
        {
            case 1:
            hud.animations.play('gain1');
            break;

            case 2:
            hud.animations.play('gain2');
            break;

            case 3:
            hud.animations.play('gain3');
            break;

            default:
            break;
        }

        if (BasicGame.playerForce * (((Math.abs(player.velocity.x) + Math.abs(player.velocity.y))) / 2) > 10)
        {
            if (BasicGame.playerForce * (((Math.abs(player.velocity.x) + Math.abs(player.velocity.y))) / 2) > BasicGame.playerMaxDamage)
            {
                spinner.sprite.health -= BasicGame.playerMaxDamage;
                energy += BasicGame.playerMaxDamage * spinnerGain;
            }
            else
            {
                spinner.sprite.health -= BasicGame.playerForce * (((Math.abs(player.velocity.x) + Math.abs(player.velocity.y))) / 2);
                energy += (BasicGame.playerForce * (((Math.abs(player.velocity.x) + Math.abs(player.velocity.y))) / 2)) * spinnerGain;
            }

            if (energy > BasicGame.maxEnergy)
            {
                energy = BasicGame.maxEnergy;
            }
        }
    }

}

function hitLaser(player, laser)
{
    if (energy > 0)
    {
        player.sprite.animations.play('pain');
        pain_snd.play();
        switch (thisGame.rnd.integerInRange(1, 3)) //PLAY HUD ANIMATION
        {
            case 1:
            hud.animations.play('pain1');
            break;

            case 2:
            hud.animations.play('pain2');
            break;

            case 3:
            hud.animations.play('pain3');
            break;

            default:
            break;
        }



        energy -= laserDamage;
        if (energy < 0)
        {
            energy = 0;
        }
    }

}

function killSpinner(spinner, laser, game)
{
    setImportantText(false, spinner.body.x, spinner.body.y, BasicGame.spinnerPoints);
    spawnExplosion(spinner.x, spinner.y, 5 * BasicGame.scaleP, game);
    spinner.health = 0;
    spinner.visible = false;
    spinner.x = game.rnd.integerInRange(900 * BasicGame.scaleP, 1200 * BasicGame.scaleP);
    spinner.y = game.rnd.integerInRange(900 * BasicGame.scaleP, 1200 * BasicGame.scaleP);
    spinner.body.x = spinner.x;
    spinner.body.y = spinner.y;
    spinner.angle = 0;
    spinner.body.angle = 0;
    spinner.body.data.gravityScale = 0;
    spinner.body.setZeroVelocity();
    spinner.body.collideWorldBounds = false;
    
    laser.health = 0;
    laser.visible = false;
    laser.x = game.rnd.integerInRange(900 * BasicGame.scaleP, 1200 * BasicGame.scaleP);
    laser.y = game.rnd.integerInRange(900 * BasicGame.scaleP, 1200 * BasicGame.scaleP);
    laser.body.x = laser.x;
    laser.body.y = laser.y;
    laser.angle = 0;
    laser.body.angle = 0;
    laser.body.data.gravityScale = 0;
    laser.body.setZeroVelocity();
    laser.body.collideWorldBounds = false;

    
    BasicGame.enemiesDefeated += 1;
    BasicGame.roundBonus += BasicGame.spinnerPoints;
    enemyKill_snd.play();
    
    if (BasicGame.isTutorial)
    {
        tutorialTimer();
    }
}

function spawnMagnet(magnet, game)
{
    magnet.reset(player.x, player.y, magnetHealth);
    
    if (game.rnd.integerInRange(1, 2) == 1)
    {
        //FACING RIGHT
        magnet.x = game.world.centerX - 600 * BasicGame.scaleP;
    }
    else
    {
        //FACING LEFT
        magnet.x = game.world.centerX + 600 * BasicGame.scaleP;
    }
    
    magnet.y = game.rnd.integerInRange(game.world.centerY - 300 * BasicGame.scaleP, game.world.centerY + 300 * BasicGame.scaleP);

    magnet.angle = (-1) * game.math.radToDeg(game.math.angleBetween(magnet.x, magnet.y, player.x, player.y));
    
    magnet.exists = true;
    magnet.body.reset(magnet.x, magnet.y);
    magnet.body.angle = magnet.angle;
    magnet.body.collideWorldBounds = false;
    magnet.body.data.gravityScale = 0;
    magnet.body.data.damping = (0.2);
    magnet.body.setMaterial(magnetMaterial);
    magnet.body.setCollisionGroup(magnetCollisionGroup);
    magnet.body.collides([magnetCollisionGroup, playerCollisionGroup]);
    magnet.exists = true;
    magnet.body.mass = 0.5;
    magnet.body.fixedRotation = true;
    magnet.body.allowSleep = true;
    magnet.animations.play('active');
}

function hitMagnet(player, magnet) //Params are bodies, access with .sprite
{
    if (energy > 0)
    {
        player.sprite.animations.play('pain');
        switch (thisGame.rnd.integerInRange(1, 3)) //PLAY HUD ANIMATION
        {
            case 1:
            hud.animations.play('pain1');
            break;

            case 2:
            hud.animations.play('pain2');
            break;

            case 3:
            hud.animations.play('pain3');
            break;

            default:
            break;
        }

        if (BasicGame.playerForce * (((Math.abs(player.velocity.x) + Math.abs(player.velocity.y))) * 0.5) > 28)
        {
            if (BasicGame.playerForce * (((Math.abs(player.velocity.x) + Math.abs(player.velocity.y))) * 0.5) > BasicGame.playerMaxDamage)
            {
                magnet.sprite.health -= BasicGame.playerMaxDamage;
                energy += BasicGame.playerMaxDamage * magnetGain;
            }
            else
            {
                magnet.sprite.health -= BasicGame.playerForce * (((Math.abs(player.velocity.x) + Math.abs(player.velocity.y))) * 0.5);
                energy += (BasicGame.playerForce * (((Math.abs(player.velocity.x) + Math.abs(player.velocity.y))) * 0.5)) * magnetGain;
            }

            player.sprite.animations.play('gain');
            gain_snd.play();
            switch (thisGame.rnd.integerInRange(1, 3)) //PLAY HUD ANIMATION
            {
                case 1:
                hud.animations.play('gain1');
                break;

                case 2:
                hud.animations.play('gain2');
                break;

                case 3:
                hud.animations.play('gain3');
                break;

                default:
                break;
            }


            if (energy > BasicGame.maxEnergy)
            {
                energy = BasicGame.maxEnergy;
            }
        }
        else
        {
            player.sprite.animations.play('pain');
            pain_snd.play();
            switch (thisGame.rnd.integerInRange(1, 3)) //PLAY HUD ANIMATION
            {
                case 1:
                hud.animations.play('pain1');
                break;

                case 2:
                hud.animations.play('pain2');
                break;

                case 3:
                hud.animations.play('pain3');
                break;

                default:
                break;
            }


            energy -= magnetDamage;
            if (energy < 0)
            {
                energy = 0;
            }
        }
    }
    
    
    //CHANGE STATES
    if (magnet.sprite.health < 0)
    {
        //SPLODE
        killMagnet(magnet.sprite, thisGame);
    }
    else if (magnet.sprite.health <= 30)
    {
        //GOING DOWN
        magnet.fixedRotation = false;
        magnet.data.gravityScale = 1;
        magnet.collideWorldBounds = false;
    }
}

function killMagnet(magnet, game)
{
    setImportantText(false, magnet.body.x, magnet.body.y, BasicGame.magnetPoints);
    magnet.animations.stop();
    spawnExplosion(magnet.x, magnet.y, 3 * BasicGame.scaleP, thisGame);
    magnet.health = 0;
    magnet.visible = false;
    magnet.x = game.rnd.integerInRange(900 * BasicGame.scaleP, 1200 * BasicGame.scaleP);
    magnet.y = game.rnd.integerInRange(900 * BasicGame.scaleP, 1200 * BasicGame.scaleP);
    magnet.body.x = magnet.x;
    magnet.body.y = magnet.y;
    magnet.angle = 0;
    magnet.body.angle = 0;
    magnet.body.data.gravityScale = 0;
    magnet.body.setZeroVelocity();
    magnet.body.collideWorldBounds = false;
    
    BasicGame.enemiesDefeated += 1;
    BasicGame.roundBonus += BasicGame.magnetPoints;
    enemyKill_snd.play();
    
    if (BasicGame.isTutorial)
    {
        tutorialTimer();
    }
}

function spawnJet(jet, game)
{
    jet.reset(player.x, player.y, jetHealth);
    
    //jet.body.reset(player.x, player.x);
    //jet.revive(100);
   // jet.body.collideWorldBounds = true;
    
    if (game.rnd.integerInRange(1, 2) == 1)
    {
        //FACING RIGHT
        jet.x = game.world.centerX - 600 * BasicGame.scaleP;
    }
    else
    {
        //FACING LEFT
        jet.x = game.world.centerX + 600 * BasicGame.scaleP;
    }
    
    jet.y = game.rnd.integerInRange(game.world.centerY - 300 * BasicGame.scaleP, game.world.centerY + 300 * BasicGame.scaleP);

    if ((jet.x > game.world.centerX) && (jet.scale.x > 0))
    {
        jet.scale.x *= (-1);
    }
    else if ((jet.x < game.world.centerX) && (jet.scale.x < 0))
    {
        jet.scale.x *= (-1);
    }
    
    jet.exists = true;
    jet.angle = 0;
    jet.body.angle = 0;
    jet.body.reset(jet.x, jet.y);
    jet.body.collideWorldBounds = false;
    jet.body.fixedRotation = true;
    jet.body.data.gravityScale = 0;
    jet.body.data.damping = (0.8);
    
    jet.body.setMaterial(jetMaterial);
    jet.body.setCollisionGroup(jetCollisionGroup);

    //  JET will collide against themselves and the player
    //  If you don't set this they'll not collide with anything.
    //  The first parameter is either an array or a single collision group.
    jet.body.collides([jetCollisionGroup, playerCollisionGroup]);
    jet.body.allowSleep = true;
    jet.exists = true;
    jet.animations.play('fly');
    jet.anchor.setTo(0.5, 0.8);
}

function hitJet(player, jet) //Params are bodies, access sprite by .sprite
{
    //console.log("Jet Health Old: " + jet.sprite.health);
    if (energy > 0)
    {
        player.sprite.animations.play('gain');
        gain_snd.play();
        switch (thisGame.rnd.integerInRange(1, 3)) //PLAY HUD ANIMATION
        {
            case 1:
            hud.animations.play('gain1');
            break;

            case 2:
            hud.animations.play('gain2');
            break;

            case 3:
            hud.animations.play('gain3');
            break;

            default:
            break;
        }

        //console.log("Velocity Total " + (Math.abs(player.velocity.x) + Math.abs(player.velocity.y)));
        if (BasicGame.playerForce * (((Math.abs(player.velocity.x) + Math.abs(player.velocity.y))) / 2) > 10)
        {
            if (BasicGame.playerForce * (((Math.abs(player.velocity.x) + Math.abs(player.velocity.y))) / 2) > BasicGame.playerMaxDamage)
            {
                jet.sprite.health -= BasicGame.playerMaxDamage;
                energy += BasicGame.playerMaxDamage * jetGain;
            }
            else
            {
                jet.sprite.health -= BasicGame.playerForce * (((Math.abs(player.velocity.x) + Math.abs(player.velocity.y))) / 2);
                energy += (BasicGame.playerForce * (((Math.abs(player.velocity.x) + Math.abs(player.velocity.y))) / 2)) * jetGain;
            }

            if (energy > BasicGame.maxEnergy)
            {
                energy = BasicGame.maxEnergy;
            }
        }
    }
    
    if (jet.sprite.health < 0)
    {
        //SPLODE
        killJet(jet.sprite, thisGame);
    }
    else if (jet.sprite.health <= 40)
    {
        //GOING DOWN
        jet.fixedRotation = false;
        jet.data.gravityScale = 1;
        jet.collideWorldBounds = false;
    }
    
    //console.log("Jet Health New: " + jet.sprite.health);
}

function killJet(jet, game)
{
    setImportantText(false, jet.body.x, jet.body.y, BasicGame.jetPoints);
    spawnExplosion(jet.x, jet.y, 5 * BasicGame.scaleP, thisGame);
    jet.health = 0;
    jet.visible = false;
    jet.x = game.rnd.integerInRange(900 * BasicGame.scaleP, 1200 * BasicGame.scaleP);
    jet.y = game.rnd.integerInRange(900 * BasicGame.scaleP, 1200 * BasicGame.scaleP);
    jet.body.x = jet.x;
    jet.body.y = jet.y;
    jet.angle = 0;
    jet.body.angle = 0;
    jet.body.data.gravityScale = 0;
    jet.body.setZeroVelocity();
    jet.body.collideWorldBounds = false;
    jet.animations.stop();
    
    BasicGame.enemiesDefeated += 1;
    BasicGame.roundBonus += BasicGame.jetPoints;
    enemyKill_snd.play();
    
    if (BasicGame.isTutorial)
    {
        tutorialTimer();
    }
}

function emp()
{
    if (!gamePaused)
    {
        if (energy > BasicGame.empDrain)
        {
            for (em = jets.length - 1; em >= 0; em--)
            {
                jets.getAt(em).health -= BasicGame.empDamage;
            }
            for (em = magnets.length - 1; em >= 0; em--)
            {
                magnets.getAt(em).health -= BasicGame.empDamage;
            }
            for (em = rockets.length - 1; em >= 0; em--)
            {
                if ((rockets.getAt(em).health > 0) && (rockets.getAt(em).exists))
                {
                    killRocket(rockets.getAt(em), thisGame);
                }
            }
            for (em = spinners.length - 1; em >= 0; em--)
            {
                spinners.getAt(em).health -= BasicGame.empDamage;
            }


            if ((jackknife.health > 0) && (jackknife.exists) && (jackknife.inCamera))
            {
                jackknife.health -= BasicGame.empDamage;
            }

            energy -= BasicGame.empDrain;
            hud.animations.play('emp');
            player.animations.play('fall');
            emp_snd.play();
        }
        else
        {
            BasicGame.boop.play();
        }
    }
}

function pauseGame() 
{
    if (whiteFade.alpha <= 0)
    {
        if (gamePaused)
        {
            gamePaused = false;
            blackFade.visible = false;
            paused_txt.visible = false;
            quitGameButton.visible = false;
            quitGameButton_txt.visible = false;
            continueGameButton.visible = false;
            continueGameButton_txt.visible = false;
            thisGame.physics.p2.paused = false;
        }
        else
        {
            gamePaused = true;
            blackFade.visible = true;
            paused_txt.visible = true;
            quitGameButton.visible = true;
            quitGameButton_txt.visible = true;
            continueGameButton.visible = true;
            continueGameButton_txt.visible = true;
            thisGame.physics.p2.paused = true;
        }
    }
}

function respawnPlayer()
{
    //player.body.kinematic = false;
    //player.body.dynamic = true;
    player.x = thisGame.world.centerX;
    player.y = thisGame.world.centerY + 500 * BasicGame.scaleP;
    player.body.x = player.x;
    player.body.y = player.y;
    player.body.velocity.y = (-600);
    player.body.velocity.x = 0;
    player.body.angle = 0;
    player.angle = 0;
    
    player.health = 100;
    player.body.collideWorldBounds = false;
    
    if ((BasicGame.secondChance) && (BasicGame.lives == 1))
    {
        setImportantText(true, 10, 10, 9);
    }
    
    if (BasicGame.noGravity)
    {
        player.body.data.gravityScale = 0;
    }
    else
    {
        player.body.data.gravityScale = 1.3;
    }
    
    
    energy = BasicGame.maxEnergy;
    
    warp_snd.play();
}

function spawnJackknife(game)
{
    //jackknife.reset(player.x, player.y, jackHealth);
    jackknife.health = jackHealth;
    
    
    jackknife.exists = true;
    jackknife.angle = 0;
    jackknife.body.angle = 0;
    //jackknife.body.reset(jackknife.x, jackknife.y);
    jackknife.body.collideWorldBounds = false;
    jackknife.body.data.gravityScale = 0;
    jackknife.body.data.damping = 0;
    
    jackknife.body.setCollisionGroup(jackknifeCollisionGroup);
    jackknife.body.setMaterial(jackknifeMaterial);
    jackknife.body.collides(playerCollisionGroup);
    jackknife.exists = true;
    jackknife.animations.play('active');
    jackknife.anchor.setTo(0.5, 0.5);
    jackknife.body.allowSleep = true;
    
    if (game.rnd.integerInRange(1, 2) == 1)
    {
        jackknife.body.x = game.world.centerX - 600 * BasicGame.scaleP;
    }
    else
    {
        jackknife.body.x = game.world.centerX + 600 * BasicGame.scaleP;
    }
    
    if (game.rnd.integerInRange(1, 2) == 1)
    {
        jackknife.body.y = game.world.centerY - 600 * BasicGame.scaleP;
    }
    else
    {
        jackknife.body.y = game.world.centerY + 600 * BasicGame.scaleP;
    }

    
    //VARS
    jackAttack = true;
    jackLunges = jackLungeCap;
    jackLungeTime = jackLungeTimeCap;
    jackHangTime = jackHangTimeCap;
    
    //jackWarning_snd.play();
}

function hitJackknife(player, jack)
{
    if (energy > 0)
    {
        if (jack.sprite.health > 0)
        {
            if (jackAttack == true) //IS ATTACKING PLAYER
            {
                player.sprite.animations.play('pain');
                switch (thisGame.rnd.integerInRange(1, 3)) //PLAY HUD ANIMATION
                {
                    case 1:
                    hud.animations.play('pain1');
                    break;

                    case 2:
                    hud.animations.play('pain2');
                    break;

                    case 3:
                    hud.animations.play('pain3');
                    break;

                    default:
                    break;
                }
                pain_snd.play();

                energy -= jackDamage;
                if (energy < 0)
                {
                    energy = 0;
                }
            }
            else //OPEN TO ATTACK
            {
                jackHurt_snd.play();
                
                if (BasicGame.playerForce * (((Math.abs(player.velocity.x) + Math.abs(player.velocity.y))) / 2) > BasicGame.playerMaxDamage)
                {
                    jack.sprite.health -= BasicGame.playerMaxDamage;
                    energy += BasicGame.playerMaxDamage * jackGain;
                }
                else
                {
                    jack.sprite.health -= BasicGame.playerForce * (((Math.abs(player.velocity.x) + Math.abs(player.velocity.y))) / 2);
                    energy += (BasicGame.playerForce * (((Math.abs(player.velocity.x) + Math.abs(player.velocity.y))) / 2)) * jackGain;
                }
                

                player.sprite.animations.play('gain');
                gain_snd.play();
                switch (thisGame.rnd.integerInRange(1, 3)) //PLAY HUD ANIMATION
                {
                    case 1:
                    hud.animations.play('gain1');
                    break;

                    case 2:
                    hud.animations.play('gain2');
                    break;

                    case 3:
                    hud.animations.play('gain3');
                    break;

                    default:
                    break;
                }
                
                if (energy > BasicGame.maxEnergy)
                {
                    energy = BasicGame.maxEnergy;
                }
            }
        }
    }
}

function makeRoundEnd()
{
    pauseGame();
    energy = 0;
    BasicGame.lives = 1;
    pauseQuit = true;
}

function endRound()
{
    shutDown();
    thisGame.state.start('GameOver');
}

function muteGame()
{
    if (thisGame.sound.mute == true)
    {
        thisGame.sound.mute = false;
        muteX.visible = false;
    }
    else
    {
        thisGame.sound.mute = true;
        muteX.visible = true;
    }
}

function playerAnimComplete(sprite, anim)
{
    /*if ((anim.name == 'gain') || (anim.name == 'pain') || (anim.name == 'fall'))
    {
        sprite.animations.play('active');
    }*/
    if (energy > 0)
    {
        sprite.animations.play('active');
    }
    else
    {
        sprite.animations.play('fall');
    }
}

function jackknifeAnimComplete(sprite, anim)
{
    if ((sprite.health > 0) && (jackAttack))
    {
        sprite.animations.play('active');
    }
    else if (sprite.health > 0)
    {
        sprite.animations.play('open');
    }
    else
    {
        sprite.animations.play('fall');
    }
}

function hudAnimComplete(sprite, anim)
{
    sprite.animations.play('none');
}

function explosionAnimComplete(sprite, anim)
{
    if (sprite.exists)
    {
        sprite.kill();
    }
}

function setImportantText(isSecondChance, x, y, points)
{
    if (isSecondChance)
    {
        important_txt.text = thisGame.cache.getText('gameData').secondChance;
        important_txt.visible = true;
        importantTimer = 85;
    }
    else if (!BasicGame.isTutorial)
    {
        //Phrase
        important_txt.text = "";
        switch (thisGame.rnd.integerInRange(1, 50))
        {
                case 1:
                important_txt.text = '' + thisGame.cache.getText('gameData').phrase1 + " +" + points;
                break;
                
                case 2:
                important_txt.text = '' + thisGame.cache.getText('gameData').phrase2 + " +" + points;
                break;
                
                case 3:
                important_txt.text = '' + thisGame.cache.getText('gameData').phrase3 + " +" + points;
                break;
                
                case 4:
                important_txt.text = '' + thisGame.cache.getText('gameData').phrase4 + " +" + points;
                break;
                
                case 5:
                important_txt.text = '' + thisGame.cache.getText('gameData').phrase5 + " +" + points;
                break;
                
                case 6:
                important_txt.text = '' + thisGame.cache.getText('gameData').phrase6 + " +" + points;
                break;
                
                case 7:
                important_txt.text = '' + thisGame.cache.getText('gameData').phrase7 + " +" + points;
                break;
                
                case 8:
                important_txt.text = '' + thisGame.cache.getText('gameData').phrase8 + " +" + points;
                break;
                
                case 9:
                important_txt.text = '' + thisGame.cache.getText('gameData').phrase9 + " +" + points;
                break;

                case 10:
                important_txt.text = '' + thisGame.cache.getText('gameData').phrase10 + " +" + points;
                break;
                
                case 11:
                important_txt.text = '' + thisGame.cache.getText('gameData').phrase11 + " +" + points;
                break;
                
                case 12:
                important_txt.text = '' + thisGame.cache.getText('gameData').phrase12 + " +" + points;
                break;
                
                case 13:
                important_txt.text = '' + thisGame.cache.getText('gameData').phrase13 + " +" + points;
                break;

                case 14:
                important_txt.text = '' + thisGame.cache.getText('gameData').phrase14 + " +" + points;
                break;

                case 15:
                important_txt.text = '' + thisGame.cache.getText('gameData').phrase15 + " +" + points;
                break;

                case 16:
                important_txt.text = '' + thisGame.cache.getText('gameData').phrase16 + " +" + points;
                break;

                case 17:
                important_txt.text = '' + thisGame.cache.getText('gameData').phrase17 + " +" + points;
                break;

                case 18:
                important_txt.text = '' + thisGame.cache.getText('gameData').phrase18 + " +" + points;
                break;
                
                case 19:
                important_txt.text = '' + thisGame.cache.getText('gameData').phrase19 + " +" + points;
                break;

                case 20:
                important_txt.text = '' + thisGame.cache.getText('gameData').phrase20 + " +" + points;
                break;
                
                case 21:
                important_txt.text = '' + thisGame.cache.getText('gameData').phrase21 + " +" + points;
                break;
                
                case 22:
                important_txt.text = '' + thisGame.cache.getText('gameData').phrase22 + " +" + points;
                break;
                
                case 23:
                important_txt.text = '' + thisGame.cache.getText('gameData').phrase23 + " +" + points;
                break;

                case 24:
                important_txt.text = '' + thisGame.cache.getText('gameData').phrase24 + " +" + points;
                break;

                case 25:
                important_txt.text = '' + thisGame.cache.getText('gameData').phrase25 + " +" + points;
                break;

                case 26:
                important_txt.text = '' + thisGame.cache.getText('gameData').phrase26 + " +" + points;
                break;

                case 27:
                important_txt.text = '' + thisGame.cache.getText('gameData').phrase27 + " +" + points;
                break;

                case 28:
                important_txt.text = '' + thisGame.cache.getText('gameData').phrase28 + " +" + points;
                break;
                
                case 29:
                important_txt.text = '' + thisGame.cache.getText('gameData').phrase29 + " +" + points;
                break;
                
                case 30:
                important_txt.text = '' + thisGame.cache.getText('gameData').phrase30 + " +" + points;
                break;
                
                case 31:
                important_txt.text = '' + thisGame.cache.getText('gameData').phrase31 + " +" + points;
                break;
                
                case 32:
                important_txt.text = '' + thisGame.cache.getText('gameData').phrase32 + " +" + points;
                break;
                
                case 33:
                important_txt.text = '' + thisGame.cache.getText('gameData').phrase33 + " +" + points;
                break;

                case 34:
                important_txt.text = '' + thisGame.cache.getText('gameData').phrase34 + " +" + points;
                break;

                case 35:
                important_txt.text = '' + thisGame.cache.getText('gameData').phrase35 + " +" + points;
                break;

                case 36:
                important_txt.text = '' + thisGame.cache.getText('gameData').phrase36 + " +" + points;
                break;

                case 37:
                important_txt.text = '' + thisGame.cache.getText('gameData').phrase37 + " +" + points;
                break;

                case 38:
                important_txt.text = '' + thisGame.cache.getText('gameData').phrase38 + " +" + points;
                break;
                
                case 39:
                important_txt.text = '' + thisGame.cache.getText('gameData').phrase39 + " +" + points;
                break;
                
                case 40:
                important_txt.text = '' + thisGame.cache.getText('gameData').phrase40 + " +" + points;
                break;
                
                case 41:
                important_txt.text = '' + thisGame.cache.getText('gameData').phrase41 + " +" + points;
                break;
                
                case 42:
                important_txt.text = '' + thisGame.cache.getText('gameData').phrase42 + " +" + points;
                break;
                
                case 43:
                important_txt.text = '' + thisGame.cache.getText('gameData').phrase43 + " +" + points;
                break;

                case 44:
                important_txt.text = '' + thisGame.cache.getText('gameData').phrase44 + " +" + points;
                break;

                case 45:
                important_txt.text = '' + thisGame.cache.getText('gameData').phrase45 + " +" + points;
                break;

                case 46:
                important_txt.text = '' + thisGame.cache.getText('gameData').phrase46 + " +" + points;
                break;

                case 47:
                important_txt.text = '' + thisGame.cache.getText('gameData').phrase47 + " +" + points;
                break;

                case 48:
                important_txt.text = '' + thisGame.cache.getText('gameData').phrase48 + " +" + points;
                break;
                
                case 49:
                important_txt.text = '' + thisGame.cache.getText('gameData').phrase49 + " +" + points;
                break;
                
                case 50:
                important_txt.text = '' + thisGame.cache.getText('gameData').phrase50 + " +" + points;
                break;
                
                case 51:
                important_txt.text = '' + thisGame.cache.getText('gameData').phrase51 + " +" + points;
                break;
                
                case 52:
                important_txt.text = '' + thisGame.cache.getText('gameData').phrase52 + " +" + points;
                break;
                
                case 53:
                important_txt.text = '' + thisGame.cache.getText('gameData').phrase53 + " +" + points;
                break;

                case 54:
                important_txt.text = '' + thisGame.cache.getText('gameData').phrase54 + " +" + points;
                break;

                case 55:
                important_txt.text = '' + thisGame.cache.getText('gameData').phrase55 + " +" + points;
                break;

                case 56:
                important_txt.text = '' + thisGame.cache.getText('gameData').phrase56 + " +" + points;
                break;

                case 57:
                important_txt.text = '' + thisGame.cache.getText('gameData').phrase57 + " +" + points;
                break;

                case 58:
                important_txt.text = '' + thisGame.cache.getText('gameData').phrase58 + " +" + points;
                break;
                
                case 59:
                important_txt.text = '' + thisGame.cache.getText('gameData').phrase59 + " +" + points;
                break;
                
                case 60:
                important_txt.text = '' + thisGame.cache.getText('gameData').phrase60 + " +" + points;
                break;
                
                case 61:
                important_txt.text = '' + thisGame.cache.getText('gameData').phrase61 + " +" + points;
                break;
                
                case 62:
                important_txt.text = '' + thisGame.cache.getText('gameData').phrase62 + " +" + points;
                break;
                
                case 63:
                important_txt.text = '' + thisGame.cache.getText('gameData').phrase63 + " +" + points;
                break;

                case 64:
                important_txt.text = '' + thisGame.cache.getText('gameData').phrase64 + " +" + points;
                break;

                case 65:
                important_txt.text = '' + thisGame.cache.getText('gameData').phrase65 + " +" + points;
                break;

                case 66:
                important_txt.text = '' + thisGame.cache.getText('gameData').phrase66 + " +" + points;
                break;

                case 67:
                important_txt.text = '' + thisGame.cache.getText('gameData').phrase67 + " +" + points;
                break;

                case 68:
                important_txt.text = '' + thisGame.cache.getText('gameData').phrase68 + " +" + points;
                break;
                
                case 69:
                important_txt.text = '' + thisGame.cache.getText('gameData').phrase69 + " +" + points;
                break;
                
                case 70:
                important_txt.text = '' + thisGame.cache.getText('gameData').phrase70 + " +" + points;
                break;


        }
        important_txt.visible = true;
        importantTimer = 75;
    }
}

function shutDown() { //CLEAN UP
    
    if (background)
    {
        background.destroy();
        background = null;
    }
    if (player)
    {
        player.destroy();
        player = null;
    }
    if (analog)
    {
        analog.destroy();
        analog = null;
    }
    if (energyBarFront)
    {
        energyBarFront.destroy();
        energyBarFront = null;
    }
    if (energyBarBack)
    {
        energyBarBack.destroy();
        energyBarBack = null;
    }
    if (energyBarMiddle)
    {
        energyBarMiddle.destroy();
        energyBarMiddle = null;
    }
    if (hud)
    {
        hud.destroy();
        hud = null;
    }
    if (empButton)
    {
        empButton.destroy();
        empButton = null;
    }
    if (score_txt)
    {
        score_txt.destroy();
        score_txt = null;
    }
    if (pauseButton)
    {
        pauseButton.destroy();
        pauseButton = null;
    }
    if (stars1)
    {
        stars1.destroy();
        stars1 = null;
    }
    if (stars2)
    {
        stars2.destroy();
        stars2 = null;
    }
    if (muteButton)
    {
        muteButton.destroy();
        muteButton = null;
    }
    if (muteX)
    {
        muteX.destroy();
        muteX = null;
    }
    if (jackknife)
    {
        jackknife.destroy();
        jackknife = null;
    }
    if (blackFade)
    {
        blackFade.destroy();
        blackFade = null;
    }
    if (whiteFade)
    {
        whiteFade.destroy();
        whiteFade = null;
    }
    if (continueGameButton)
    {
        continueGameButton.destroy();
        continueGameButton = null;
    }
    if (continueGameButton_txt)
    {
        continueGameButton_txt.destroy();
        continueGameButton_txt = null;
    }
    if (quitGameButton)
    {
        quitGameButton.destroy();
        quitGameButton = null;
    }
    if (quitGameButton_txt)
    {
        quitGameButton_txt.destroy();
        quitGameButton_txt = null;
    }
    
    //TEMPS
    if (tempCloud)
    {
        tempCloud.destroy();
        tempCloud = null;
    }
    if (tempExplosion)
    {
        tempExplosion.destroy();
        tempExplosion = null;
    }
    if (tempJet)
    {
        tempJet.destroy();
        tempJet = null;
    }
    if (tempMagnet)
    {
        tempMagnet.destroy();
        tempMagnet = null;
    }
    if (tempRocket)
    {
        tempRocket.destroy();
        tempRocket = null;
    }
    if (tempSpinner)
    {
        tempSpinner.destroy();
        tempSpinner = null;
    }
    if (tempLaser)
    {
        tempLaser.destroy();
        tempLaser = null;
    }
    if (tempJackLightning)
    {
        tempJackLightning.destroy();
        tempJackLightning = null;
    }
    
    //GROUPS
    if (jets)
    {
        jets.destroy(true);
        jets = null;
    }
    if (magnets)
    {
        magnets.destroy(true);
        magnets = null;
    }
    if (clouds)
    {
        clouds.destroy(true);
        clouds = null;
    }
    if (explosions)
    {
        explosions.destroy(true);
        explosions = null;
    }
    if (rockets)
    {
        rockets.destroy(true);
        rockets = null;
    }
    if (spinners)
    {
        spinners.destroy(true);
        spinners = null;
    }
    if (lasers)
    {
        lasers.destroy(true);
        lasers = null;
    }
    if (jackLightning)
    {
        jackLightning.destroy();
        jackLightning = null;
    }
    
    //CONTACT MATERIALS
    if (playerMaterial)
    {
        thisGame.physics.p2.removeContactMaterial(playerMaterial);
        playerMaterial = null;
    }
    if (jetMaterial)
    {
        thisGame.physics.p2.removeContactMaterial(jetMaterial);
        jetMaterial = null;
    }
    if (jackknifeMaterial)
    {
        thisGame.physics.p2.removeContactMaterial(jackknifeMaterial);
        jackknifeMaterial = null;
    }
    if (rocketMaterial)
    {
        thisGame.physics.p2.removeContactMaterial(rocketMaterial);
        rocketMaterial = null;
    }
    if (worldMaterial)
    {
        thisGame.physics.p2.removeContactMaterial(worldMaterial);
        worldMaterial = null;
    }
    if (playerJetContactMaterial)
    {
        thisGame.physics.p2.removeContactMaterial(playerJetContactMaterial);
        playerJetContactMaterial = null;
    }
    if (playerRocketContactMaterial)
    {
        thisGame.physics.p2.removeContactMaterial(playerRocketContactMaterial);
        playerRocketContactMaterial = null;
    }
    if (playerWorldContactMaterial)
    {
        thisGame.physics.p2.removeContactMaterial(playerWorldContactMaterial);
        playerWorldContactMaterial = null;
    }
    if (playerJackknifeContactMaterial)
    {
        thisGame.physics.p2.removeContactMaterial(playerJackknifeContactMaterial);
        playerJackknifeContactMaterial = null;
    }
    if (magnetMaterial)
    {
        thisGame.physics.p2.removeContactMaterial(magnetMaterial);
        magnetMaterial = null;
    }
    if (playerMagnetContactMaterial)
    {
        thisGame.physics.p2.removeContactMaterial(playerMagnetContactMaterial);
        playerMagnetContactMaterial = null;
    }
    if (laserMaterial)
    {
        thisGame.physics.p2.removeContactMaterial(laserMaterial);
        laserMaterial = null;
    }
    if (spinnerMaterial)
    {
        thisGame.physics.p2.removeContactMaterial(spinnerMaterial);
        spinnerMaterial = null;
    }
    if (jackLightningMaterial)
    {
        thisGame.physics.p2.removeContactMaterial(jackLightningMaterial);
        jackLightningMaterial = null;
    }
    if (playerSpinnerContactMaterial)
    {
        thisGame.physics.p2.removeContactMaterial(playerSpinnerContactMaterial);
        playerSpinnerContactMaterial = null;
    }
    if (playerLaserContactMaterial)
    {
        thisGame.physics.p2.removeContactMaterial(playerLaserContactMaterial);
        playerLaserContactMaterial = null;
    }
    if (playerJackLightningContactMaterial)
    {
        thisGame.physics.p2.removeContactMaterial(playerJackLightningContactMaterial);
        playerJackLightningContactMaterial = null;
    }


    
    //COLLISION GROUPS
    if (noGroup)
    {
        noGroup = null;
    }
    if (jackDeadGroup)
    {
        jackDeadGroup = null;
    }
    if (jetCollisionGroup)
    {
        jetCollisionGroup = null;
    }
    if (magnetCollisionGroup)
    {
        magnetCollisionGroup = null;
    }
    if (playerCollisionGroup)
    {
        playerCollisionGroup = null;
    }
    if (rocketCollisionGroup)
    {
        rocketCollisionGroup = null;
    }
    if (jackknifeCollisionGroup)
    {
        jackknifeCollisionGroup = null;
    }
    if (spinnerCollisionGroup)
    {
        spinnerCollisionGroup = null;
    }
    if (laserCollisionGroup)
    {
        laserCollisionGroup = null;
    }
    if (jackLightningCollisionGroup)
    {
        jackLightningCollisionGroup = null;
    }
    
    //TEXT
    if (score_txt)
    {
        score_txt.destroy();
        score_txt = null;
    }
    if (paused_txt)
    {
        paused_txt.destroy();
        paused_txt = null;
    }
    if (tutorial_txt)
    {
        tutorial_txt.destroy();
        tutorial_txt = null;
    }
    if (important_txt)
    {
        important_txt.destroy();
        important_txt = null;
    }
    
    //SOUND
    /*if (explosion1_snd)
    {
        explosion1_snd.stop();
        explosion1_snd.destroy();
        explosion1_snd = null;
    }
    if (explosion2_snd)
    {
        explosion2_snd.stop();
        explosion2_snd.destroy();
        explosion2_snd = null;
    }
    if (explosion3_snd)
    {
        explosion3_snd.stop();
        explosion3_snd.destroy();
        explosion3_snd = null;
    }
    if (emp_snd)
    {
        emp_snd.stop();
        emp_snd.destroy();
        emp_snd = null;
    }
    if (gain_snd)
    {
        gain_snd.stop();
        gain_snd.destroy();
        gain_snd = null;
    }
    if (pain_snd)
    {
        pain_snd.stop();
        pain_snd.destroy();
        pain_snd = null;
    }
    if (shoot_snd)
    {
        shoot_snd.stop();
        shoot_snd.destroy();
        shoot_snd = null;
    }
    if (woosh_snd)
    {
        woosh_snd.stop();
        woosh_snd.destroy();
        woosh_snd = null;
    }*/
    
    //EVENTS
    thisGame.input.onDown.remove(pressDown, thisGame);
    thisGame.input.onUp.remove(releaseUp, thisGame);

}

function init() { //RESET VARS
    tutorialNumber = 1;
    tutorialTimerActive = false;
    difficultyLevel = 2;
    difficultyCap = 25;
    catchFlag = false;
    spawning = false;
    gamePaused = false;
    pauseQuit = false;
    swipeTime = 0;
    importantTimer = 0;
    
    if (BasicGame.moreEnergy == true)
    {
        BasicGame.maxEnergy = 330;
    }
    else
    {
        BasicGame.maxEnergy = 230;
    }
    energy = BasicGame.maxEnergy;
    energyWidth = energyBarMiddle.width;
    
    if (BasicGame.moreForce == true)
    {
        BasicGame.playerSpeed = 2.95 * BasicGame.scaleP; //2.6
        BasicGame.playerForce = 2.20;
        BasicGame.playerMaxDamage = 160;
    }
    else
    {
        BasicGame.playerSpeed = 2.80 * BasicGame.scaleP; //2.5
        BasicGame.playerForce = 2.05;
        BasicGame.playerMaxDamage = 140;
    }
    
    rocketDamage = 22;
    rocketSpeed = 550 * BasicGame.scaleP;
    rocketProbability = 30;
    spinnerHealth = 200;
    spinnerSpeed = 1.5;
    spinnerGain = 0.275;
    laserDamage = 3;
    magnetDamage = 5;
    magnetHealth = 220;
    magnetGain = 0.1;
    jetHealth = 250;
    jetGain = 0.2;
    
    //JACKKNIFE
    jackLunges = 0;
    jackLungeTime = 900;
    jackLungeTimeCap = 900;
    jackLungeCap = 2;
    jackAttack = false;
    jackHangTime = 3300;
    jackHangTimeCap = 3300;
    jackHealth = 300;
    jackDamage = 26;
    jackSpeed = 32;
    jackGain = 0.3;
    jackProbability = 5;
    jackLightningProbability = 70;
    
    startTime = thisGame.time.now;
    BasicGame.roundScore = 0;
    BasicGame.roundTime = 0;
    BasicGame.roundBonus = 0;
    
    if (BasicGame.secondChance == true)
    {
        BasicGame.lives += 2;
    }
    else
    {
        BasicGame.lives += 1;
    }
}

