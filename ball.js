class ball{
  constructor(x,y,r){
    var options={
      isStatic:false,
      restitution:0.3,
      friction:0.5,
      density:1.2
    }

this.x=x;
this.y=y;
this.r=r;
this.body=Bodies.circle(this.x,this.y,this.r/2,options);
this.image=loadImage(/*"sprites/paper.png"*/"paper.png");
World.add(world,this.body);

  }

display(){

var paperpos=this.body.position;

push();
translate(paperpos.x,paperpos.y);
rectMode(CENTER);
imageMode(CENTER);
ellipseMode(RADIUS);
//strokeWeight(3);
fill("purple");
image/*ellipse*/(this.image,0,0,this.r,50);
pop();

}

}

/*class ball {
  
  constructor(x, y, radius) {

    var ball_options = {
        isStatic:false,
        'restitution':0.3,
        "friction":0.5,
	      "density":1.2
    }

    this.paper = Bodies.circle(x, y, radius,ball_options);
    this.radius=radius;
    this.x=x;
    this.y=y;

    World.add(world, this.paper);
  }

  display(){

    var pos=this.paper.position;

    push();
    translate(pos.x,pos.y);
    strokeWeight(3);
   
    ellipseMode(CENTER);
    fill("purple");
    ellipse(this.x, this.y,this.radius,50);
    pop();
    
  }
}*/
