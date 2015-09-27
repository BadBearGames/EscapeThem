var unlocksBackground = null;
var sevenRestingU = null;
var backButton = null;
var backButton_txt = null;
var unlocks_txt = null;
var unlocksMenuMuteButton = null;
var unlocksMenuMuteX = null;
var unlocksTokens_txt = null;
var unlocksTokenSprite = null;

var buyButton = null;
var buyButton_txt = null;
var costTokenSprite = null;
var costTokens_txt = null;

var empUnlockedButton = null;
var empUnlockedButton_txt = null;
var secondChanceButton = null;
var secondChanceButton_txt = null;
var moreEnergyButton = null;
var moreEnergyButton_txt = null;
var moreForceButton = null;
var moreForceButton_txt = null;
var noGravityButton = null;
var noGravityButton_txt = null;

var costumeHead_txt = null;
var costumeButton = null;
var costumeButton_txt = null;
var nextCostumeButton = null;
var nextCostumeButton_txt = null;
var backCostumeButton = null;
var backCostumeButton_txt = null;
var modeHead_txt = null;
var modeButton = null;
var modeButton_txt = null;
var nextModeButton = null;
var nextModeButton_txt = null;
var backModeButton = null;
var backModeButton_txt = null;

var unlockSomething_snd = null;

var selectedCostume = 0;
var selectedMode = 0;

var currentSelected = "";

BasicGame.Unlocks = function (game) {

};

