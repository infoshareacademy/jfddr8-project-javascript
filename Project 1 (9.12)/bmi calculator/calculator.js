// BMI = masa ciała / wzrost²
const button = document.getElementById("calculate");

function bmiCalculator() {
  const weight = parseInt(document.getElementById("weight").value);
  const height = parseInt(document.getElementById("height").value);
  const resultsarea = document.getElementById("results");
  const results = weight / ((height / 100) * (height / 100));
  resultsarea.textContent = `Your BMI is ${results.toFixed(1)}`;

  if (weight === 0 || height === 0) {
    alert("Please enter values");
  } else if (weight < 0 || height < 0) {
    alert("Negative values are not allowed");
  }

  return results.toFixed(1);

  console.log(results.toFixed(1));
}

button.addEventListener("click", () => {
  bmiCalculator();
});

//console.log(bmiCalculator(50, 150));
