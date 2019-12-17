
var r = 0;
var g = 50;
var b=255
var rand,count;
var X,Y;


function setup(){
  createCanvas(768,128);
  rand = 0;
  count = 0;
}


function draw() {
if (count % 60 === 0) {
  X = World.mouseX
  Y = World.mouseY
}
if (X === World.mouseX && Y === World.mouseY) {
  if (count % 4 === 0){
    if (rand === 0) {
    update_1();
    }
    else if (rand === 1) {
      update_2();
    }
  }
}
else {
update_1();
} 
  count++;
  rand = Math.round(random(0,1));
  background(r,g,b);
}


function update_1() { 
  r = World.mouseX / 3;
  g = World.mouseY * 2;
  b = World.mouseX / 3;

}
function update_2() { 
  r = World.mouseX * 2;
  g = World.mouseY / 3;
  b = World.mouseX * 2;

}