BasicGame.Unlocks.prototype = {

	create: function () 
	{
        selectedMode = BasicGame.currentMode;
        selectedCostume = BasicGame.currentCostume;
        
		unlocksBackground = this.add.sprite(this.world.centerX, this.world.centerY, 'roundMenuBackground');
		unlocksBackground.anchor.setTo(0.5, 0.5);
        unlocksBackground.width = this.world.width;
        unlocksBackground.height = this.world.height;
		
		sevenRestingU = this.add.sprite(this.world.centerX + 250 * BasicGame.scaleP, this.world.centerY + 330 * BasicGame.scaleP, 'sevenResting');
        sevenRestingU.anchor.setTo(0.5, 0.5);
        sevenRestingU.scale.setTo(BasicGame.scaleP, BasicGame.scaleP);
        sevenRestingU.animations.add('active', [0, 1, 2], 15, true);
        sevenRestingU.animations.play('active');
        sevenRestingU.angle = 110;
        
        unlocks_txt = this.add.text(this.world.centerX - 150 * BasicGame.scaleP, this.world.centerY - 300 * BasicGame.scaleP, this.cache.getText('gameData').unlocks);
    	unlocks_txt.anchor.setTo(0.5, 0.5);
    	unlocks_txt.font = BasicGame.font;
    	unlocks_txt.fontSize = 75 * BasicGame.scaleP;
		grd = unlocks_txt.context.createLinearGradient(0, 0, unlocks_txt.canvas.width, unlocks_txt.canvas.height);
    	grd.addColorStop(0, '#ffffff');   
    	grd.addColorStop(1, '#ff8282');
    	unlocks_txt.fill = grd;

        
        backButton = this.add.button(140 * BasicGame.scaleP, this.world.height - 50 * BasicGame.scaleP, 'button', backToRound, this, 1, 0, 2);
        backButton.anchor.setTo(0.5, 0.5);
		backButton_txt = this.add.text(backButton.x, backButton.y, this.cache.getText('gameData').saveAndBack);
    	backButton_txt.anchor.setTo(0.5, 0.5);
    	backButton_txt.font = BasicGame.font;
    	backButton_txt.fontSize = 40 * BasicGame.scaleP;
		grd = backButton_txt.context.createLinearGradient(0, 0, backButton_txt.canvas.width, backButton_txt.canvas.height);
    	grd.addColorStop(0, '#ffffff');   
    	grd.addColorStop(1, '#ff8282');
    	backButton_txt.fill = grd;
		backButton.width = backButton_txt.width + 25 * BasicGame.scaleP;
		backButton.height = backButton_txt.height + 10 * BasicGame.scaleP;
        backButton.setUpSound(BasicGame.boop);
        
        buyButton = this.add.button(this.world.width - 100 * BasicGame.scaleP, this.world.height - 170 * BasicGame.scaleP, 'button', buyUnlock, this, 1, 0, 2);
        buyButton.anchor.setTo(0.5, 0.5);
		buyButton_txt = this.add.text(buyButton.x, buyButton.y, this.cache.getText('gameData').buyButton);
    	buyButton_txt.anchor.setTo(0.5, 0.5);
    	buyButton_txt.font = BasicGame.font;
    	buyButton_txt.fontSize = 50 * BasicGame.scaleP;
		grd = buyButton_txt.context.createLinearGradient(0, 0, buyButton_txt.canvas.width, buyButton_txt.canvas.height);
    	grd.addColorStop(0, '#ffffff');   
    	grd.addColorStop(1, '#ff8282');
    	buyButton_txt.fill = grd;
		buyButton.width = buyButton_txt.width + 25 * BasicGame.scaleP;
		buyButton.height = buyButton_txt.height + 10 * BasicGame.scaleP;

        
        
        unlocksMenuMuteButton = this.add.button(this.world.centerX - 450 * BasicGame.scaleP, this.world.centerY - 320 * BasicGame.scaleP, 'muteButton', unlocksMenuMute, this, 1, 0, 2);
        unlocksMenuMuteButton.anchor.setTo(0.5, 0.5);
        unlocksMenuMuteButton.scale.setTo(BasicGame.scaleP, BasicGame.scaleP);
        unlocksMenuMuteX = this.add.sprite(unlocksMenuMuteButton.x, unlocksMenuMuteButton.y, 'muteX');
        unlocksMenuMuteX.anchor.setTo(0.5, 0.5);
        unlocksMenuMuteX.scale.setTo(BasicGame.scaleP, BasicGame.scaleP);
        if (this.sound.mute == false)
        {
            unlocksMenuMuteX.visible = false;
        }
        else 
        {
            unlocksMenuMuteX.visible = true;
        }

        unlocksTokenSprite = this.add.sprite(this.world.width - 40 * BasicGame.scaleP, 40 * BasicGame.scaleP, 'token');
        unlocksTokenSprite.anchor.setTo(0.5, 0.5);
        unlocksTokenSprite.scale.setTo(0.7 * BasicGame.scaleP, 0.7 * BasicGame.scaleP);
        
        unlocksTokens_txt = this.add.text(unlocksTokenSprite.x - 35 * BasicGame.scaleP, unlocksTokenSprite.y, "" + BasicGame.tokens + "");
    	unlocksTokens_txt.anchor.setTo(1, 0.5);
    	unlocksTokens_txt.font = BasicGame.font;
    	unlocksTokens_txt.fontSize = 30 * BasicGame.scaleP;
        //unlocksTokens_txt.allign = 'right';
		grd = unlocksTokens_txt.context.createLinearGradient(0, 0, unlocksTokens_txt.canvas.width, unlocksTokens_txt.canvas.height);
    	grd.addColorStop(0, '#ffffff');   
    	grd.addColorStop(1, '#ffff00');
    	unlocksTokens_txt.fill = grd;
        
        costTokenSprite = this.add.sprite(buyButton.x - 130 * BasicGame.scaleP, buyButton.y, 'token');
        costTokenSprite.anchor.setTo(0.5, 0.5);
        costTokenSprite.scale.setTo(BasicGame.scaleP, BasicGame.scaleP);
        
        costTokens_txt = this.add.text(costTokenSprite.x - 60 * BasicGame.scaleP, costTokenSprite.y, "" + BasicGame.tokens + "");
    	costTokens_txt.anchor.setTo(1, 0.5);
    	costTokens_txt.font = BasicGame.font;
    	costTokens_txt.fontSize = 40 * BasicGame.scaleP;
        //costTokens_txt.allign = 'right';
		grd = costTokens_txt.context.createLinearGradient(0, 0, costTokens_txt.canvas.width, costTokens_txt.canvas.height);
    	grd.addColorStop(0, '#ffffff');   
    	grd.addColorStop(1, '#ffff00');
    	costTokens_txt.fill = grd;

        
        costumeHead_txt = this.add.text(this.world.width - 300 * BasicGame.scaleP, this.world.centerY - 200 * BasicGame.scaleP, this.cache.getText('gameData').costumeText);
    	costumeHead_txt.anchor.setTo(0.5, 0.5);
    	costumeHead_txt.font = BasicGame.font;
    	costumeHead_txt.fontSize = 50 * BasicGame.scaleP;
        costumeHead_txt.align = 'center';
        costumeHead_txt.fill = '#ffffff';
        
        costumeButton = this.add.button(costumeHead_txt.x, costumeHead_txt.y + 100 * BasicGame.scaleP, 'button', clickNothingButton, this, 1, 0, 2);
        costumeButton.name = "costumeButton";
        costumeButton.anchor.setTo(0.5, 0.5);
		costumeButton_txt = this.add.text(costumeButton.x, costumeButton.y, "");
    	costumeButton_txt.anchor.setTo(0.5, 0.5);
    	costumeButton_txt.font = BasicGame.font;
    	costumeButton_txt.fontSize = 40 * BasicGame.scaleP;
    	costumeButton_txt.fill = '#ffffff';
		costumeButton.width = 280 * BasicGame.scaleP;
		costumeButton.height = costumeButton_txt.height + 10 * BasicGame.scaleP;
        costumeButton.setUpSound(BasicGame.beep);
        
        nextCostumeButton = this.add.button(costumeButton.x + 200 * BasicGame.scaleP, costumeButton.y, 'button', selectUnlock, this, 1, 0, 2);
        nextCostumeButton.name = "nextCostumeButton";
        nextCostumeButton.anchor.setTo(0.5, 0.5);
		nextCostumeButton_txt = this.add.text(nextCostumeButton.x, nextCostumeButton.y, ">");
    	nextCostumeButton_txt.anchor.setTo(0.5, 0.5);
    	nextCostumeButton_txt.font = BasicGame.font;
    	nextCostumeButton_txt.fontSize = 40 * BasicGame.scaleP;
    	nextCostumeButton_txt.fill = '#ffffff';
		nextCostumeButton.width = nextCostumeButton_txt.width + 25 * BasicGame.scaleP;
		nextCostumeButton.height = nextCostumeButton_txt.height + 10 * BasicGame.scaleP;
        nextCostumeButton.setUpSound(BasicGame.beep);
        
        backCostumeButton = this.add.button(costumeButton.x - 200 * BasicGame.scaleP, costumeButton.y, 'button', selectUnlock, this, 1, 0, 2);
        backCostumeButton.name = "backCostumeButton";
        backCostumeButton.anchor.setTo(0.5, 0.5);
		backCostumeButton_txt = this.add.text(backCostumeButton.x, backCostumeButton.y, "<");
    	backCostumeButton_txt.anchor.setTo(0.5, 0.5);
    	backCostumeButton_txt.font = BasicGame.font;
    	backCostumeButton_txt.fontSize = 40 * BasicGame.scaleP;
    	backCostumeButton_txt.fill = '#ffffff';
		backCostumeButton.width = backCostumeButton_txt.width + 25 * BasicGame.scaleP;
		backCostumeButton.height = backCostumeButton_txt.height + 10 * BasicGame.scaleP;
        backCostumeButton.setUpSound(BasicGame.beep);


        modeHead_txt = this.add.text(costumeHead_txt.x, costumeHead_txt.y + 200 * BasicGame.scaleP, this.cache.getText('gameData').modeText);
    	modeHead_txt.anchor.setTo(0.5, 0.5);
    	modeHead_txt.font = BasicGame.font;
    	modeHead_txt.fontSize = 50 * BasicGame.scaleP;
        modeHead_txt.align = 'center';
        modeHead_txt.fill = '#ffffff';
        
        modeButton = this.add.button(modeHead_txt.x, modeHead_txt.y + 100 * BasicGame.scaleP, 'button', clickNothingButton, this, 1, 0, 2);
        modeButton.name = "modeButton";
        modeButton.anchor.setTo(0.5, 0.5);
		modeButton_txt = this.add.text(modeButton.x, modeButton.y, "");
    	modeButton_txt.anchor.setTo(0.5, 0.5);
    	modeButton_txt.font = BasicGame.font;
    	modeButton_txt.fontSize = 40 * BasicGame.scaleP;
    	modeButton_txt.fill = '#ffffff';
		modeButton.width = 280 * BasicGame.scaleP;
		modeButton.height = modeButton_txt.height + 10 * BasicGame.scaleP;
        modeButton.setUpSound(BasicGame.beep);
        
        nextModeButton = this.add.button(modeButton.x + 200 * BasicGame.scaleP, modeButton.y, 'button', selectUnlock, this, 1, 0, 2);
        nextModeButton.name = "nextModeButton";
        nextModeButton.anchor.setTo(0.5, 0.5);
		nextModeButton_txt = this.add.text(nextModeButton.x, nextModeButton.y, ">");
    	nextModeButton_txt.anchor.setTo(0.5, 0.5);
    	nextModeButton_txt.font = BasicGame.font;
    	nextModeButton_txt.fontSize = 40 * BasicGame.scaleP;
    	nextModeButton_txt.fill = '#ffffff';
		nextModeButton.width = nextModeButton_txt.width + 25 * BasicGame.scaleP;
		nextModeButton.height = nextModeButton_txt.height + 10 * BasicGame.scaleP;
        nextModeButton.setUpSound(BasicGame.beep);
        
        backModeButton = this.add.button(modeButton.x - 200 * BasicGame.scaleP, modeButton.y, 'button', selectUnlock, this, 1, 0, 2);
        backModeButton.name = "backModeButton";
        backModeButton.anchor.setTo(0.5, 0.5);
		backModeButton_txt = this.add.text(backModeButton.x, backModeButton.y, "<");
    	backModeButton_txt.anchor.setTo(0.5, 0.5);
    	backModeButton_txt.font = BasicGame.font;
    	backModeButton_txt.fontSize = 40 * BasicGame.scaleP;
    	backModeButton_txt.fill = '#ffffff';
		backModeButton.width = backModeButton_txt.width + 25 * BasicGame.scaleP;
		backModeButton.height = backModeButton_txt.height + 10 * BasicGame.scaleP;
        backModeButton.setUpSound(BasicGame.beep);


        setModeAndCostumeText();

        empUnlockedButton = this.add.button(200 * BasicGame.scaleP, this.world.centerY - 200 * BasicGame.scaleP, 'button', selectUnlock, this, 1, 0, 2);
        empUnlockedButton.name = "empUnlockedButton";
        empUnlockedButton.anchor.setTo(0.5, 0.5);
		empUnlockedButton_txt = this.add.text(empUnlockedButton.x, empUnlockedButton.y, this.cache.getText('gameData').empUnlockedButton);
    	empUnlockedButton_txt.anchor.setTo(0.5, 0.5);
    	empUnlockedButton_txt.font = BasicGame.font;
    	empUnlockedButton_txt.fontSize = 40 * BasicGame.scaleP;
    	empUnlockedButton_txt.fill = '#ffffff';
		empUnlockedButton.width = empUnlockedButton_txt.width + 25 * BasicGame.scaleP;
		empUnlockedButton.height = empUnlockedButton_txt.height + 10 * BasicGame.scaleP;
        empUnlockedButton.setUpSound(BasicGame.beep);
        if (BasicGame.empUnlocked)
        {
            empUnlockedButton.loadTexture('greenButton');
            empUnlockedButton_txt.fill = '#36ff4c';
        }

        secondChanceButton = this.add.button(empUnlockedButton.x, empUnlockedButton.y + 100 * BasicGame.scaleP, 'button', selectUnlock, this, 1, 0, 2);
        secondChanceButton.name = "secondChanceButton";
        secondChanceButton.anchor.setTo(0.5, 0.5);
		secondChanceButton_txt = this.add.text(secondChanceButton.x, secondChanceButton.y, this.cache.getText('gameData').secondChanceButton);
    	secondChanceButton_txt.anchor.setTo(0.5, 0.5);
    	secondChanceButton_txt.font = BasicGame.font;
    	secondChanceButton_txt.fontSize = 40 * BasicGame.scaleP;
    	secondChanceButton_txt.fill = '#ffffff';
		secondChanceButton.width = secondChanceButton_txt.width + 25 * BasicGame.scaleP;
		secondChanceButton.height = secondChanceButton_txt.height + 10 * BasicGame.scaleP;
        secondChanceButton.setUpSound(BasicGame.beep);
        if (BasicGame.secondChance)
        {
            secondChanceButton.loadTexture('greenButton');
            secondChanceButton_txt.fill = '#36ff4c';
        }
        
        moreEnergyButton = this.add.button(empUnlockedButton.x, empUnlockedButton.y + 200 * BasicGame.scaleP, 'button', selectUnlock, this, 1, 0, 2);
        moreEnergyButton.name = "moreEnergyButton";
        moreEnergyButton.anchor.setTo(0.5, 0.5);
		moreEnergyButton_txt = this.add.text(moreEnergyButton.x, moreEnergyButton.y, this.cache.getText('gameData').moreEnergyButton);
    	moreEnergyButton_txt.anchor.setTo(0.5, 0.5);
    	moreEnergyButton_txt.font = BasicGame.font;
    	moreEnergyButton_txt.fontSize = 40 * BasicGame.scaleP;
    	moreEnergyButton_txt.fill = '#ffffff';
		moreEnergyButton.width = moreEnergyButton_txt.width + 25 * BasicGame.scaleP;
		moreEnergyButton.height = moreEnergyButton_txt.height + 10 * BasicGame.scaleP;
        moreEnergyButton.setUpSound(BasicGame.beep);
        if (BasicGame.moreEnergy)
        {
            moreEnergyButton.loadTexture('greenButton');
            moreEnergyButton_txt.fill = '#36ff4c';
        }
        
        moreForceButton = this.add.button(empUnlockedButton.x, empUnlockedButton.y + 300 * BasicGame.scaleP, 'button', selectUnlock, this, 1, 0, 2);
        moreForceButton.name = "moreForceButton";
        moreForceButton.anchor.setTo(0.5, 0.5);
		moreForceButton_txt = this.add.text(moreForceButton.x, moreForceButton.y, this.cache.getText('gameData').moreForceButton);
    	moreForceButton_txt.anchor.setTo(0.5, 0.5);
    	moreForceButton_txt.font = BasicGame.font;
    	moreForceButton_txt.fontSize = 40 * BasicGame.scaleP;
    	moreForceButton_txt.fill = '#ffffff';
		moreForceButton.width = moreForceButton_txt.width + 25 * BasicGame.scaleP;
		moreForceButton.height = moreForceButton_txt.height + 10 * BasicGame.scaleP;
        moreForceButton.setUpSound(BasicGame.beep);
        if (BasicGame.moreForce)
        {
            moreForceButton.loadTexture('greenButton');
            moreForceButton_txt.fill = '#36ff4c';
        }

        noGravityButton = this.add.button(empUnlockedButton.x, empUnlockedButton.y + 400 * BasicGame.scaleP, 'button', selectUnlock, this, 1, 0, 2);
        noGravityButton.name = "noGravityButton";
        noGravityButton.anchor.setTo(0.5, 0.5);
		noGravityButton_txt = this.add.text(noGravityButton.x, noGravityButton.y, this.cache.getText('gameData').noGravityButton);
    	noGravityButton_txt.anchor.setTo(0.5, 0.5);
    	noGravityButton_txt.font = BasicGame.font;
    	noGravityButton_txt.fontSize = 40 * BasicGame.scaleP;
    	noGravityButton_txt.fill = '#ffffff';
		noGravityButton.width = noGravityButton_txt.width + 25 * BasicGame.scaleP;
		noGravityButton.height = noGravityButton_txt.height + 10 * BasicGame.scaleP;
        noGravityButton.setUpSound(BasicGame.beep);
        if (BasicGame.noGravity)
        {
            noGravityButton.loadTexture('greenButton');
            noGravityButton_txt.fill = '#36ff4c';
        }

        if (unlockSomething_snd == null)
        {
            unlockSomething_snd = this.add.audio('getCoinsSound');
        }


        currentSelected = "";
        this.input.onUp.add(unlocksMenuReleaseUp);
	},

	update: function () 
	{
        if (currentSelected == "")
        {
            if (buyButton.visible == true)
            {
                buyButton.visible = false;
                buyButton_txt.visible = false;
                costTokens_txt.visible = false;
                costTokenSprite.visible = false;
            }
        }
        else
        {
            if (buyButton.visible == false)
            {
                buyButton.visible = true;
                buyButton_txt.visible = true;
                costTokens_txt.visible = true;
                costTokenSprite.visible = true;
            }
        }

	},
};

