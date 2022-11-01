// テキスト「関数を使う」
// 練習問題：このプログラムを改造してEUの旗を描いてみよう
function setup(){
  createCanvas(200, 200);
  background(0, 15, 230);
  for(let i = 0; i < 12; i++){
    let theta = TWO_PI * i / 12;   //一周12分割、iが1つずつ増加（0°＜＝theta＜360°）
    let x = 100 + cos(theta) * 65; //x座標方面に100、*半径
    let y = 100 + sin(theta) * 65; //y〃（原点は左上→y座標反転、時計回りに描写）
    star(x, y, 10);
  }
}

// ヒント：section5-2 にある star 関数をここにコピーして、 draw 内で ellipse の代わりに使おう
function star(cx, cy, r){
  push();
  fill(251,208,29);
  stroke(251,208,29);
  beginShape();
  for(var i = 0; i < 5; i++){
    let theta = TWO_PI * i * 2 / 5 - HALF_PI;
    let x = cx + cos(theta) * r;
    let y = cy + sin(theta) * r;
    vertex(x,y);
  }
  endShape(CLOSE);
  pop();
}