let xPos = 250;
let yPos = 250;
let xSpeed; 
let ySpeed; 
let xDirection = 1; 
let yDirection = 1; 
let dvdSound; 
let dvdImg; 

function preload() {
  dvdSound = loadSound("dvdSound.mp3")
  dvdImg = loadImage("dvdImg.png")
}

function setup() {
  createCanvas(500, 500);
  background(0);
  imageMode(CENTER)

  xSpeed = random(-5, 5); 
  ySpeed = random(-5, 5); 
}

function draw() {
  background(0);

  image(dvdImg, xPos, yPos, 50, 50)

  xPos += xSpeed * xDirection; 
  yPos += ySpeed * yDirection; 

  if (xPos < 25 || xPos > 475) {
    xDirection = xDirection * -1; 
    dvdSound.play()
  }

  if (yPos < 25 || yPos > 475) {
    yDirection = yDirection * -1; 
    dvdSound.play()
  }
}
