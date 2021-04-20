class Chain{
    constructor(bodyA, pointB){
        var options = {
            bodyA:bodyA,
            pointB:pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.chain= Constraint.create(options);
        World.add(world, this.chain);
    }

 fly(){
       this.chain.bodyA= null;
   }
   
      display(){
        if(this.chain.bodyA){
            var pointA = this.chain.bodyA.position;
            var pointB = this.pointB;
            stroke(2);
            strokeWeight(4);
            fill("black");
            line(/*pointA.x, pointA.y, pointB.x, pointB.y*/pointB.x,pointB.y,pointA.x,pointA.y);
        }    
       
    }
    
}
