function preload() {
  //Load Scenary Images
  mapa = loadImage('./assets/map.jpg');
}

function setup() {
  //Create Canvas with 16:9 ratio
  const ratio = 16 / 9;
  if(window.innerHeight < window.innerWidth / ratio)
    window.innerWidth = window.innerHeight * ratio;
  else
    window.innerHeight = window.innerWidth / ratio;
  createCanvas(window.innerWidth,window.innerHeight);

  //Load plataforms from plataforms file
  loadPlatforms();

  //Create Player1 and Player2 sprites
  player1 = createSprite(100, 0);
  player2 = createSprite(width - 100, 0);

  //Load animation for respective pslayer class
  loadPlayerSprites('Mage','Knight')
  
  //Create players
  p1 = new Player(player1, 510, [65,87,68,81,69], "Right")
  p2 = new Player(player2, 510, [37,38,39,188,190], "Left")
  
  //Fix the player scale
  player1.scale = height * 0.001299;
  player2.scale = height * 0.001299;
  
}

//Reload window if window is resized
function windowResized(){
  window.location.href = window.location.href
}

let test = true;
function draw() {
  //Turn on player functionalities
 
  p1.setGameRules();
  p2.setGameRules();

  
  if(collideRectRect(player1.position.x,player1.position.y,player1.collider.extents.x,player1.collider.extents.y,player2.position.x,player2.position.y,player2.collider.extents.x,player2.collider.extents.y)){
    //If player 1 hits
      //Player2 loss life
    //If player2 hits
      //Player1 loss life
    console.log("Hit!")
  }
  
  //Test with players collision
  if(test){
    test=!test;
    player1.displace(player2)
  }else{
    test=!test;
    player2.displace(player1)
  }
  
  //Draw map in screen
  image(mapa, 0, 0, window.innerWidth, window.innerHeight)
  
  //Draw all sprites in screen
  drawSprites();
  // if(Math.sign(player1.collider.offset.x) > 0){
  //   rect(player1.position.x + (player1.collider.extents.x * 0.01),player1.position.y - 5, player1.collider.extents.x,player1.collider.extents.y)
  // }else{
  //   rect(player1.position.x - player1.collider.extents.x,player1.position.y - 5, player1.collider.extents.x,player1.collider.extents.y)
  // }
  testcc(player1.collider.right(),player1.position.y,player1.collider.right(),(player1.position.y + player1.collider.extents.x),player2.collider.left(),player2.position.y,player2.collider.left(),(player2.position.y + player2.collider.extents.x))
  
  stroke('red');
  strokeWeight(4);
  line(player1.collider.right(),player1.position.y,player1.collider.right(),(player1.position.y + player1.collider.extents.x))
  stroke('white');
  line(player1.collider.left(),player1.position.y,player1.collider.left(),(player1.position.y + player1.collider.extents.x))
  stroke('black');
  line(player2.collider.right(),player2.position.y,player2.collider.right(),(player2.position.y + player2.collider.extents.x))
  stroke('blue');
  line(player2.collider.left(),player2.position.y,player2.collider.left(),(player2.position.y + player2.collider.extents.x))
  // rect()
  // rect(player1.position.x - 48 ,player1.position.y,player1.collider.extents.x,player1.collider.extents.y)
  // rect(player2.position.x,player2.position.y,player2.collider.extents.x,player2.collider.extents.y)

  // rect(player1.position.x,player1.position.y,player1.collider.extents.x,player1.collider.extents.y)
}
                  //x1,y1,x2,y2 | x3,y3,x4,y4
function testcc(x1,y1,x2,y2,x3,y3,x4,y4){
  if(x1 == x3 && y1 == y3 && x2 == x4 && y2 == y4){
    console.log("alo")
  }
}
function keyPressed(){
  //Pass key param for players class once key is down
  p1.keyOnceDown(key)
  p2.keyOnceDown(key)
}



