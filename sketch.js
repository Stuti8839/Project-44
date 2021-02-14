const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var polarBear, fish, penguin, iceBlock,iceBlock2, canvas;
var polarBearImage, penguinImage,backgroundImage, fishImage;
var score = 0;

function preload(){
  polarBearImage = loadImage("images/polarBear.png");
  penguinImage = loadImage("images/penguin.png");
  backgroundImage = loadImage("images/background.jpg");
  fishImage = loadImage("images/fish.png");
}

function setup(){
  canvas = createCanvas(1200,600);
  engine = Engine.create();
  world = engine.world;

  iceBlock = new Ice(200,575,500,200);

  iceBlock2 = new Ice(800,575,700,300);

  polarBear = createSprite(200,475,50,50);
  polarBear.addImage(polarBearImage);
  polarBear.scale = 0.5;

  fish = new Fish(700,470);
  fish2 = new Fish(600,470);
  fish3 = new Fish(800,470);
  fish4 = new Fish(900,470);
  fish5 = new Fish(1000,470);
  fish6 = new Fish(1100,470);
  fish7 = new Fish(1200,470);

  penguin = createSprite(900,100,50,50);
  penguin.addImage(penguinImage);
  penguin.scale = 0.3;
}


function draw(){
  background(backgroundImage);

  score = score + Math.round(frameCount/200);
  
  if(keyDown(UP_ARROW)){
    polarBear.velocityY = -12;
  }
  
  //polarBear.velocityY = polarBear.velocityY + 0.8;

  if(keyDown(RIGHT_ARROW)){
    polarBear.velocityX = 6;
  }
  if(keyWentUp(RIGHT_ARROW)){
    polarBear.velocityX = 0;
  }

  iceBlock.velocityX = -6;
  iceBlock2.velocityY = -6;

  iceBlock.display();
  iceBlock2.display();
  
  //fish.velocityY = -6;
  fish.display();
  fish2.display();
  fish3.display();
  fish4.display();
  fish5.display();
  fish6.display();
  fish7.display();

  /*if(fish.isTouching(polarBear)){
    fish.x = 1200;
  }*/

  //spawnFish();

  drawSprites();
  text("Score : " + score, 800, 20);
}

/*function spawnFish(){
  for(var k = 300; k < 600; k++){
    var fishes = new Fish(k, 470);
    fishes.display();
  }
}*/