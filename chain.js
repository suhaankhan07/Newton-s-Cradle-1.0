class Chain {
   constructor(bodyA,bodyB,offsetX,offsetY) {
     
    this.offsetX = offsetX;
    this.offsetY = offsetY;


    var options = {
         bodyA: bodyA,
         bodyB: bodyB,
         pointB:{x:this.offsetX,y:this.offsetY},
         length: 10,
         stiffness:0.04
     }
   
   
     this.chain = Matter.Constraint.create(options);
     World.add(world,this.chain);
   
   
   }
    display() {
      var pointA = this.chain.bodyA.position;
      var pointB = this.chain.bodyB.position;
    
        stroke("green")
        strokeWeight(4);
        var anchor1X = pointA.x;
        var anchor1Y = pointA.y;
        var anchor2X = pointB.x + this.offsetX;
        var anchor2Y = pointB.x + this.offsetY;

        line(anchor1X,anchor1Y,anchor2X,anchor2Y);
    }
   
  }
  