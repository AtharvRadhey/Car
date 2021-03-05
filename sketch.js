var car , carImg ;
var road;
var cones , coneImg ;
var PLAY=1;
var END=0;
var gameState=PLAY;

function preload(){
  conesImg=loadImage("cone.png");
  carImg=loadImage("car.png");
  roadImg=loadImage("Road.jpg");
}

function setup() {
 createCanvas(600,400);
  road=createSprite(300,200,20,20);
  road.addImage("road",roadImg);
  road.scale=4;
  road.velocityX=-2;
  car=createSprite(50,200,20,20);
  car.addImage("car",carImg);
  car.scale=0.1;
  conesGroup=new Group();
  
}

function draw() {
 background(0);
  
  if(gameState===PLAY){
  car.y=World.mouseY;
  obstacle();
  drawSprites();
  }
  if (road.x < 200){
      road.x = road.width;
  }
  if(car.isTouching(conesGroup)){
     gameState=END;
     car.x=300;
     car.y=200;
  }   
  if(gameState===END){
   fill("red"); 
   textSize(30); 
   text("😵GAME OVER😵",200,200);  
 } 
}

function obstacle(){
  
  if( frameCount%100===0){
  cones=createSprite(600,Math.round(random(50,350)),20,20);
  cones.addImage(conesImg);
  cones.scale=0.2;
  cones.velocityX=-2; 
  cones.debug=false;
  cones.setCollider("rectangle",0,0,200,400); 
  conesGroup.add(cones);
  }
  
}
