var speed;
var bullet;
var weight;
var thickness;


function setup()
 {
  createCanvas(1600,400);
  speed = random(55,90);
  weight = random(400,1500);
  thickness = random(22,83);

  bullet = createSprite(100, 200, 40, 10);
  bullet.velocityX = speed;
  bullet.shapecolor = "grey";

  wall = createSprite(1500,200,thickness,height/2);
  wall.shapeColor = rgb(80,80,80);
}

function draw() {
  background("black");  


  if(hasCollided(bullet,wall))
  {
    bullet.velocityX = 0;
    var damage = 0.5 * weight * speed * speed / (thickness*thickness*thickness);

    if(damage > 10)
    {
      wall.shapeColor = "red";
    }
    if(damage < 10)
    {
      wall.shapeColor = "green";
    }
  }
  drawSprites();
}