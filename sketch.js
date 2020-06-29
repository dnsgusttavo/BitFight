function preload() {
  //Load Scenary Images
  mapa = loadImage('./assets/map.jpg');
}

function setup() {
  //Create Canvas ## If this values are changed, the platform sprites values should be changed too
  createCanvas(1536, 763);

  //Create Player1 and Player2 sprites
  player1 = createSprite(100, 465);
  player2 = createSprite(width - 100, 465);

  //Load animation for respective pslayer class
  loadPlayerSprites('Knight','Mage')

  //Create players
  p1 = new Player(player1, 510, [65,87,68,81,69])
  p2 = new Player(player2, 510, [37,38,39,188,190])
  
  //Load plataforms from plataforms file
  loadPlatforms();
}

function draw() {
  //Turn on player functionalities
  p1.setGameRules();
  p2.setGameRules();

  //Draw map in screen
  image(mapa, 0, 0, width, height)
  
  //Draw all sprites in screen
  drawSprites();
}

function keyPressed(){
  //Pass key param for players class once key is down
  p1.keyOnceDown(key)
  p2.keyOnceDown(key)
}



