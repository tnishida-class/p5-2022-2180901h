// テキスト「リサイズするプログラムを作る」
function setup(){
  createCanvas(windowWidth, windowHeight);
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

function draw(){
  background(0, 192, 255);
  for(let i = 0; i < 15; i++){
    ellipse(width * i / 15, height * (15 - i) / 15, 40);
  }
  text("center!", width * 0.5, height * 0.5);
}
