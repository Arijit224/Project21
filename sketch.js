var ball;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
 var ball_options={
	 isStatic:false,
	 restitution:0.3,
	 friction:0,
	 density:1.2
 }

	engine = Engine.create();
	world = engine.world;

	Matter.Bodies.circle(x, y, radius, [options], [maxSides])


	Engine.run(engine);
  
}


function draw() {
	class Ground
	{
		constructor(x,y,r)
		{
			let options={
				isStatic:false
			};
			this.body=Bodies.circle(x,y,r)
			this.r=r;
			World.add(world,this.body);
			groundObj.display(
				groundObj=new ground(width/2,670,width,20)
				leftSide=new ground(1100,600,20,120))
		  
		}
	}
	

  


	
	rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



