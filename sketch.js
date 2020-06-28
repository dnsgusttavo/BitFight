let wallImage;
let floorImage;
let player1Sprite;
let player1;
let personagem;


function preload() {
  //Load Scenary Images
  floorImage = loadImage('./assets/floor/6.png');
  wallImage = loadImage('./assets/wall/1.png');
  
  stay = loadAnimation(loadSpriteSheet('./assets/players/stay.png', 144, 144, 10));
  hammerHit = loadAnimation(loadSpriteSheet('./assets/players/hammerHit.png', 144, 144, 5));
  animationList = 
  [["hammerHit", hammerHit],
  ["stay", stay]];

}

function setup() {
  createCanvas(816, 624);

  personagem = createSprite(400, 150, 50, 100);
  
  for (animation of animationList){
    personagem.addAnimation(animation[0], animation[1]);
  }
  
  personagem.addAnimation(`${stay}`, stay);

  
  personagem.scale = 1.2
  personagem.debug=true;
}

function draw() {
  //Scenary images
  image(floorImage, 0, 0, width, height)
  image(wallImage, 0, 0, width, height)
  
  if(keyIsDown(37) || keyIsDown(65)){
    personagem.position.x += -2;
    personagem.mirrorX(1);
    personagem.setCollider('rectangle',25,35,50,90)
  }
  if(keyIsDown(39) || keyIsDown(68)){
    personagem.position.x += +2
    personagem.mirrorX(-1);
    personagem.setCollider('rectangle',-25,35,50,90)
  }
  if(keyIsDown(38) || keyIsDown(87)){
    personagem.position.y += -2
  }
  if(keyIsDown(40) || keyIsDown(83)){
    personagem.position.y += +2
  }
  if(keyIsDown(81)){
    personagem.changeAnimation('hammerHit');
    setTimeout(() => {
      if(!keyIsDown(81))
        personagem.changeAnimation('stay');
    }, 300);
  }
    

  drawSprites();
}

