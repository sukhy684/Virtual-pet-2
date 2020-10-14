var dog, happyDog;
var database, foodS, foodStock;


function preload(){

dog = loadImage("images/dogImg.png");
happyDog = loadImage("images/dogImg1.png");

}

function setup() {
  createCanvas(500, 500);
  
  dog=createSprite(250,250);
  dog.addImage(dog);

  dartabase = firebase.database();

  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
}


function draw() {  
background(46,139,87);

if(keyWentDown(UP_ARROW)){
writeStock(foodS);
happyDog.addImage(happyDog);
}

  drawSprites();

  text("Note: Press UP_ARROW Key To Feed Drago Milk!");
  fill("Black");

}

function readStock(data){
  foodS=data.val();
}

function writeStock(x){

  database.ref('/').update({
    Food:x
  })
}

