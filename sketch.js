var quadrado;
function setup() {
  createCanvas(1000,800);
quadrado = createSprite(500,400,18,18)
}

function draw() 
{
  background("darkBlue");
drawSprites();
if(keyIsDown(LEFT_ARROW)){
  quadrado.x=quadrado.x-4
}          
if(keyIsDown(RIGHT_ARROW)){
  quadrado.x=quadrado.x+4
}
if(keyIsDown(UP_ARROW)){
  quadrado.y=quadrado.y-4
}
if(keyIsDown(DOWN_ARROW)){
  quadrado.y=quadrado.y+4
}
if(keyIsDown(ENTER)){
  background("red")
}


}

