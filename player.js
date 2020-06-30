class Player{
    constructor(player, floorLevel, keys, lockingAt){
      this.floorLevel = floorLevel
      this.player = player;
      this.keyLeft = keys[0];
      this.keyUp = keys[1];
      this.keyRight = keys[2];
      this.keyAttackA = keys[3];
      this.keyAttackB = keys[4];
      this.speedOnYAxy = 0;
      this.gravity = 0.7;
      this.walkSpeed = 5
      this.jumpHeight = -12
      this.currentKeyPressed;
      this.jumps = 1;
      this.jumpLimit = 2;
      this.speed = 0;
      this.lookingAt = lockingAt;
    }

    //Set gravity
    setGravity(){
      this.player.debug = true;
      this.speedOnYAxy += this.gravity;
      this.player.position.y += this.speedOnYAxy;
      
      this.player.position.x = constrain(this.player.position.x, 0, width);
      this.player.position.y = constrain(this.player.position.y, 0, this.floorLevel);

      if(this.player.collide(platforms)){
        this.speedOnYAxy = 0 
        this.floorLevel = this.player.position.y + 1;
      }else{
        this.floorLevel = width - 1;
      }
    }

    resurrect(){
      if(this.player.position.y > height){
        this.player.position.x = width/2
        this.player.position.y = 0
      }
    }

    //Function to verify if key is pressed one time
    keyOnceDown(key){
      //Array to convert keyString in keyNumber
      const keyList = [['ArrowLeft', 37],['ArrowUp', 38],['ArrowRight', 39],['ArrowDown', 40]]
      
      //go through the list and check if the list contains the key pressed
      for(const i of keyList){
        if(key == i[0])
          key = i[1];
      }
      
      //If ''w' == 'w' or 38 == 38
      if(key == String.fromCharCode(this.keyUp).toLowerCase() || key == this.keyUp){
        
        //If player is on floor, regenerate jumps
        if(this.player.position.y == this.floorLevel- 1){
          this.jumps = 0;
        }

        //If player exceed jump limit, disable jump ability
        if(this.jumps < this.jumpLimit){
          this.speedOnYAxy = this.jumpHeight; 
          this.player.changeAnimation('jump'); 
          this.jumps++;
        }

      }
    }

    setPlayerDirection(){
      if(this.lookingAt == "Right"){
        if(this.player.mirrorX() == -1){
          this.player.position.x += this.player.collider.extents.x/2
        }
        this.player.collider.offset.x = -(height / 38.400)
        this.player.mirrorX(1);
      }else if(this.lookingAt == "Left"){
        if(this.player.mirrorX() == 1){
          this.player.position.x -= this.player.collider.extents.x/2
        }
        this.player.mirrorX(-1);
        this.player.collider.offset.x = (height / 38.400)
      }
    }

    //Function to verify if key is always pressed
    keyAlwaysDown(){
      //If none key is pressed, the player sprite is stay stopped
      if(!keyIsPressed){
        this.player.changeAnimation('stay');
      }
      
      if(keyIsDown(this.keyLeft)){
        this.lookingAt = "Left"
        this.player.position.x -= this.walkSpeed;
        this.player.changeAnimation('walk');
      }

      if(keyIsDown(this.keyRight)){
        this.lookingAt = "Right"
        this.player.position.x += this.walkSpeed;
        this.player.changeAnimation('walk');
      }

      if(keyIsDown(this.keyAttackA)){
        this.player.changeAnimation('attackA');
      }
      
      if(keyIsDown(this.keyAttackB)){
        this.player.changeAnimation('attackB');
      }
    }

    //Run all players functions
    setGameRules(){
      this.setPlayerDirection();
      this.resurrect();
      this.keyAlwaysDown()
      this.keyOnceDown()
      this.setGravity()
    }
}

//Load sprites for players
function loadPlayerSprites(player1Class, player2Class){
  
  //Set player colider
  player1.setCollider("rectangle",-15,20,50,50)
  player2.setCollider("rectangle",-15,20,50,50)

  //Function that return an array with sprites path of player class name
  function setClass(className){

    //images ammount  of sprite
    spriteNums ={"Knight":[6,5,8,7],"Rogue":[6,7,11,7],"Mage":[6,7,7,7],};

    return [
            ['stay',`assets/${className}/${className}.png`],
            ['walk',`assets/${className}/Walk/1.png`,`assets/${className}/Walk/${spriteNums[className][0]}.png`],
            ['attackA',`assets/${className}/AttackA/1.png`,`assets/${className}/AttackA/${spriteNums[className][1]}.png`],
            ['attackB',`assets/${className}/AttackB/1.png`,`assets/${className}/AttackB/${spriteNums[className][2]}.png`],
            ['jump',`assets/${className}/Jump/1.png`,`assets/${className}/Jump/${spriteNums[className][3]}.png`],
            ];
  }
  
  //Set animations for player1
  for (animation of setClass(player1Class)){
    if(animation.length == 3)
        player1.addAnimation(animation[0],animation[1],animation[2]);
    else if(animation.length == 2)
        player1.addAnimation(animation[0],animation[1]);
  }

  //Set animations for player2
  for (animation of setClass(player2Class)){
    if(animation.length == 3)
        player2.addAnimation(animation[0],animation[1],animation[2]);
    else if(animation.length == 2)
        player2.addAnimation(animation[0],animation[1]);
  } 
}