const kgValue = document.querySelector("#weight");
const cmValue = document.querySelector("#height");
const calculateBMI = document.querySelector(".btn");
let resultofBMI = document.querySelector("#results");
const alerts = () => {
  if (kgValue.value == 0 || cmValue.value == 0) {
    alert("Please enter values");
  } else if (kgValue.value < 0 || cmValue.value < 0)
    alert("Negative alers are not allowed");
};
const calculateBMIbutton = () => {
  let yourBMI = kgValue.value / Math.pow(cmValue.value / 100, 2);
  resultofBMI.innerHTML = " Twój wynik to " + yourBMI.toFixed(1);
  alerts();
};
calculateBMI.addEventListener("click", calculateBMIbutton);
