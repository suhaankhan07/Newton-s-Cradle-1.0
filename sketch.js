
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball1,ball2,ball3,ball4,ball5;
var ground,roof;
var chain1, chain2, chain3 ,chain4, chain5;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

    ball1 = new Ball(100,400,30);
    ball2 = new Ball(150,400,30);
    ball3 = new Ball(200,400,30); 
    ball4 = new Ball(250,400,30);
    ball5 = new Ball(300,400,30);
   

    ground = new Ground(400,660,800,20);
    roof = new Ground(400,100,800,20);
   
    chain1 = new Chain(ball1.body,ground.body,60,-300);
    chain2 = new Chain(ball2.body,ground.body,100,-300); 
    chain3 = new Chain(ball3.body,ground.body,140,-300);
    chain4 = new Chain(ball4.body,ground.body,180,-300);
    chain5 = new Chain(ball5.body,ground.body,220,-300);
    
  Engine.run(engine);
  
  keyPressed();
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ball1.display();
  chain1.display();

  ball2.display();
  chain2.display();
  
  ball3.display();
  chain3.display();

  ball4.display();
  chain4.display();

  ball5.display();
  chain5.display();


  ground.display();
  roof.display();
 
  drawSprites();
 
}

function keyPressed() {
  if(keyCode === UP_ARROW) {
  Matter.Body.applyForce(ball1.body,ball1.body.position,{x:-400,y:-200})
 }
}
