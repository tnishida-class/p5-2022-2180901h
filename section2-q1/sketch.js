// 小手調べ
function setup(){
  noFill();
  for(let i = 0; i < 10; i++){
   if(i>4){stroke(255,0,0)}
   else{stroke(0, 0, 255);}
   ellipse(50,50,i*10+10) // BLANK[1]
  }
}
