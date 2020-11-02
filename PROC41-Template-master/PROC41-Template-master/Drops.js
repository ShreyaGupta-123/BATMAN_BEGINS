class Drops{
    constructor(x,y,r){
      
        this.r=2

        this.body=Bodies.circle(x,y,2);
        World.add(world,this.body);
    }
    display(){
            var angle=this.body.angle;
            var position=this.body.position;
            push();
            translate(position.x,position.y);
            rotate(angle);
            noStroke();
            fill(0,0,255);
            ellipseMode(RADIUS);
            ellipse(0,0,2);
            pop();
 
    }
  
    }

