
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let ball;
let ground;
let side1, side2;

function preload()
{
	
}

function setup() {
	createCanvas(800,700);


	engine = Engine.create();
	world = engine.world;

	var ball_options = {
		restitution:0.3,
        frictionAir:0,
		density:1.2
	}

	var ground_options={
		isStatic:true
	}

	var side_options = {
		isStatic:true
	}

	ball = Bodies.circle(100,350,5,ball_options);
	stroke("white");
	fill("white");
	World.add(world,ball);

    ground = Bodies.rectangle(width/2,670,width,5,ground_options);
	World.add(world,ground);

    side1 = Bodies.rectangle(700,625,10,100,side_options);
    World.add(world,side1);

    side2 = Bodies.rectangle(500,625,10,100,side_options);
	World.add(world,side2);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  ellipseMode(RADIUS);
  background(0);
  
  ellipse(ball.position.x,ball.position.y,15);

  rect(ground.position.x,ground.position.y,800,5);
  rect(side1.position.x,side1.position.y,10,100);
  rect(side2.position.x,side2.position.y,10,100)
  

  }

function keyPressed(){
	if (keyCode === UP_ARROW){
       Matter.Body.applyForce(ball,ball.position,{x:1.5,y:-5})
	}

}