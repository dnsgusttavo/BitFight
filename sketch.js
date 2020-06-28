
let wall;
let wallImage;
let floor;
let floorImage;
let player1;
let player1Image
let player2;
let player2Image
let player3;
let player3Image
let player4;
let player4Image

let array = [];

let x= 0;
  let y= 0;
  let tamanhoDoPersonagem = 144;
  let qtdColunas = 5
  let qtdLinhas = 18;
  let increment;
  
  for(let j = 0; j < qtdLinhas; j++){
    // console.log("LINHA",j)
    for(let i = 0; i < qtdColunas; i++){
      (i == 0) ? increment = x : increment = tamanhoDoPersonagem;
      // console.log(x+=increment, y)
      if(array.length < qtdColunas * 35){
        array.push([x+=increment, y])
      }
      
    }
    x = 0;
    y+=tamanhoDoPersonagem;
  }
  
function preload(){
  floorImage = loadImage('./assets/floor/6.png');
  wallImage = loadImage('./assets/wall/1.png');
  player1Image = loadImage('./assets/players/1.png');
  player2Image = loadImage('./assets/players/2.png');
  player3Image = loadImage('./assets/players/3.png');
  player4Image = loadImage('./assets/players/4.png');
}

function setup() {
  createCanvas(816, 624);
  player1 = new Player(player1Image,width - 250, height - 200, 187);
  player2 = new Player(player2Image,width - 600, height - 300, 187);
  player3 = new Player(player3Image,width - 300, height - 320, 187);
  player4 = new Player(player4Image,width - 400, height - 400, 187);
  frameRate(15)
}

function draw() {
  image(floorImage,0,0,width,height)
  image(wallImage,0,0,width,height)
  // image(player1Image,0,0,width,height)
  player1.show();
  player1.animate();
  // player2.show();
  // player2.animate();
  // player3.show();
  // player3.animate();
  // player4.show();
  // player4.animate();

}

class Player{
  constructor(img,mapX,mapY,resize){
      this.mapX = mapX;
      this.mapY = mapY;
      this.resize = resize;
      this.img = img;
      this.matrix = array;
      this.currentFrame = Math.floor(Math.random() * 90);
      this.speed = 10;
  }

  show(){
      //Imagem, 
      //posição na tela X e Y, 
      //tamanho de exibição x y, 
      //possição na matrix x e y,
      //largura e altura da imagem na matrix
      image(this.img, this.mapX, this.mapY, this.resize, this.resize, this.matrix[this.currentFrame][0], this.matrix[this.currentFrame][1], 144, 144)
      this.animate();
  }

  animate(){

      if(keyIsDown(37)){
        this.mapX-=this.speed
      }
      if(keyIsDown(39)){
        this.mapX+=this.speed
      }
      if(keyIsDown(38)){
        this.mapY-=this.speed
      }
      if(keyIsDown(40)){
        this.mapY+=this.speed
      }
        
      this.mapX = constrain(this.mapX, 0, width - this.resize);
      this.mapY = constrain(this.mapY, 100, height - this.resize);

      this.currentFrame++;

      if(this.currentFrame >= this.matrix.length - 1)
          this.currentFrame = 0;
  }

}