function setModeAndCostumeText()
{
    //SET TEXT
    switch (selectedCostume)
    {
            case 0:
            costumeButton_txt.text = thisGame.cache.getText('gameData').default;
            break;
            
            case 1:
            costumeButton_txt.text = thisGame.cache.getText('gameData').babyFace;
            break;
            
            case 2:
            costumeButton_txt.text = thisGame.cache.getText('gameData').classic;
            break;
            
            case 3:
            costumeButton_txt.text = thisGame.cache.getText('gameData').angryDonut;
            break;
    }
    switch (selectedMode)
    {
            case 0:
            modeButton_txt.text = thisGame.cache.getText('gameData').default;
            break;
            
            case 1:
            modeButton_txt.text = thisGame.cache.getText('gameData').cosmic;
            break;
            
            case 2:
            modeButton_txt.text = thisGame.cache.getText('gameData').sweetTooth;
            break;
    }
    
    if (BasicGame.currentCostume == selectedCostume)
    {
        if (selectedCostume == 0)
        {
            costumeButton.loadTexture('greenButton');
            costumeButton_txt.fill = '#36ff4c';
        }
        else if ((selectedCostume == 1) && (BasicGame.babyFaceUnlocked))
        {
            costumeButton.loadTexture('greenButton');
            costumeButton_txt.fill = '#36ff4c';
        }
        else if ((selectedCostume == 2) && (BasicGame.classicUnlocked))
        {
            costumeButton.loadTexture('greenButton');
            costumeButton_txt.fill = '#36ff4c';
        }
        else if ((selectedCostume == 3) && (BasicGame.angryDonutUnlocked))
        {
            costumeButton.loadTexture('greenButton');
            costumeButton_txt.fill = '#36ff4c';
        }
        else
        {
            costumeButton.loadTexture('yellowButton');
            costumeButton_txt.fill = '#ffea00';
        }
    }
    else
    {
        costumeButton.loadTexture('button');
        costumeButton_txt.fill = '#ffffff';
    }
    
    if (BasicGame.currentMode == selectedMode)
    {
        if (selectedMode == 0)
        {
            modeButton.loadTexture('greenButton');
            modeButton_txt.fill = '#36ff4c';
        }
        else if ((selectedMode == 1) && (BasicGame.cosmicUnlocked))
        {
            modeButton.loadTexture('greenButton');
            modeButton_txt.fill = '#36ff4c';
        }
        else if ((selectedMode == 2) && (BasicGame.sweetToothUnlocked))
        {
            modeButton.loadTexture('greenButton');
            modeButton_txt.fill = '#36ff4c';
        }
        else
        {
            costumeButton.loadTexture('yellowButton');
            costumeButton_txt.fill = '#ffea00';
        }
    }
    else
    {
        modeButton.loadTexture('button');
        modeButton_txt.fill = '#ffffff';
    }
}

