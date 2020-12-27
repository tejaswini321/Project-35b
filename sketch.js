var dog,dog2,happyDog,foodS,foodStock;
var database;

function preload(){
  happyDog = loadImage("images/dogImg1.png");
  dog2 = loadImage("images/dogImg.png");
}


function setup() {
  createCanvas(500, 500);
 
  database = firebase.database();

  dog = createSprite(250,250,10,10);
  dog.addImage(dog2);
  
}


function draw() {  
background(rgb(46,139,86));
  drawSprites();

  
  
}