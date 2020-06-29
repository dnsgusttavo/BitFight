let wallImage;
let floorImage;
let player1Sprite;
let player1;
let personagem;


function preload() {
  //Load Scenary Images
  mapa = loadImage('./assets/map.jpg');
  birdFly = loadAnimation(loadSpriteSheet('./assets/bird/bird.png', 78.9, 100, 8));
  chickens = loadAnimation(loadSpriteSheet('./assets/chicken.png', 48, 47, 1));
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  personagem = createSprite(400, 356, 128, 128);
  personagem2 = createSprite(width-100, 356, 128, 128);
  bird = createSprite(width, 50, 70, 66);
  bird.addAnimation("fly", birdFly)
  chicken = createSprite(500, 385, 48, 48);
  chicken.addAnimation("fly", chickens)

  personagem.addAnimation("stay", 'assets/Knight/Knight.png');
  personagem.addAnimation("walk", 'assets/Knight/Walk/walk1.png','assets/Knight/Walk/walk6.png');
  personagem.addAnimation("attack", 'assets/Knight/Attack/attack0.png','assets/Knight/Attack/attack4.png');
  personagem.addAnimation("attack2", 'assets/Knight/Attack_Extra/attack_extra1.png','assets/Knight/Attack_Extra/attack_extra8.png');
  personagem.addAnimation("climb", 'assets/Knight/Climb/climb2.png','assets/Knight/Climb/climb4.png');
  personagem.addAnimation("jump", 'assets/Knight/Jump/jump1.png','assets/Knight/Jump/jump7.png');

  personagem2.addAnimation("stay", 'assets/Rogue/Rogue.png');
  personagem2.addAnimation("walk", 'assets/Rogue/Walk/walk1.png','assets/Rogue/Walk/walk6.png');
  personagem2.addAnimation("attack", 'assets/Rogue/Attack/attack0.png','assets/Rogue/Attack/attack4.png');
  personagem2.addAnimation("attack2", 'assets/Rogue/Attack_Extra/attack_extra1.png','assets/Rogue/Attack_Extra/attack_extra8.png');
  personagem2.addAnimation("climb", 'assets/Rogue/Climb/climb2.png','assets/Rogue/Climb/climb4.png');
  personagem2.addAnimation("jump", 'assets/Rogue/Jump/jump1.png','assets/Rogue/Jump/jump7.png');
  
}

function draw() {
  bird.position.x -=random(1,10)
  bird.position.y +=random(1,2)
  bird.position.y -=random(1,2)
  
  // if(chicken.position.x <= 700)
  //   chicken.position.x += 10;
  // if(chicken.position.x >= 600)
  //   chicken.position.x -= 10;

  if(bird.position.x <= 0){
    bird.position.x = width;
    bird.position.y = 50;
    bird.scale = random(0.7,1)
  }
  //Scenary images
  image(mapa, 0, 0, width, height)
  if(!keyIsPressed){
    personagem.changeAnimation('stay');
    personagem2.changeAnimation('stay')
  }

  if(keyIsDown(65)){
    personagem.position.x -= walkSpeed;
    personagem.mirrorX(-1);
    personagem.changeAnimation('walk');

  }
  if(keyIsDown(68)){
    personagem.position.x += walkSpeed;
    personagem.mirrorX(1);
    personagem.changeAnimation('walk');

  }
  if(keyIsDown(81)){
    personagem.changeAnimation('attack');
  }
  if(keyIsDown(69)){
    personagem.changeAnimation('attack2');
  }
    // Player 2

    if(keyIsDown(37)){
      personagem2.position.x -= walkSpeed;
      personagem2.mirrorX(-1);
      personagem2.changeAnimation('walk');
  
    }
    if(keyIsDown(39)){
      personagem2.position.x += walkSpeed;
      personagem2.mirrorX(1);
      personagem2.changeAnimation('walk');
  
    }
  
    if(keyIsDown(81)){
      personagem2.changeAnimation('attack');
    }
    if(keyIsDown(69)){
      personagem2.changeAnimation('attack2');
    }


  personagem.position.y += jumpSpeed;
    jumpSpeed += gravity;

    if(personagem.position.y > yBase)
    personagem.position.y = yBase
        
  personagem.position.x = constrain(personagem.position.x, 0, width);
  personagem.position.y = constrain(personagem.position.y, 0, height);
  drawSprites();
}

let yBase = 356;
let jumpSpeed = 0;
let gravity = 1;
let walkSpeed = 5
let jumpHeight = -15 

function keyPressed(){
  if(key == " "){
    jumpSpeed = jumpHeight; 
    personagem.changeAnimation('jump');
  }
  console.log(key)
}