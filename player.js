class Player{
    constructor(player, floorLevel, keys){
      this.floorLevel = floorLevel
      this.player = player;
      this.keyLeft = keys[0];
      this.keyUp = keys[1];
      this.keyRight = keys[2];
      this.keyAttackA = keys[3];
      this.keyAttackB = keys[4];
      this.jumpSpeed = 0;
      this.gravity = 1;
      this.walkSpeed = 5
      this.jumpHeight = -15 
      this.currentKeyPressed;
      this.jumps = 1;
      this.jumpLimit = 2;
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
        if(this.player.position.y == this.floorLevel){
          this.jumps = 0;
        }
        
        if(this.jumps < this.jumpLimit){
          this.jumpSpeed = this.jumpHeight; 
          this.player.changeAnimation('jump'); 
          this.jumps++;
        }else{
          this.player.changeAnimation('stay'); 
        }
         
      }
    }

    //Function to verify if key is always pressed
    keyAlwaysDown(){
      //If none key is pressed, the player sprite is stay stopped
      if(!keyIsPressed){
        this.player.changeAnimation('stay');
      }
      
      if(keyIsDown(this.keyLeft)){
        this.player.position.x -= this.walkSpeed;
        this.player.mirrorX(-1);
        this.player.changeAnimation('walk');
      }

      if(keyIsDown(this.keyRight)){
        this.player.position.x += this.walkSpeed;
        this.player.mirrorX(1);
        this.player.changeAnimation('walk');
    
      }

      if(keyIsDown(this.keyAttackA)){
        this.player.changeAnimation('attackA');
      }
      
      if(keyIsDown(this.keyAttackB)){
        this.player.changeAnimation('attackB');
      }
    }

    //Set gravity
    setGravity(){
      this.player.position.y += this.jumpSpeed;
      this.jumpSpeed += this.gravity;
      this.player.position.x = constrain(this.player.position.x, 0, width);
      this.player.position.y = constrain(this.player.position.y, 0, this.floorLevel);
    }

    setGameRules(){
      this.keyAlwaysDown()
      this.keyOnceDown()
      this.setGravity()
    }
}

//Load sprites for players
function loadPlayerSprites(player1Class, player2Class){
 
  function setClass(className){
    return [
            ['stay',`assets/${className}/${className}.png`],
            ['walk',`assets/${className}/Walk/1.png`,`assets/${className}/Walk/6.png`],
            ['attackA',`assets/${className}/AttackA/1.png`,`assets/${className}/AttackA/4.png`],
            ['attackB',`assets/${className}/AttackB/1.png`,`assets/${className}/AttackB/8.png`],
            ['jump',`assets/${className}/Jump/1.png`,`assets/${className}/Jump/7.png`],
            ];
  }
  
  for (animation of setClass(player1Class)){
    if(animation.length == 3)
        player1.addAnimation(animation[0],animation[1],animation[2]);
    else if(animation.length == 2)
        player1.addAnimation(animation[0],animation[1]);
  }

  for (animation of setClass(player2Class)){
    if(animation.length == 3)
        player2.addAnimation(animation[0],animation[1],animation[2]);
    else if(animation.length == 2)
        player2.addAnimation(animation[0],animation[1]);
  }
   
}