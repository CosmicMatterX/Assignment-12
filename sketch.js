const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ball;
var ground;
var left;
var right;

var maxSpeed = 12.5; 
var xForce = 0;
var kingXPos = 0;


var yForce = 0;
var kingYPos = 202;

var wall1
var wall2

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  
  ball_options={
    restitution : 0.4
    Matter.Body.applyForce 
  }
  ball = Bodies.circle(20,30,40,ball_options);
  World.add(world,ball)

  ground =new Ground(200,398,480,15);
  right = new Ground(398,200,1,400);
  left = new Ground(1,200,1,400);
  wall1 = new Ground(250,360,10,90);
  wall2 = new Ground(330,360,10,90);
 
  fill("yellow")
  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() 
{
  background(51);

  wall1.show();
  wall2.show();
  ground.show();
  left.show();
  right.show();
  ellipse(ball.position.x,ball.position.y,20);
 
  Engine.update(engine);
 

  
}