function selectUnlock(button, pointer)
{
    costTokens_txt.text = "";
    currentSelected = "";
    if (button.name == "empUnlockedButton")
    {
        if (BasicGame.empUnlocked == false)
        {
            empUnlockedButton.loadTexture('yellowButton');
            empUnlockedButton_txt.fill = '#ffea00';
            currentSelected = "empUnlocked";
            costTokens_txt.text = "" + BasicGame.empUnlockedCost + "";
        }
    }
    else if (!BasicGame.empUnlocked)
    {
        empUnlockedButton.loadTexture('button');
        empUnlockedButton_txt.fill = '#ffffff';
    }
    
    if (button.name == "secondChanceButton")
    {
        if (BasicGame.secondChance == false)
        {
            secondChanceButton.loadTexture('yellowButton');
            secondChanceButton_txt.fill = '#ffea00';
            currentSelected = "secondChance";
            costTokens_txt.text = "" + BasicGame.secondChanceCost + "";
        }
    }
    else if (!BasicGame.secondChance)
    {
        secondChanceButton.loadTexture('button');
        secondChanceButton_txt.fill = '#ffffff';
    }

    if (button.name == "moreEnergyButton")
    {
        if (BasicGame.moreEnergy == false)
        {
            moreEnergyButton.loadTexture('yellowButton');
            moreEnergyButton_txt.fill = '#ffea00';
            currentSelected = "moreEnergy";
            costTokens_txt.text = "" + BasicGame.moreEnergyCost + "";
        }
    }
    else if (!BasicGame.moreEnergy)
    {
        moreEnergyButton.loadTexture('button');
        moreEnergyButton_txt.fill = '#ffffff';
    }
    
    if (button.name == "moreForceButton")
    {
        if (BasicGame.moreForce == false)
        {
            moreForceButton.loadTexture('yellowButton');
            moreForceButton_txt.fill = '#ffea00';
            currentSelected = "moreForce";
            costTokens_txt.text = "" + BasicGame.moreForceCost + "";
        }
    }
    else if (!BasicGame.moreForce)
    {
        moreForceButton.loadTexture('button');
        moreForceButton_txt.fill = '#ffffff';
    }
    
    if (button.name == "noGravityButton")
    {
        if (BasicGame.noGravity == false)
        {
            noGravityButton.loadTexture('yellowButton');
            noGravityButton_txt.fill = '#ffea00';
            currentSelected = "noGravity";
            costTokens_txt.text = "" + BasicGame.noGravityCost + "";
        }
    }
    else if (!BasicGame.noGravity)
    {
        noGravityButton.loadTexture('button');
        noGravityButton_txt.fill = '#ffffff';
    }
    
    if (button.name == "nextModeButton")
    {
        if (selectedMode == 2)
        {
            selectedMode = 0;
        }
        else
        {
            selectedMode++;
        }
        
        currentSelected = "";
        switch (selectedMode)
        {
                case 0:
                currentSelected = "";
                BasicGame.currentMode = selectedMode;
                break;
                
                case 1:
                if (!BasicGame.cosmicUnlocked)
                {
                    currentSelected = "cosmic";
                    costTokens_txt.text = BasicGame.cosmicCost;
                }
                else
                {
                    BasicGame.currentMode = selectedMode;
                }
                break;
                
                case 2:
                if (!BasicGame.sweetToothUnlocked)
                {
                    currentSelected = "sweetTooth";
                    costTokens_txt.text = BasicGame.sweetToothCost;
                }
                else
                {
                    BasicGame.currentMode = selectedMode;
                }
                break;
        }
        setModeAndCostumeText();
    }
    else if (button.name == "backModeButton")
    {
        if (selectedMode == 0)
        {
            selectedMode = 2;
        }
        else
        {
            selectedMode--;
        }
        currentSelected = "";
        switch (selectedMode)
        {
                case 0:
                currentSelected = "";
                BasicGame.currentMode = selectedMode;
                break;
                
                case 1:
                if (!BasicGame.cosmicUnlocked)
                {
                    currentSelected = "cosmic";
                    costTokens_txt.text = BasicGame.cosmicCost;
                }
                else
                {
                    BasicGame.currentMode = selectedMode;
                }
                break;
                
                case 2:
                if (!BasicGame.sweetToothUnlocked)
                {
                    currentSelected = "sweetTooth";
                    costTokens_txt.text = BasicGame.sweetToothCost;
                }
                else
                {
                    BasicGame.currentMode = selectedMode;
                }
                break;
        }
        setModeAndCostumeText();
    }
    
    if (button.name == "nextCostumeButton")
    {
        if (selectedCostume == 3)
        {
            selectedCostume = 0;
        }
        else
        {
            selectedCostume++;
        }
        currentSelected = "";
        switch (selectedCostume)
        {
                case 0:
                currentSelected = "";
                BasicGame.currentCostume = selectedCostume;
                break;
                
                case 1:
                if (!BasicGame.babyFaceUnlocked)
                {
                    currentSelected = "babyFace";
                    costTokens_txt.text = BasicGame.babyFaceCost;
                }
                else
                {
                    BasicGame.currentCostume = selectedCostume;
                }
                break;
                
                case 2:
                if (!BasicGame.classicUnlocked)
                {
                    currentSelected = "classic";
                    costTokens_txt.text = BasicGame.classicCost;
                }
                else
                {
                    BasicGame.currentCostume = selectedCostume;
                }
                break;
                
                case 3:
                if (!BasicGame.angryDonutUnlocked)
                {
                    currentSelected = "angryDonut";
                    costTokens_txt.text = BasicGame.angryDonutCost;
                }
                else
                {
                    BasicGame.currentCostume = selectedCostume;
                }
                break;
        }
        setModeAndCostumeText();
    }
    else if (button.name == "backCostumeButton")
    {
        if (selectedCostume == 0)
        {
            selectedCostume = 3;
        }
        else
        {
            selectedCostume--;
        }
        currentSelected = "";
        switch (selectedCostume)
        {
                case 0:
                currentSelected = "";
                BasicGame.currentCostume = selectedCostume;
                break;
                
                case 1:
                if (!BasicGame.babyFaceUnlocked)
                {
                    currentSelected = "babyFace";
                    costTokens_txt.text = BasicGame.babyFaceCost;
                }
                else
                {
                    BasicGame.currentCostume = selectedCostume;
                }
                break;
                
                case 2:
                if (!BasicGame.classicUnlocked)
                {
                    currentSelected = "classic";
                    costTokens_txt.text = BasicGame.classicCost;
                }
                else
                {
                    BasicGame.currentCostume = selectedCostume;
                }
                break;
                
                case 3:
                if (!BasicGame.angryDonutUnlocked)
                {
                    currentSelected = "angryDonut";
                    costTokens_txt.text = BasicGame.angryDonutCost;
                }
                else
                {
                    BasicGame.currentCostume = selectedCostume;
                }
                break;
        }
        setModeAndCostumeText();
    }
}

