const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var polygon,rope,block,ground1,ground;

function preload(){}

function setup(){
    createCanvas(800,800);
    engine = Engine.create();
    world = engine.world;

    polygon = new Poly(200,200);
    rope = new Slingshot(polygon.body,{x:200,y:200});
    block = new Block(400,100);
    ground = new Ground(400,800,800,10);
    ground1 = new Ground(400,110,100,10);
}

function draw(){
    Engine.update(engine)
    background("lightgreen");
   polygon.display();
  rope.display();
    block.display();
    ground.display();
    ground1.display();
    
}

function mouseDragged(){
    //if (gameState!=="launched"){
        Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
    //}
}

function mouseReleased(){
    rope.fly();
}