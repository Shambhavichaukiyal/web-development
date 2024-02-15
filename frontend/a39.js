
   var player1 =Math.floor(Math.random()*6)+1;
   var player2 =Math.floor(Math.random()*6)+1;
   var im1="dice"+player1+".png";
   var im2="dice"+player2+".png";
   var i1=document.querySelectorAll("img")[0];
   var i2=document.querySelectorAll("img")[1];
   i1.setAttribute("src" ,im1);
   i2.setAttribute("src", im2);
