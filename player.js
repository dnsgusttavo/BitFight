class Player{
    constructor(player, keys){
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
    }

    setGameRules(){
      //Set gravity
      this.player.position.y += this.jumpSpeed;
      this.jumpSpeed += this.gravity;
      this.player.position.x = constrain(this.player.position.x, 0, width);
      this.player.position.y = constrain(this.player.position.y, 0, 356);

      //If none key is pressed, the player sprite is stay stopped
      if(!keyIsPressed){
        this.player.changeAnimation('stay');
        player2.changeAnimation('stay')
      }
    
      if(keyIsDown(this.keyLeft)){
          this.player.position.x -= this.walkSpeed;
          this.player.mirrorX(-1);
          this.player.changeAnimation('walk');
      }

      if(String.fromCharCode(this.currentKeyPressed) == this.keyUp){
        this.jumpSpeed = this.jumpHeight; 
        this.player.changeAnimation('jump');         
      }

      if(keyIsDown(this.keyRight)){
        this.player.position.x += this.walkSpeed;
        this.player.mirrorX(1);
        this.player.changeAnimation('walk');
    
      }
      if(keyIsDown(this.keyAttackA)){
        this.player.changeAnimation('attack');
      }
      if(keyIsDown(this.keyAttackB)){
        this.player.changeAnimation('Attack_Extra');
      }
    }
}

//Load sprites for players
function loadPlayerSprites(player1Class, player2Class){
 
  function setClass(className){
    return [
            ['stay',`assets/${className}/${className}.png`],
            ['walk',`assets/${className}/Walk/1.png`,`assets/${className}/Walk/6.png`],
            ['attack',`assets/${className}/AttackA/1.png`,`assets/${className}/AttackA/4.png`],
            ['Attack_Extra',`assets/${className}/AttackB/1.png`,`assets/${className}/AttackB/8.png`],
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
  
 
//   personagem2.addAnimation("stay", 'assets/Rogue/Rogue.png');
//   personagem2.addAnimation("walk", 'assets/Rogue/Walk/walk1.png','assets/Rogue/Walk/walk6.png');
//   personagem2.addAnimation("attack", 'assets/Rogue/Attack/attack1.png','assets/Rogue/Attack/attack4.png');
//   personagem2.addAnimation("Attack_Extra", 'assets/Rogue/Attack_Extra/attack_extra1.png','assets/Rogue/Attack_Extra/attack_extra8.png');
//   personagem2.addAnimation("climb", 'assets/Rogue/Climb/climb2.png','assets/Rogue/Climb/climb4.png');
//   personagem2.addAnimation("jump", 'assets/Rogue/Jump/jump1.png','assets/Rogue/Jump/jump7.png');
  
}