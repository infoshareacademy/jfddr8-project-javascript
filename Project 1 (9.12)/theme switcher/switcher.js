const darkButton = document.querySelector(".btnDark");
const lightButton = document.querySelector(".btnLight");

darkButton.addEventListener("click", function () {
  document.body.style.backgroundColor = "black";
  darkButton.style.color = "white";
  darkButton.style.borderColor = "white";
  lightButton.style.color = "white";
  lightButton.style.borderColor = "white";
});

lightButton.addEventListener("click", function () {
  document.body.style.backgroundColor = "white";
  lightButton.style.color = "black";
  lightButton.style.borderColor = "black";
  darkButton.style.color = "black";
  darkButton.style.borderColor = "black";
});
