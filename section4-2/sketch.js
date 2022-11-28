//　テキスト「オブジェクト」
// 練習問題：ボールのサイズをランダムに変更してみよう
// 練習問題：何も操作しなくてもボールが湧いてくる機能を追加しよう

let balls;

function setup(){
  createCanvas(windowWidth, windowHeight);
  balls = []; //配列ballsの中にオブジェクトの設定をマトリョーシカみたいにまとめられる
}

function draw(){
  background(160, 192, 255);
  for(let i = 0; i < balls.length; i++){
    let b = balls[i];          //ballsの中のi番目のオブジェクト設定のセットをｂとする
    ellipse(b.x, b.y, b.size); //bのxを参照,ｂのyを参照…
    b.x += b.vx;
    b.y += b.vy;
  }
}

function mouseDragged(){
  const dx = mouseX - pmouseX;
  const dy = mouseY - pmouseY;
  if(mag(dx, dy) > 5){
    const b = { x: mouseX, y: mouseY, size: random(20, 100), vx: dx, vy: dy }; //bの設定セットを指定→マウスのべくトルで決まる
    balls.push(b); //配列ballsにbのセットを追加
  }
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
