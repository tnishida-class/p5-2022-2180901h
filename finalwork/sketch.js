// 最終課題を制作しよう
let circles;
function setup(){
  createCanvas(windowWidth, windowHeight);
  circles = [];
}

function draw(){
  background(160, 192, 255);
  stroke(204, 102, 0);
  circle1(windowWidth/2, windowHeight/2, 500);
  for(var i = 0; i < 5*PI/3; i = i + PI/3){
    push();
    stroke(204, 102, 0);
    noFill();
    arc(windowWidth/2, windowHeight/2, 500, 500, i, i+PI/3, PIE);
    pop();
  };
  
  for(let i = 0; i < 6; i++){
    let theta = TWO_PI * i / 6 + 1/6*PI;
    let x = windowWidth/2 + cos(theta) * 100; 
    let y = windowHeight/2 + sin(theta) * 100; 
    sarami(x, y, 70);

    let a = windowWidth/2 + cos(theta + 1/12*PI) * 150;
    let b = windowHeight/2 + sin(theta + 1/12*PI) * 150;
    toppings(a, b, 60, 60, i, i+PI);

    let a2 = windowWidth/2 + cos(theta - 1/12*PI) * 180;
    let b2 = windowHeight/2 + sin(theta - 1/12*PI) * 180;
    toppings2(a2, b2, 60, 60, i+PI, i);
  }

  for(let j = 0; j < circles.length; j++){
    let c = circles[j];
    stroke(160, 192, 255);
    fill(160, 192, 255);
    ellipse(c.x, c.y, 150);
  }
  
}

function mouseClicked(){
  let c = { x: mouseX, y: mouseY };
  circles.push(c);
}


function circle1(x, y, r){
  push();
  fill(245, 180, 69);
  circle(x, y, r);
  fill(253, 232, 93);
  circle(x, y, r - 70);
  pop();
}

function sarami(cx, cy, r){
  push();
  fill(232, 70, 45);
  stroke(168,62,45);
  if(cy > windowHeight/2 && cx == windowWidth/2){fill(245, 135, 118)};
  if(cy < windowHeight/2 && cx != windowWidth/2){fill(245, 135, 118)};
  ellipse(cx, cy, r);
  pop();
}

function toppings(cx, cy, w, h, d, e){
  push();
  fill(0, 153, 0);
  stroke(253, 232, 93);
  arc(cx, cy, w, h, d, e, PIE);
  fill(253, 232, 93);
  arc(cx, cy,  w - 20, h - 20, d, e, PIE);
  pop();
}

function toppings2(cx, cy, w, h, d, e){
  push();
  fill(0, 153, 0);
  stroke(253, 232, 93);
  arc(cx, cy, w, h, d, e, PIE);
  fill(253, 232, 93);
  arc(cx, cy,  w - 20, h - 20, d, e, PIE);
  pop();
}

function keyPressed(){
  if(key == " "){
    window.location.reload();
  }
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}


