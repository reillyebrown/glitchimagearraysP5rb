/*
	Simple image display example

	mouse + space bar will invert
  Also, display a random bit of text
*/



var state;
var stateStatic = 0;
var statePositano= 1;
var stateOldCar= 2;
var stateHannah= 3;
var stateSunset= 4;
var stateSanFran= 5;
var stateVictoria= 6;
var statePark= 7;






var regularImg; // Declare variable 'img'.
var inverseImg;
var bRegular = true;
var imageList = [];

var startMillis;


// preload() will execture before setup()
function preload() {
  imageList[0] = loadImage('assets/positano.jpg'); 			
  imageList[1] = loadImage('assets/oldcar.jpg');
  imageList[2] = loadImage('assets/hannah.jpg');
  imageList[3] = loadImage('assets/sunset.jpg');
  imageList[4] = loadImage('assets/sanfran.jpg');
  imageList[5] = loadImage('assets/victoria.jpg');
  imageList[6] = loadImage('assets/park.jpg');
}







function setup() {

  setImagePos();
  state = stateStatic;

  print("imageSequenceP5 Example");

	imageMode(CENTER);

  chooseNewImage();
  
	createCanvas(1024, 800);

  startMillis = millis();
}

function draw() {

  background(255, 227, 233);

  if (state == stateStatic) {
    drawStatic();
  }
  else if (state == statePositano){
    drawPositano();
  }

  else if (state == stateOldCar) {
    drawOldCar();
  }

   else if (state == stateHannah) {
    drawHannah();
  }

   else if (state == stateSunset ){
    drawSunset();
  }

   else if (state == stateSanFran) {
    drawSanFran();
  }

  else if (state == stateVictoria) {
    drawVictoria();
  }

  else if (state == statePark) {
    drawPark();
  }
	

  // When timer expires, after 1000ms, choose a new random image
  if( millis() > startMillis + 1000 ) {	
    // Displays the image at center point
    //image(img, width/2, height/2, random(mouseX), random(mouseY));
    chooseNewImage();
    setImagePos();
    startMillis = millis();
 }
  
  // draw the image
  //image(img, width/2, height/2);
}

function setImagePos() {
  xPos = random(width);
  yPos = random(height);
}





/*
if (img == imageList[0]){
  state = statePositano;
} else if (img == imageList[2]){
  state = stateOldCar;
}else if (img == imageList[3]){
  state = stateHannah;
}else if (img == imageList[4]){
  state = stateSunset;
}else if (img == imageList[1]){
  state = stateSanFran;
}
*/




// chooses a new items from the array, select a random
// index 0 to length of array-1
// add code here to switch states (somehow)

function chooseNewImage() {
 

  state++;
  if( state > statePark)
    state = statePositano;


  

}

function drawStatic() {

}
//********************************************************POSITANO

function drawPositano(){
  background('#cdf4ff');
   image(imageList[0], xPos, yPos);
   
  
//*************************text

textSize(60);
fill('#ee3490');
textFont("Georgia");
text('Positano, Italy', mouseX, mouseY);

//*************************bluestar

  noStroke();
    fill ('#83d0db'); 
  push();
  translate(xPos * 0.8, yPos * 0.5);
  rotate(frameCount / -100.0);
  star(0, 0, 30, 70, 5);
  pop();


 //*************************yellowstar

noStroke();
 fill('#ffe62c');



     push();
  translate(xPos * 0.2, yPos * 0.5);
  rotate(frameCount / 200.0);
  star(0, 0, 5, 110, 10);
  pop();


 //*************************greystar
  noStroke();
  fill('#aeb09b');
  push();
  translate(xPos * 0.1, yPos * 0.5);
  rotate(frameCount / 200.0);
  star(2, 2, 10, 80, 4);
  pop();
}

function star(x, y, radius1, radius2, npoints) {
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2.0;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius2;
    let sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);

  }
  endShape(CLOSE);
}


  


   // draw other shapes here

//********************************************************CAR

function drawOldCar(){
  background('#ffdeb0');
   image(imageList[1], xPos, yPos);
   

   ///*************************text

textSize(60);
fill('#b25f1d');
textFont("Georgia");
text('Encinitas, CA', mouseX, mouseY);

//*************************orangestar

  noStroke();
    fill ('#7e2c0d'); 
  push();
  translate(xPos * 0.8, yPos * 0.5);
  rotate(frameCount / -100.0);
  star(0, 0, 30, 70, 5);
  pop();


 //*************************greenstar

noStroke();
 fill('#778243');



     push();
  translate(xPos * 0.2, yPos * 0.5);
  rotate(frameCount / 200.0);
  star(0, 0, 5, 110, 10);
  pop();


 //*************************bluestar
  noStroke();
  fill('#9fdde1');
  push();
  translate(xPos * 0.1, yPos * 0.5);
  rotate(frameCount / 200.0);
  star(2, 2, 10, 80, 4);
  pop();
}

function star(x, y, radius1, radius2, npoints) {
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2.0;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius2;
    let sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);

  }
  endShape(CLOSE);
}

//********************************************************HANNAH


function drawHannah(){
   background('#d6e8be');
   image(imageList[2], xPos, yPos);
  

    ///*************************text

textSize(60);
fill('#363f29');
textFont("Georgia");
text('Alamo Square, San Francisco', mouseX, mouseY);

//*************************greenstar

  noStroke('#4c5719'); 
  push();
  translate(xPos * 0.8, yPos * 0.5);
  rotate(frameCount / -100.0);
  star(0, 0, 30, 70, 5);
  pop();


 //*************************bluestar

noStroke();
 fill('#9eb6d4');



     push();
  translate(xPos * 0.2, yPos * 0.5);
  rotate(frameCount / 200.0);
  star(0, 0, 5, 110, 10);
  pop();


 //*************************brownstar
  noStroke();
  fill('#946e68');
  push();
  translate(xPos * 0.1, yPos * 0.5);
  rotate(frameCount / 200.0);
  star(2, 2, 10, 80, 4);
  pop();
}

