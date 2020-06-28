let wallImage;
let floorImage;
let player1Sprite;
let player1;
let personagem;


function preload() {
  //Load Scenary Images
  floorImage = loadImage('./assets/floor/6.png');
  wallImage = loadImage('./assets/wall/1.png');

  player1Sprite = loadSpriteSheet('./assets/players/1.png', 144, 144, 90);
  player1 = loadAnimation(player1Sprite);
}

function setup() {
  createCanvas(816, 624);
  personagem = createSprite(400, 150, 50, 100);
  personagem.addAnimation("alo", player1Sprite);
  personagem.scale = 1.5

}

function draw() {
  //Scenary images
  image(floorImage, 0, 0, width, height)
  image(wallImage, 0, 0, width, height)
  
  if(keyIsDown(37)){
    personagem.position.x += -2;
    personagem.mirrorX(1);
  }
  if(keyIsDown(39)){
    personagem.position.x += +2
    personagem.mirrorX(-1);
  }
  if(keyIsDown(38)){
    personagem.position.y += -2
  }
  if(keyIsDown(40)){
    personagem.position.y += +2
  }

  drawSprites();
  

}

