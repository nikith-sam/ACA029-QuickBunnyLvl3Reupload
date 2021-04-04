var bunny;
var bricktop1, bricktop2, bricktop3, bricktop4,bricktop5, brickbot1, brickbot2, brickbot3, bribkbot4;
var carrot;
var snakeGroup;

function preload(){
  bunnyimg=loadImage("images/bunnyImg.png");
  carrotimg=loadImage("images/carrot.png");
  snakeimg=loadImage("images/snake.png");
  bg=loadImage("images/bg.png");
}

function setup() {
  createCanvas(600,600);

  edges=createEdgeSprites();
  bunny=createSprite(40,550,20, 20);
  bunny.scale=0.25;
  bunny.addImage(bunnyimg);
  bricktop1=createSprite(300,250,100,20);
  bricktop1.velocityX = 5;
  bricktop2=createSprite(150,250,100,20);
  bricktop2.velocityX = 5;
  bricktop3=createSprite(0,250,100,20);
  bricktop3.velocityX = 5;
  bricktop4=createSprite(450,250,100,20);
  bricktop4.velocityX = 5;
  bricktop5=createSprite(600,250,100,20);
  bricktop5.velocityX= 5;
  brickbot1=createSprite(225,350,100,20);
  brickbot1.velocityX= -5;
  brickbot2=createSprite(75, 350, 100,20);
  brickbot2.velocityX = -5;
  brickbot3=createSprite(375, 350, 100, 20);
  brickbot3.velocityX = -5;
  brickbot4=createSprite(525, 350, 100, 20);
  brickbot4.velocityX = -5;
  carrot=createSprite(550, 50, 15, 15);
  carrot.scale=0.1;
  carrot.addImage(carrotimg);
  bricktop1.shapeColor= "brown";
  bricktop2.shapeColor= "brown";
  bricktop3.shapeColor= "brown";
  bricktop4.shapeColor= "brown";
  bricktop5.shapeColor= "brown";
  brickbot1.shapeColor= "brown";
  brickbot2.shapeColor= "brown";
  brickbot3.shapeColor= "brown";
  brickbot4.shapeColor= "brown";
  bunny.shapeColor= "white" ;
  carrot.shapeColor= "orange";
  
  snakeGroup= new Group();
}

function draw() {
  background(bg);  
  bricktop1.bounceOff(edges[0]);
  bricktop1.bounceOff(edges[1]);
  bricktop2.bounceOff(edges[0]);
  bricktop2.bounceOff(edges[1]);
  bricktop3.bounceOff(edges[0]);
  bricktop3.bounceOff(edges[1]);
  bricktop4.bounceOff(edges[0]);
  bricktop4.bounceOff(edges[1]);
  bricktop5.bounceOff(edges[0]);
  bricktop5.bounceOff(edges[1]);
  brickbot1.bounceOff(edges[0]);
  brickbot1.bounceOff(edges[1]);
  brickbot2.bounceOff(edges[0]);
  brickbot2.bounceOff(edges[1]);
  brickbot3.bounceOff(edges[0]);
  brickbot3.bounceOff(edges[1]);
  brickbot4.bounceOff(edges[0]);
  brickbot4.bounceOff(edges[1]);
  bunny.bounceOff(edges[0]);
  bunny.bounceOff(edges[1]);
  bunny.bounceOff(edges[2]);
  bunny.bounceOff(edges[3]);

  if(keyDown("up")){
    bunny.y=bunny.y-5;
  }
  if(keyDown("down")){
    bunny.y=bunny.y+5;
  }
  if(keyDown("left")){
    bunny.x=bunny.x-5;
  }
  if(keyDown("right")){
    bunny.x=bunny.x+5;
  }

  if(bunny.isTouching(carrot))
  {
    textSize(50);
    text("YOU WIN!",200,100);
    bricktop1.velocityX = 0;
    bricktop2.velocityX = 0;
    bricktop3.velocityX = 0;
    bricktop4.velocityX = 0;
    bricktop5.velocityX = 0;
    brickbot1.velocityX = 0;
    brickbot2.velocityX = 0;
    brickbot3.velocityX = 0;
    brickbot4.velocityX = 0;
    snake.velocityX=0;
    snake.velocityY=0;
  }
  if(bunny.isTouching(bricktop1) || bunny.isTouching(bricktop2) || bunny.isTouching(bricktop3) || bunny.isTouching(bricktop4) || bunny.isTouching(bricktop5) || bunny.isTouching(brickbot1) || bunny.isTouching(brickbot2) || bunny.isTouching(brickbot3) || bunny.isTouching(brickbot4)){
    textSize(50);
    text("YOU LOSE!", 200 ,100);
    bricktop1.velocityX = 0;
    bricktop2.velocityX = 0;
    bricktop3.velocityX = 0;
    bricktop4.velocityX = 0;
    bricktop5.velocityX = 0;
    brickbot1.velocityX = 0;
    brickbot2.velocityX = 0;
    brickbot3.velocityX = 0;
    brickbot4.velocityX = 0;
    snake.velocityY=0;
    snake.velocityX=0;
  }
  
  generateSnakes();

  for (var i=0; i< (snakeGroup).length; i++){
    var temp = (snakeGroup).get(i);
    if (bunny.isTouching(temp)){
      bunny.x=40;
      bunny.y=550;
    }
  }

  drawSprites();

}

function generateSnakes(){
  if(frameCount % 30 === 0){
    console.log(frameCount);
    var snake = createSprite(300, random(70,520), random(30,120), 5);
    snake.scale=0.3;
    snake.addImage(snakeimg);
    snake.shapeColor= "blue";
    snake.velocityX=random(4,-4);
    snake.velocityY=random(4,-4);
    snakeGroup.add(snake);
  }
}