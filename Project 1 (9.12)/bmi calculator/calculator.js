const button = document.querySelector("button");

button.addEventListener("click", function () {
  let height = Number(document.getElementById("height").value);
  let weight = Number(document.getElementById("weight").value);
  const BMI = weight / (((height / 100) * height) / 100);
  console.log(BMI);
  let results = BMI.toFixed(1);
  console.log(BMI);
});
