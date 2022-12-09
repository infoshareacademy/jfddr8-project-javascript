const darkMode = document.querySelector(".btnDark");
const lightMode = document.querySelector(".btnLight");
const body = document.querySelector(".wrapper");

function dark() {
  body.classList.add("darkActive");
  body.classList.remove("lightActive");

  darkMode.classList.add("darkActive");
  darkMode.classList.remove("lightActive");

  lightMode.classList.add("darkActive");
  lightMode.classList.remove("lightActive");
}

function light() {
  body.classList.add("lightActive");
  body.classList.remove("darkActive");

  darkMode.classList.add("lightActive");
  darkMode.classList.remove("darkActive");

  lightMode.classList.add("lightActive");
  lightMode.classList.remove("darkActive");
}

darkMode.addEventListener("click", dark);
lightMode.addEventListener("click", light);
