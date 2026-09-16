let answerResults = ["yes", "no", "maybe", "idk"];
let answer = "8";

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent('test');
  background(40, 150, 50);
}

function draw() {
  fill(0);
  ellipse(width / 2, 300, 300);

  fill(255);
  ellipse(width / 2, 300, 200);

  // answer text
  fill(0);
  textSize(55);
  textAlign(CENTER);
  //text("8", width/2, 330);
  text(answer, width / 2, 320);

  // button
  if (mouseX > 100 && mouseX < 400 && mouseY > 525 && mouseY < 677) {
    fill(100);
  } else {
    fill(255);
  }

  rectMode(CENTER);
  rect(width / 2, 600, 300, 150, 20);
  fill(0);
  strokeWeight(3);
  text("Press Me", width / 2, 615);

  //console.log(mouseX, mouseY);
}

function mousePressed() {
  if (mouseX > 100 && mouseX < 400 && mouseY > 525 && mouseY < 677);
  answer = answerResults[int(random(4))];
}
