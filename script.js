const cmp = document.getElementById("cmp");
const cmt = document.getElementById("cmt");

const txt = document.getElementById("txt");
const txt2 = document.getElementById("txt2");
const txt3 = document.getElementById("txt3");

const img = document.getElementById("img");
const img2 = document.getElementById("img2");
const img3 = document.getElementById("img3");

function change_to_pic() {
  cmp.style.display = "none";
  txt.style.display = "none";
  cmt.style.display = "block";
  img.style.display = "block";
}
function change_to_txt() {
  cmt.style.display = "none";
  img.style.display = "none";
  cmp.style.display = "block";
  txt.style.display = "block";
}
function change_to_pic2() {
  txt2.style.display = "none";
  img2.style.display = "block";
}
function change_to_txt2() {
  img2.style.display = "none";
  txt2.style.display = "block";
}
function change_to_pic3() {
  change_to_pic();
  change_to_pic2();
  txt3.style.display = "none";
  img3.style.display = "block";
}
function change_to_txt3() {
  change_to_txt();
  change_to_txt2();
  img3.style.display = "none";
  txt3.style.display = "block";
}
