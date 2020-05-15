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
  document.getElementById("alaba").src = "images/alaba.png";
  document.getElementById("gnabry").src = "images/gnabry.jpg";
  document.getElementById("goretzka").src = "images/goretzka.png";
  document.getElementById("hummels").src = "images/hummels.jpg";
  document.getElementById("james").src = "images/james.png";
  document.getElementById("jerome").src = "images/jerome.png";
  document.getElementById("kimmich").src = "images/kimmich.png";
  document.getElementById("robben").src = "images/robben.jpg";
  document.getElementById("muller").src = "images/muller.png";
  document.getElementById("neuer").src = "images/neuer.png";
  n.classList.add("all-grey");
  o.classList.add("all-grey");
}

function changePicture(){
 P1.remove.src = "images/alaba.png";
 P1.add.src="images/fifa1.png";
 P2.remove.src = "images/gnabry.jpg";
 P3.remove.src = "images/goretzka.png";
 P4.remove.src = "images/hummels.jpg";
 P5.remove.src = "images/james.png";
 P6.remove.src = "images/jerome.png";
 P7.remove.src = "images/kimmich.png";
 P8.remove.src = "images/robben.jpg";
 P9.remove.src = "images/muller.png";
 P.remove.src = "images/neuer.png";.
}


function grayScaleGone(elem) {
o.classList.remove("all-grey");
}
function grayScaleGo(elem) {
n.classList.remove("all-grey")
}
