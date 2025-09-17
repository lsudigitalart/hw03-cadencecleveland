let colors = [];

function setup() {
  createCanvas(500, 500);
  background(255,255,197);

  randomSeed(42); 
  frameRate(20);
  frameRate(60);
  frameRate(120);
  frameRate(500);
  

 
  colors = [
    color(255, 0, 0),      // red
    color(255, 165, 0),    // orange
    color(255, 255, 0),    // yellow
    color(0, 255, 0),      // green
    color(0, 0, 255),      // blue
    color(128, 0, 128)     // purple
  ];
}

function draw() {
  let c = random(colors);   // pick from rainbow
  fill(c);

  let x = random(width);
  let y = random(height);
  let s = random(10, 40);

  rect(x, y, s, s);
}

