var fixedBrick
var movingBrick


function setup() {
  createCanvas(800,400);
  fixedBrick=createSprite(400,400,50,80)
  movingdBrick=createSprite(700,400,80,50)
  fixedBrick.shapeColor="green"
  movingBrick.shapeColor="green"
  fixedBrick.debug=true
  movingBrick.debug=true 
}

function draw() {
  background(255,255,255);  
  movingBrick.y=mouseY
  movingBrick.x=mouseX
if(movingBrick.x-fixedBrick.x<=fixedBrick.width/2+movingBrick.width/2
  && fixedBrick.x-movingBrick.x<=fixedBrick.width/2+movingBrick.width/2
  && movingBrick.y-fixedBrick.y<=fixedBrick.heigth/2+movingBrick.height/2
  && fixedBrick.y-movingBrick.y<=fixedBrick.height/2+movingBrick.height/2){
  
    fixedBrick.shapeColor="red"
    movingBrick.shapeColor="red"
}
else {
  fixedBrick.shapeColor="green"
  movingBrick.shapeColor="green"

}
  drawSprites();
}