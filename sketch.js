
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload() {

}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	Roof1 = new Roof(400, 50, 400, 20);
	Bob1 = new Bob(400, 250, 25);
	Bob2 = new Bob(350, 250, 25);
    Bob3 = new Bob(300, 250, 25);
	Bob4 = new Bob(450, 250, 25);
	Bob5 = new Bob(500, 250, 25);
	Rope1 = new Rope(Bob1.body, { x: 400, y: 50 })
	Rope2 = new Rope(Bob2.body, { x: 350, y: 50 })
	Rope3 = new Rope(Bob3.body, { x: 300, y: 50 })
	Rope4 = new Rope(Bob4.body, { x: 450, y: 50 })
	Rope5 = new Rope(Bob5.body, { x: 500, y: 50 })

	Engine.run(engine);

}


function draw() {
	rectMode(CENTER);
	background(0);
	Roof1.display()
	Bob1.display()
	Bob2.display()
	Bob3.display()
	Bob4.display()
	Bob5.display()
	Rope1.display()
	Rope2.display()
	Rope3.display()
	Rope4.display()
	Rope5.display()

	drawSprites();

}

function keyPressed(){
if(keyCode===LEFT_ARROW){
Matter.Body.applyForce(Bob3.body,Bob3.body.position,{x:-40,y:-40})

}











}



