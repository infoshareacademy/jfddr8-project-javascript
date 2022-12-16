

const button = document.querySelector("button");
let resultofBMI = document.querySelector("#results");

button.addEventListener("click", function () {
    let height = Number(document.getElementById("height").value);
    let weight = Number(document.getElementById("weight").value);
    const alerts =() => {
      if (height == 0 || weight == 0) {
        resultofBMI.innerHTML = "Please enter values";
      } else if (height < 0 || weight < 0) {
        resultofBMI.innerHTML = "Negative alerts are not allowed";
      }
    }
    const BMI = weight / (((height / 100) * height) / 100);
    resultofBMI.innerHTML = " Your BMI is " + BMI.toFixed(1);
    alerts()  
  });