function star(x, y, radius1, radius2, npoints) {
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2.0;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius2;
    let sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);

  }
  endShape(CLOSE);
}

   // draw other shapes here
//********************************************************SUNSET

function drawSunset(){
  background('#cecafc');
   image(imageList[3], xPos, yPos);

    ///*************************text

textSize(60);
fill('#9e9acc');
textFont("Georgia");
text('Chinatown, Victoria, B.C., San Francisco', mouseX, mouseY);

//*************************redstar

  noStroke();
    fill ('#6c1819'); 
  push();
  translate(xPos * 0.8, yPos * 0.5);
  rotate(frameCount / -100.0);
  star(0, 0, 30, 70, 5);
  pop();


 //*************************bluestar

noStroke();
 fill('#90768c');



     push();
  translate(xPos * 0.2, yPos * 0.5);
  rotate(frameCount / 200.0);
  star(0, 0, 5, 110, 10);
  pop();


 //*************************orangestar
  noStroke();
  fill('#eed7b4');
  push();
  translate(xPos * 0.1, yPos * 0.5);
  rotate(frameCount / 200.0);
  star(2, 2, 10, 80, 4);
  pop();
}

function star(x, y, radius1, radius2, npoints) {
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2.0;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius2;
    let sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);

  }
  endShape(CLOSE);

   // draw other shapes here
}

//********************************************************SF
function drawSanFran(){
   image(imageList[4], xPos, yPos);

    ///*************************text

textSize(60);
fill('#423d37');
textFont("Georgia");
text('Marina District, San Francisco, CA', mouseX, mouseY);

//*************************pinkstar

  noStroke();
    fill ('#f0b094'); 
  push();
  translate(xPos * 0.8, yPos * 0.5);
  rotate(frameCount / -100.0);
  star(0, 0, 30, 70, 5);
  pop();


 //*************************yellowstar

noStroke();
 fill('#ffd98e');



     push();
  translate(xPos * 0.2, yPos * 0.5);
  rotate(frameCount / 200.0);
  star(0, 0, 5, 110, 10);
  pop();


 //*************************orangestar
  noStroke();
  fill('#9fc3ba');
  push();
  translate(xPos * 0.1, yPos * 0.5);
  rotate(frameCount / 200.0);
  star(2, 2, 10, 80, 4);
  pop();
}

function star(x, y, radius1, radius2, npoints) {
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2.0;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius2;
    let sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);

  }
  endShape(CLOSE);

   // draw other shapes here
}
//********************************************************B.C.
function drawVictoria(){
  background('#feffa0');
   image(imageList[5], xPos, yPos);
   

    ///*************************text

textSize(60);
fill('#ffc2dc');
textFont("Georgia");
text('Victoria, B.C.', mouseX, mouseY);

//*************************purpletar

  noStroke();
    fill ('#c5a5cb'); 
  push();
  translate(xPos * 0.8, yPos * 0.5);
  rotate(frameCount / -100.0);
  star(0, 0, 30, 70, 5);
  pop();


 //*************************bluestar

noStroke();
 fill('#b1bae8');



     push();
  translate(xPos * 0.2, yPos * 0.5);
  rotate(frameCount / 200.0);
  star(0, 0, 5, 110, 10);
  pop();


 //*************************darkpurplestar
  noStroke();
  fill('#421c3d');
  push();
  translate(xPos * 0.1, yPos * 0.5);
  rotate(frameCount / 200.0);
  star(2, 2, 10, 80, 4);
  pop();
}

function star(x, y, radius1, radius2, npoints) {
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2.0;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius2;
    let sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);

  }
  endShape(CLOSE);

   // draw other shapes here
}

//********************************************************PARK

function drawPark(){
   image(imageList[6], xPos, yPos);

    ///*************************text

textSize(60);
fill('#d5e05c');
textFont("Georgia");
text('Presidio Picnic, San Francisco', mouseX, mouseY);

//*************************greenstar

  noStroke();
    fill ('#c4cc5f'); 
  push();
  translate(xPos * 0.8, yPos * 0.5);
  rotate(frameCount / -100.0);
  star(0, 0, 30, 70, 5);
  pop();


 //*************************bluestar

noStroke();
 fill('#e9f1f6');



     push();
  translate(xPos * 0.2, yPos * 0.5);
  rotate(frameCount / 200.0);
  star(0, 0, 5, 110, 10);
  pop();


 //*************************orangestar
  noStroke();
  fill('#b3a4b0');
  push();
  translate(xPos * 0.1, yPos * 0.5);
  rotate(frameCount / 200.0);
  star(2, 2, 10, 80, 4);
  pop();
}

function star(x, y, radius1, radius2, npoints) {
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2.0;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius2;
    let sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);

  }
  endShape(CLOSE);

   // draw other shapes here
}



function keyPressed() {
  if(key == '1'){
    state = statePositano;
    print("Changing to Positano");
  }

  if(key == '2'){
    state = stateOldCar;
     print("Changing to oldCar");

  }

    if(key == '3'){
    state = stateHannah;
    print("Changing to hannah");
  }

   if(key == '4'){
    state = stateSunset;
    print("Changing to sunset");
  }

   if(key == '5'){
    state = stateSanFran;
    print("Changing to sanfran");
  }

    if(key == '6'){
    state = stateVictoria;
    print("Changing to Victoria");
  }

    if(key == '7'){
    state = statePark;
    print("Changing to Park");
  }

}
