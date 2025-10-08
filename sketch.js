var pebble=0;
var rock=255;
//The setup function only happens once
function setup() {
	createCanvas(500, 500); //create a 500px X 500px canvas
}

//The draw function happens over and over again
function draw() {
  background(0,0,0); //an RGB color for the canvas' background
  //circle
  stroke(92,70,48); // an RGB color for the circle's border
  fill(255,mouseY,127,mouseY); // an RGB color for the inside of the circle (the last number refers to transparency (min. 0, max. 255))
  ellipse(mouseX,mouseY,250,mouseX); // center of canvas, 20px dia
  line(pebble,500,500,pebble);
  triangle(random(250,150), 330, 375, 358, 320, pebble, 375);

  textFont("Impact");
  textSize(30);
  text("BOOOO!!",200,350);
  fill(230,70,260);
  strokeWeight(3);
  ellipse(mouseX,mouseY,50,50);
    noStroke();
  fill(255, mouseY, mouseY);
  ellipse(200, 150, 100, 100);
  rect(150, 150, 100, 75);
  triangle(150, 220, 150, 250, 170, 220);
  triangle(170, 220, 190, 250, 210, 220);
  triangle(200, 220, 220, 250, 240, 220);
  triangle(230, 220, 250, 250, 250, 220);





 }

function mousePressed(){
if (pebble>=255) {
  pebble=0;
}
else{
  pebble= pebble+5;
}
if (rock<=0) {
  rock=0;
}else{
  rock=rock-5;
}
}