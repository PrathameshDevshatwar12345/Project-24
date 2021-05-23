const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var plane;
var rubber,stone,iron;

function setup(){
    createCanvas(1365,634);
    engine = Engine.create();
    world = engine.world;

    hammer=new Hammer(50,50);
    plane= new Plane(670,625,1400,40);
    rubber1=new Rubber(300,600,60);
    rubber2=new Rubber(1200,600,60);
    rubber3=new Rubber(600,600,60);
    stone1 = new Stone(200,500);
    stone2 = new Stone(700,500);
    stone3 = new Stone(500,500);
    iron1 = new Iron(400,600,70,40);
    iron2 = new Iron(1100,600,70,40);
    iron3 = new Iron(100,600,70,40);
}

function draw(){
    background("lightblue");
    Engine.update(engine);
    
    hammer.display();
    plane.display();
    rubber1.display();
    rubber2.display();
    rubber3.display();
    stone1.display();
    stone2.display();
    stone3.display();
    iron1.display();
    iron2.display();
    iron3.display();
}