var n = document.getElementById("champ");
var o = document.getElementById("robert");
var P1 = document.getElementById("alaba");
var P2 = document.getElementById("gnabry");
var P3 = document.getElementById("goretzka");
var P4 = document.getElementById("hummels");
var P5 = document.getElementById("james");
var P6 = document.getElementById("jerome");
var P7 = document.getElementById("kimmich");
var P8 = document.getElementById("robben");
var P9 = document.getElementById("muller");
var P = document.getElementById("neuer");

function resetImage() {
  P1.src = "images/alaba.png";
  P2.src = "images/gnabry.jpg";
  P3.src = "images/goretzka.png";
  P4.src = "images/hummels.jpg";
  P5.src = "images/james.png";
  P6.src = "images/jerome.png";
  P7.src = "images/kimmich.png";
  P8.src = "images/robben.jpg";
  P9.src = "images/muller.png";
  P.src = "images/neuer.png";
  n.classList.add("all-grey");
  o.classList.add("all-grey");
}

function changePicture(){
 P1.remove.src = "images/alaba.png";
 P1.add.src="images/fifa.png";
 P2.remove.src = "images/gnabry.jpg";
 P2.add.src = "images/fifa1.png";
 P3.remove.src = "images/goretzka.png";
 P3.add.src = "images/fifa2.png";
 P4.remove.src = "images/hummels.jpg";
 P4.add.src = "images/fifa3.png";
 P5.remove.src = "images/james.png";
 P5.add.src = "images/fifa4.png";
 P6.remove.src = "images/jerome.png";
 P6.add.src = "images/fifa5.png";
 P7.remove.src = "images/kimmich.png";
 P7.add.src = "images/fifa7.png";
 P8.remove.src = "images/robben.jpg";
 P8.add.src = "images/Robben.png";
 P9.remove.src = "images/muller.png";
 P9.add.src = "images/fifa9.png";
 P.remove.src = "images/neuer.png";.
 P.add.src ="images/neuer1.png";
}


function grayScaleGone(elem) {
o.classList.remove("all-grey");
}
function grayScaleGo(elem) {
n.classList.remove("all-grey")
}
