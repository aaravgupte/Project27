class Bob {
 constructor(x,y,r){
  
  var options ={
  restitution:0.2,
  density:1
  }
  this.body=Bodies.circle(x,y,r/2+10,options)
  this.r=r
  
  
  World.add(world,this.body)
 }
display(){
var pos=this.body.position;
push()
translate(pos.x,pos.y)
ellipseMode(RADIUS)
fill("pink");
ellipse(0,0,this.r,this.r)
pop()





}


}










