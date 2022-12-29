const CZARNYGUZIK = document.querySelector(".btnDark");
const BIALYGUZIK = document.querySelector(".btnLight");
const GUZIK = document.querySelector(".btn");

CZARNYGUZIK.onclick = function () {
  document.body.style.backgroundColor = "black";
  CZARNYGUZIK.style.color = "white";
  CZARNYGUZIK.style.borderColor = "white";
  BIALYGUZIK.style.color = "white";
  BIALYGUZIK.style.borderColor = "white";
};

BIALYGUZIK.onclick = function () {
  document.body.style.backgroundColor = "white";
  CZARNYGUZIK.style.color = "black";
  CZARNYGUZIK.style.borderColor = "black";
  BIALYGUZIK.style.color = "black";
  BIALYGUZIK.style.borderColor = "black";
};
