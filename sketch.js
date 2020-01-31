var fixedRect,movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect=createSprite(200, 400, 50, 80);
  fixedRect.shapeColor="green";
  fixedRect.debug=true;
  movingRect=createSprite(200, 200, 80, 30);
  movingRect.shapeColor="green";
  movingRect.debug=true;
 // movingRect.velocityX=-2;
  movingRect.velocityY=2;
 // fixedRect.velocityX=2;
  fixedRect.velocityY=-2;
}

function draw() {
  background(0);  

  if(movingRect.x-fixedRect.x<movingRect.width/2+fixedRect.width/2&&
    fixedRect.x-movingRect.x<movingRect.width/2+fixedRect.width/2
   ){
    movingRect.velocityX = movingRect.velocityX*(-1);
    fixedRect.velocityX = fixedRect.velocityX*(-1);
  }
  
 if( movingRect.y-fixedRect.y<movingRect.height/2+fixedRect.height/2&&
  fixedRect.y-movingRect.y<movingRect.height/2+fixedRect.height/2){
    movingRect.velocityY = movingRect.velocityY*(-1);
    fixedRect.velocityY = fixedRect.velocityY*(-1);
  }

  drawSprites();
}