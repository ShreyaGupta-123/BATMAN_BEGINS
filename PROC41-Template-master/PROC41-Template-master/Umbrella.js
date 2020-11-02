class Umbrella {
      
  constructor(x,y){
       var options = {
            isStatic: true,
            restitution: 0.5
       };
       this.body = Matter.Bodies.circle(x,y,50, options);
      
       this.image = bruce;
       World.add(world, this.body);
  }
  display(){
       var pos = this.body.position;
       imageMode(CENTER);
       image(bruce, pos.x, pos.y+50,250,250);

  }
}
