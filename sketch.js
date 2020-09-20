var ball, ball1, ball2, ball3, ball4 
var AnchorX, AnchorY, Anchor2X, Anchor2Y;


const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

display()
ball.display;
ball1.display;
ball2.display;
ball3.display;
ball4.display;

drawSprites();
	
}



