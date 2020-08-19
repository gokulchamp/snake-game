var s;
var scl=10;
var food;
let reset;


function setup(){
    createCanvas(400,400);
    console.log("snake game");
    s=new Snake();
    frameRate(10);
    pickLocation();
    reset=createButton("reset");
    reset.position(410,200);
    reset.size(40,40);
    
    reset.mousePressed(gameReset);


}
function gameReset(){
    window.location.reload();
}
 function mousePressed(){
     s.total++;
 }

function pickLocation(){
    var cols=floor(width/scl);
    var rows=floor(height/scl);
    food= createVector(floor(random(cols)),floor(random(rows)));
    food.mult(scl);
}

function draw(){
    background(51);
    s.death();
    s.update();
    s.show();

   if (s.eat(food)){
       pickLocation();
   }

    fill(255,0,100);
    rect(food.x,food.y,scl,scl);

}



function keyPressed(){
    console.log("key pressed")
    if(keyCode=== UP_ARROW){
        s.dir(0,-scl);
    }

    else if(keyCode===DOWN_ARROW){
        s.dir(0,scl);
    }
       

    else if( keyCode===RIGHT_ARROW){
        s.dir(scl,0);
    }
    else if (keyCode === LEFT_ARROW) {
        s.dir(-scl,0);
}



}