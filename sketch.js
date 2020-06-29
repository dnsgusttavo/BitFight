function preload() {
  //Load Scenary Images
  mapa = loadImage('./assets/map.jpg');
}

function setup() {
  //Create Canvas
  createCanvas(windowWidth, windowHeight);

  //Create Player1 and Player2
  player1 = createSprite(100, 356, 128, 128);
  player2 = createSprite(width - 100, 356, 128, 128);

  //Load animation for respective player class
  loadPlayerSprites('Knight','Mage')

  p1 = new Player(player1, 356, [65,87,68,81,69])
  p2 = new Player(player2, 356, [37,38,39,188,190])
}

function draw() {
  p1.setGameRules();
  p2.setGameRules();
  //Scenary images
  image(mapa, 0, 0, width, height)
  
  drawSprites();
}
function keyPressed(){
  console.log(key)
  p1.keyOnceDown(key)
  p2.keyOnceDown(key)
}


