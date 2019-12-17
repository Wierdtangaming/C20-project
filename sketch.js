
var r = 0;
var g = 50;
var b=255;

var randXY = 0;

var count = 0;

var ellipse,ellipse_img;

// INITIALIZE ALL YOUR VARIABLES
// Ideally you would create 3 variables. red blue green or r, g, b



function preload() {

  ellipse_img("ellipse.png");


}



function setup(){
  ellipse = createSprite(200,200,50,50);
  ellipse.addImage("glorified circle", ellipse_img);
  createCanvas(768,128);
}

function draw(){
  count++;
  randXY = Math.round(random(0,1));
  // change the value of Red based on the mouse movemeadwnt about the X axis
    r = World.mouseX / 3;
    g = World.mouseY * 2;
    b = World.mouseX / 3;

  // change the value of Green based on the mouse movement about the X axis
  // change the value of Blue based on the mouse movement about the X axis

  // Use the map() function to do so. 

  // Pass the values to the background() function you have learnt previously.
  background(r,g,b);

  // Create an ellipse that will move around with you mouse about the X axis.

  // Remember to fill the canvas with white paint before creating the ellipse.
}