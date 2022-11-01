// 練習問題：吹き出し
// 吹き出しの位置、背景色 etc. を関数 balloon の引数で指定できるようにしてみよう
// 吹き出しにしっぽを付けてみよう
function setup(){
  createCanvas(400, 400);
  background(200);
  balloon("I love keyakizaka46");
}

function balloon(t){
  push();
  let w = textWidth(t); //文字の長さ=w
  let h = textAscent() + textDescent(); //文字の高さアセント＋ディセント
  let p = 2; //文字と吹き出しの隙間
  fill(255,150,200);
  stroke(255,150,200);
  rect(0, 0, w + p * 2, h + p * 2); //(始点x,始点y,横幅,縦幅)
  regularPolygon(3, w-5, h+9, 10);
  fill(255);
  text(t, p, h + p);
  pop();
}

function regularPolygon(n, cx, cy, r){
  push();
  beginShape();
  for(var i = 0; i < n; i++){
    let theta = TWO_PI * i / n + HALF_PI;
    let x = cx + cos(theta) * r;
    let y = cy + sin(theta) * r;
    vertex(x,y);
  }
  endShape(CLOSE);
  pop();
}