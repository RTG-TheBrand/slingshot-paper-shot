const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
//const Render=Matter.Render;
var d,dimage;
var wall1,wall2,wall3;
var earth,paper;

function preload(){

dimage=loadImage(/*"sprites/dustbin.png"*/"dustbin.png");

}

function setup(){
    var canvas = createCanvas(1360,657);
    engine = Engine.create();
    world = engine.world;

  d=createSprite(1165,420,280,280);
   d.scale=0.9;
   d.addImage("image",dimage);

		earth=new ground(680,580,width,20);
    wall1=new box(1165,559,280,20);
		wall2=new box(1040,410,20,270);
		wall3=new box(1290,410,20,270);
    paper=new ball(180,50,50);

    chain=new Chain(paper.body,{x:300,y:250});

    /*var render = Render.create({
      element: document.body,
      engine: engine,
      options: {
        width:1200,
        height: 700,
        wireframe: false
      }

    });*/

    Engine.run(engine);
}  
function draw(){
    background("white");
    Engine.update(engine);
  
/*if(mouseIsPressed){
  Matter.Body.setPosition(paper.body, {y: mouseY,x: mouseX });
}*/
	earth.display();
	wall1.display();
	wall2.display();
	wall3.display();
  paper.display();

  chain.display();

  drawSprites();
}
/*function keyPressed(){
if(keyCode === UP_ARROW){
  Matter.Body.applyForce(paper.body,paper.body.position,{x:155,y:-155});
}

if(keyCode === DOWN_ARROW){
  Matter.Body.applyForce(paper.body,paper.body.position,{x:-155,y:-155});
}

}*/

function mouseDragged(){

  Matter.Body.setPosition(paper.body,/*{x:mouseX,y:mouseY*/{y: mouseY,x: mouseX });

}

function mouseReleased(){

chain.fly();

}