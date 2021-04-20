class box {

    constructor(x, y, width, height) {

      var options = {
          isStatic:true
      }

      this.body = Bodies.rectangle(x, y, width, height, options);
      //this.image=loadImage("sprites/dustbingreen.png");
      this.width = width;
      this.height = height;
      this.x=x;
      this.y=y;

      World.add(world, this.body);
    }

    display(){
      var pos =this.body.position;
      
      rectMode(CENTER);
      //imageMode(CENTER);
      stroke("white");
      fill("white");
      rect(this.x,this.y, this.width, this.height);
      
    }
  }
  