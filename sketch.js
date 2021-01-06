
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1,bob2,bob3,bob4,bob5;
var roof;
var rope1,rope2,rope3,rope4,rope5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	roof = new Roof(400,400,200,25);

	bob1 = new Bob(320,600,40);
	bob2 = new Bob(360,600,40);	
	bob3 = new Bob(400,600,40);
	bob4 = new Bob(440,600,40);
	bob5 = new Bob(480,600,40);	
	
	bobDiameter = 40;
	rope1 = new Rope(bob1.body,roof.body,-40*2,0);
	rope2 = new Rope(bob2.body,roof.body,-bobDiameter,0);
	rope3 = new Rope(bob3.body,roof.body,0,0);
	rope4 = new Rope(bob4.body,roof.body,bobDiameter*1,0);
	rope5 = new Rope(bob5.body,roof.body,bobDiameter*2,0);
	
			

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  ellipseMode(CENTER);
  background("white");
  
	roof.display();

	rope1.display();
	rope2.display();
	rope3.display();
	rope4.display();
	rope5.display();

	bob1.display();
	bob2.display();
	bob3.display();
	bob4.display();
	bob5.display();

	//line(320,600,320,400);
	//line(360,600,360,400);
	//line(400,600,400,400);
	//line(440,600,440,400);
	//line(480,600,480,400);

	//keyPressed();

  drawSprites();
}

function keyPressed() {
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(bob1.body,bob1.position,{x:-100,y:-80});
	}
}	

//