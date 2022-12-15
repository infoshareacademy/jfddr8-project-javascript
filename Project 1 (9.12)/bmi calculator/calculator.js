const BMIcalc = document.querySelector(".btn");

BMIcalc.addEventListener("click", function () {
  let weight = document.getElementById("weight").value;
  let height = document.getElementById("height").value;
  let BMI = (weight / (height / 100) ** 2).toFixed(1);
  const result = document.getElementById("results");
  if (weight > 0 && height > 0) {
    result.textContent = BMI;
  } else if (weight == 0 || height == 0) {
    result.textContent = "Please enter values";
  } else {
    result.textContent = "Negative values are not allowed";
  }
});
