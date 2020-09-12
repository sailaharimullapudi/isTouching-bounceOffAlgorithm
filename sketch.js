var fixedRect, movingRect;
var obj1, obj2, obj3, obj4;
var o1, o2;

function setup() {
  createCanvas(1200,800);

  fixedRect = createSprite(400, 100, 50, 80);
    fixedRect.shapeColor = "green";
    fixedRect.debug = true;

  movingRect = createSprite(400, 800,80,30);
    movingRect.shapeColor = "green";

  //movingRect.velocityY = -5;
  //fixedRect.velocityY = +5;

  obj1 = createSprite(200, 100, 50, 50);

  obj2 = createSprite(200, 200, 50, 50);

  obj3 = createSprite(200, 300, 50, 50);
    obj3.velocityX = 5;

  obj4 = createSprite(200, 400, 50, 50);

  o1 = createSprite(300, 300, 50, 50);
    o1.velocityX = 3;
    o1.shapeColor = "purple";

  o2 = createSprite(800, 300, 50, 50);
    o2.velocityX = -3;
    o2.shapeColor = "blue";
}

function draw() {
  background(0,0,0);  

  bounceOff(movingRect, fixedRect);

  movingRect.x = mouseX;
  movingRect.y = mouseY;

  bounceOff(movingRect, obj3);

  if(isTouching(o1, o2)){
    background("green")
  }
  else{
    background("white")
  }

  drawSprites();
}

