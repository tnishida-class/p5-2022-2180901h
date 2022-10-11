// チェッカー
function setup() {
  createCanvas(200, 200);
  let size = width / 8;
  for(let i = 0; i < 8; i++){
    for(let j = 0; j < 8; j++){
      // BLANK[1] (hint: rectのx座標は size * i, y座標はsize * j)
      if(size*(i+j) / 2 % 1 )
      {fill(100, 100, 100); rect(size * i, size * j, size, size);
        if(size*j<75){
          fill(255, 0, 0,); stroke(100, 100, 100); ellipse(size * i + 25/2, size * j + 25/2, size * 9 / 10)
        };
        if(size*j>100){
          fill(0); ellipse(size * i + 25/2, size * j + 25/2, size * 9 / 10)
        }
      }
     
    }
  }
}
