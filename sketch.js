var fixedRect,movingRect; 
function setup() {
   createCanvas(800,800); 
  fixedRect= createSprite(400, 300, 100, 100); 
  movingRect=createSprite(500,800,100,200); 
  fixedRect.debug=true; 
  movingRect.debug=true; 
  fixedRect.shapeColor="green";
   movingRect.shapeColor="green"; 
  } 
  function draw() { 
  background("black");
 movingRect.x= World.mouseX;
 movingRect.y=World.mouseY;
 console.log(movingRect.x-fixedRect.x,fixedRect.width/2+movingRect.width/2);
if(movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2&&
  fixedRect.x-movingRect.x<movingRect.width/2+fixedRect.width/2&&
  movingRect.y-fixedRect.y<movingRect.height/2+fixedRect.height/2&&
  fixedRect.y-movingRect.y< movingRect.height/2+fixedRect.height/2){
          fixedRect.shapeColor="blue";
         movingRect.shapeColor="blue";
         } 
         else{
   fixedRect.shapeColor="green"; 
   movingRect.shapeColor="green";
   }
   drawSprites(); }