function buyUnlock()
{
    switch (currentSelected)
    {
            case 'empUnlocked':
            if (BasicGame.tokens >= BasicGame.empUnlockedCost)
            {
                BasicGame.empUnlocked = true;
                BasicGame.tokens -= BasicGame.empUnlockedCost;
                unlockSomething_snd.play();
                currentSelected = "";
                empUnlockedButton.loadTexture('greenButton');
                empUnlockedButton_txt.fill = '#36ff4c';
            }
            else
            {
                BasicGame.boop.play();
            }
            break;
            
            case 'secondChance':
            if (BasicGame.tokens >= BasicGame.secondChanceCost)
            {
                BasicGame.secondChance = true;
                BasicGame.tokens -= BasicGame.secondChanceCost;
                unlockSomething_snd.play();
                currentSelected = "";
                secondChanceButton.loadTexture('greenButton');
                secondChanceButton_txt.fill = '#36ff4c';
            }
            else
            {
                BasicGame.boop.play();
            }
            break;
            
            case 'moreEnergy':
            if (BasicGame.tokens >= BasicGame.moreEnergyCost)
            {
                BasicGame.moreEnergy = true;
                BasicGame.tokens -= BasicGame.moreEnergyCost;
                unlockSomething_snd.play();
                currentSelected = "";
                moreEnergyButton.loadTexture('greenButton');
                moreEnergyButton_txt.fill = '#36ff4c';
            }
            else
            {
                BasicGame.boop.play();
            }
            break;

            case 'moreForce':
            if (BasicGame.tokens >= BasicGame.moreForceCost)
            {
                BasicGame.moreForce = true;
                BasicGame.tokens -= BasicGame.moreForceCost;
                unlockSomething_snd.play();
                currentSelected = "";
                moreForceButton.loadTexture('greenButton');
                moreForceButton_txt.fill = '#36ff4c';
            }
            else
            {
                BasicGame.boop.play();
            }
            break;

            case 'noGravity':
            if (BasicGame.tokens >= BasicGame.noGravityCost)
            {
                BasicGame.noGravity = true;
                BasicGame.tokens -= BasicGame.noGravityCost;
                unlockSomething_snd.play();
                currentSelected = "";
                noGravityButton.loadTexture('greenButton');
                noGravityButton_txt.fill = '#36ff4c';
            }
            else
            {
                BasicGame.boop.play();
            }
            break;

            
            case 'babyFace':
            if (BasicGame.tokens >= BasicGame.babyFaceCost)
            {
                BasicGame.babyFaceUnlocked = true;
                BasicGame.currentCostume = 1;
                BasicGame.tokens -= BasicGame.babyFaceCost;
                unlockSomething_snd.play();
                currentSelected = "";
            }
            else
            {
                BasicGame.boop.play();
            }
            break;
            
            case 'classic':
            if (BasicGame.tokens >= BasicGame.classicCost)
            {
                BasicGame.classicUnlocked = true;
                BasicGame.currentCostume = 2;
                BasicGame.tokens -= BasicGame.classicCost;
                unlockSomething_snd.play();
                currentSelected = "";
            }
            else
            {
                BasicGame.boop.play();
            }
            break;
            
            case 'angryDonut':
            if (BasicGame.tokens >= BasicGame.angryDonutCost)
            {
                BasicGame.angryDonutUnlocked = true;
                BasicGame.currentCostume = 3;
                BasicGame.tokens -= BasicGame.angryDonutCost;
                unlockSomething_snd.play();
                currentSelected = "";
            }
            else
            {
                BasicGame.boop.play();
            }
            break;
            
            case 'cosmic':
            if (BasicGame.tokens >= BasicGame.cosmicCost)
            {
                BasicGame.cosmicUnlocked = true;
                BasicGame.currentMode = 1;
                BasicGame.tokens -= BasicGame.cosmicCost;
                unlockSomething_snd.play();
                currentSelected = "";
            }
            else
            {
                BasicGame.boop.play();
            }
            break;
            
            case 'sweetTooth':
            if (BasicGame.tokens >= BasicGame.sweetToothCost)
            {
                BasicGame.sweetToothUnlocked = true;
                BasicGame.currentMode = 2;
                BasicGame.tokens -= BasicGame.sweetToothCost;
                unlockSomething_snd.play();
                currentSelected = "";
            }
            else
            {
                BasicGame.boop.play();
            }
            break;

    }
    unlocksTokens_txt.text = "";
    unlocksTokens_txt.text = "" + BasicGame.tokens + "";
    setModeAndCostumeText();
}

