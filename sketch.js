const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var box2;
var pig;
var log;
var ground;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    box1 = new Box(200,300,50,50);
    box2 = new Box(177,100,50,50);
    pig = new Pig(200,200);
    log = new Log(200,0,100,PI/2);
    ground = new Ground(200,390,400,20);

   

}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
    pig.display();
    log.display();
    ground.display();

    


  }
  