// 練習問題「心臓の鼓動のように大きくなったり小さくなったりする円」
let count;
let cycle;
let size;

function setup(){
  createCanvas(200, 200);
  count = 0;
  cycle = 5;
  size = 0 
}

function draw(){
  background(160, 192, 255);
  count = (count + 1) % cycle;
  // BLANK[1]
  size += 3*count;
  if(size < 0,size > width){size = -1*size}
  if(keyIsDown(UP_ARROW)){size += 6*count}
  
  
  //else if(-1*size < 100){count = -1*count}
  ellipse(width / 2, height / 2, size);
}
