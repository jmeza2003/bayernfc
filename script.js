var n = document.getElementById("champ");
var o = document.getElementById("robert");

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

function changePicture(elem){
	elem.src="images/fifa.png";
}

function changePicture1(elem){
	elem.src="images/fifa1.png";
}

function changePicture2(elem){
	elem.src="images/fifa2.png";
}

function changePicture3(elem){
	elem.src="images/fifa3.png";
}

function changePicture4(elem){
	elem.src="images/fifa4.png";
}

function changePicture5(elem){
	elem.src="images/fifa5.png";
}

function changePicture6(elem){
	elem.src="images/fifa7.png";
}

function changePicture7(elem){
	elem.src="images/robben.png";
}

function changePicture8(elem){
	elem.src="images/fifa9.png";
}

function changePicture9(elem){
	elem.src="images/neuer1.png";
}


function grayScaleGone(elem) {
o.classList.remove("all-grey");
}
function grayScaleGo(elem) {
n.classList.remove("all-grey")
}