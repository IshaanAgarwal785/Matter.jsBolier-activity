
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



let engine
let world


var right
var left
var up
var ball

function preload()
{
	
}

function setup() {
	createCanvas(700, 700);


	engine = Engine.create();
	world = engine.world;
	
	
	right = new Side (650,685,1400,25)
	left =  new Side (250,635,25,80)
	up = new Side (500,605,25,150)
	

	var ball_options = {
		restitution:0.5 ,
		frictionAir:1.5,
	//density:1.2
	}
	var ground_options = {
		isStatic: true
	}

	ball = Bodies.circle(60,100,50,ball_options)
	World.add(world,ball)

	ground = Bodies.rectangle(700,700,50,20)
	World.add(world,ground)


	

	//Create the Bodies Here.


	
}


function draw()
 {
  rectMode(CENTER);
  ellipseMode(RADIUS);
  background(0);
 
  //ground.show();
  right.show();
  left.show();
  up.show()



  Engine.run(engine);
  ellipse(ball.position.x,ball.position.y,10)
}

function keyPressed(){
	if (KeyCode === UP_ARROW)
	Matter.Body.applyForce(ball,{x:0,y:0},{x:0.0,y:0.03})
}