function unlocksMenuReleaseUp() { //INPUT UP
    
    if ((thisGame.input.activePointer.targetObject != unlocksMenuMuteButton) && (thisGame.input.activePointer.targetObject != unlocksMenuMuteX))
    {
        unlocksMenuMuteButton.frame = 0;
    }
    if ((thisGame.input.activePointer.targetObject != backButton) && (thisGame.input.activePointer.targetObject != backButton_txt))
    {
        backButton.frame = 0;
    }
    if ((thisGame.input.activePointer.targetObject != nextModeButton) && (thisGame.input.activePointer.targetObject != nextModeButton_txt))
    {
        nextModeButton.frame = 0;
    }
    if ((thisGame.input.activePointer.targetObject != backModeButton) && (thisGame.input.activePointer.targetObject != backModeButton_txt))
    {
        backModeButton.frame = 0;
    }
    if ((thisGame.input.activePointer.targetObject != nextCostumeButton) && (thisGame.input.activePointer.targetObject != nextCostumeButton_txt))
    {
        nextCostumeButton.frame = 0;
    }
    if ((thisGame.input.activePointer.targetObject != backCostumeButton) && (thisGame.input.activePointer.targetObject != backCostumeButton_txt))
    {
        backCostumeButton.frame = 0;
    }
    if ((thisGame.input.activePointer.targetObject != buyButton) && (thisGame.input.activePointer.targetObject != buyButton_txt))
    {
        buyButton.frame = 0;
    }

}

