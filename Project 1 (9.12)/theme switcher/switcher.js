const btnDark = document.querySelector("#btnDark");
const btnLight = document.querySelector("#btnLight");

btnDark.addEventListener("click", function () {
  document.body.style.backgroundColor = "black";

  btnDark.style.color = "white";
  btnLight.style.color = "white";

  btnDark.style.borderColor = "white";
  btnLight.style.borderColor = "white";
});

btnLight.addEventListener("click", function () {
  document.body.style.backgroundColor = "white";

  btnDark.style.color = "black";
  btnLight.style.color = "black";

  btnDark.style.borderColor = "black";
  btnLight.style.borderColor = "black";
});
