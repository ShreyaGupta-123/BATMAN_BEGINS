const World=Matter.World;
const Bodies=Matter.Bodies;
const Engine=Matter.Engine;
const Constraint=Matter.Constraint;

var world,engine,body;
var bruce, bruceBody;
var drops=[];
var maxDrops=100;
var thunderframe;
var thunder;
var thunder1, thunder2, thunder3;


function preload(){
    bruce=loadImage('./images/Walking Frame/walking_1.png');
    thunder1=loadImage('./images/thunderbolt/1.png');
    thunder2=loadImage('./images/thunderbolt/2.png');
    thunder3=loadImage('./images/thunderbolt/3.png')
}

function setup(){
   createCanvas(400,600);
   engine=Engine.create();
   world=engine.world;
    
   bruceBody=new Umbrella(200,450);

  
  
}

function draw(){
    Engine.update(engine) ;
    background(0,0,0);
    
     bruceBody.display()

     if (frameCount % 1 === 0) {
        drops.push(new Drops(random(0, width), 0,10));
    }

   
    for (var a = 0; a <drops.length; a++) {
        drops[a].display();
    }

    if(frameCount%80===0){
        var rand = Math.round(random(1,3));
        thunderframe = frameCount;
       thunder = createSprite(random(10,370),random(10,30),10,10);
       thunder.scale=0.5
       switch(rand){
         case 1 : thunder.addImage(thunder1);
         break;
         case 2 : thunder.addImage(thunder2);
         break;
         case 3 : thunder.addImage(thunder3);
         break;
         default : break;
       }
       
      }
      
      if(thunderframe + 20 === frameCount && thunder){
        thunder.destroy();
     }

     drawSprites()
}   