function backToRound()
{
        saveData();
        shutDownUnlocksMenu();
        thisGame.state.start('RoundMenu');
}



function unlocksMenuMute()
{
    if (thisGame.sound.mute == true)
    {
        thisGame.sound.mute = false;
        unlocksMenuMuteX.visible = false;
    }
    else
    {
        thisGame.sound.mute = true;
        unlocksMenuMuteX.visible = true;
    }
}


function shutDownUnlocksMenu() 
{
	if (unlocksBackground)
	{
		unlocksBackground.destroy();
		unlocksBackground = null;
	}
	if (sevenRestingU)
	{
		sevenRestingU.destroy();
		sevenRestingU = null;
	}
    if (backButton)
    {
        backButton.destroy();
        backButton = null;
    }
    if (backButton_txt)
    {
        backButton_txt.destroy();
        backButton_txt = null;
    }
    if (unlocks_txt)
    {
        unlocks_txt.destroy();
        unlocks_txt = null;
    }
    if (unlocksTokens_txt)
    {
        unlocksTokens_txt.destroy();
        unlocksTokens_txt = null;
    }
    if (unlocksTokenSprite)
    {
        unlocksTokenSprite.destroy();
        unlocksTokenSprite = null;
    }
    
    //UNLOCK BUTTONS
    if (empUnlockedButton)
    {
        empUnlockedButton.destroy();
        empUnlockedButton = null;
    }
    if (empUnlockedButton_txt)
    {
        empUnlockedButton_txt.destroy();
        empUnlockedButton_txt = null;
    }
    if (secondChanceButton)
    {
        secondChanceButton.destroy();
        secondChanceButton = null;
    }
    if (secondChanceButton_txt)
    {
        secondChanceButton_txt.destroy();
        secondChanceButton_txt = null;
    }
    if (moreEnergyButton)
    {
        moreEnergyButton.destroy();
        moreEnergyButton = null;
    }
    if (moreEnergyButton_txt)
    {
        moreEnergyButton_txt.destroy();
        moreEnergyButton_txt = null;
    }
    if (moreForceButton)
    {
        moreForceButton.destroy();
        moreForceButton = null;
    }
    if (moreForceButton_txt)
    {
        moreForceButton_txt.destroy();
        moreForceButton_txt = null;
    }
    if (noGravityButton)
    {
        noGravityButton.destroy();
        noGravityButton = null;
    }
    if (noGravityButton_txt)
    {
        noGravityButton_txt.destroy();
        noGravityButton_txt = null;
    }
    if (buyButton)
    {
        buyButton.destroy();
        buyButton = null;
    }
    if (buyButton_txt)
    {
        buyButton_txt.destroy();
        buyButton_txt = null;
    }
    if (costTokenSprite)
    {
        costTokenSprite.destroy();
        costTokenSprite = null;
    }
    if (costTokens_txt)
    {
        costTokens_txt.destroy();
        costTokens_txt = null;
    }
    if (costumeHead_txt)
    {
        costumeHead_txt.destroy();
        costumeHead_txt = null;
    }
    if (modeHead_txt)
    {
        modeHead_txt.destroy();
        modeHead_txt = null;
    }
    if (costumeButton)
    {
        costumeButton.destroy();
        costumeButton = null;
    }
    if (costumeButton_txt)
    {
        costumeButton_txt.destroy();
        costumeButton_txt = null;
    }
    if (modeButton)
    {
        modeButton.destroy();
        modeButton = null;
    }
    if (modeButton_txt)
    {
        modeButton_txt.destroy();
        modeButton_txt = null;
    }
    if (nextCostumeButton)
    {
        nextCostumeButton.destroy();
        nextCostumeButton = null;
    }
    if (nextCostumeButton_txt)
    {
        nextCostumeButton_txt.destroy();
        nextCostumeButton_txt = null;
    }
    if (backCostumeButton)
    {
        backCostumeButton.destroy();
        backCostumeButton = null;
    }
    if (backCostumeButton_txt)
    {
        backCostumeButton_txt.destroy();
        backCostumeButton_txt = null;
    }
    if (nextModeButton)
    {
        nextModeButton.destroy();
        nextModeButton = null;
    }
    if (nextModeButton_txt)
    {
        nextModeButton_txt.destroy();
        nextModeButton_txt = null;
    }
    if (backModeButton)
    {
        backModeButton.destroy();
        backModeButton = null;
    }
    if (backModeButton_txt)
    {
        backModeButton_txt.destroy();
        backModeButton_txt = null;
    }

    
    thisGame.input.onUp.remove(unlocksMenuReleaseUp, thisGame);
}

function clickNothingButton()
{
    //DO NOTHING
}
