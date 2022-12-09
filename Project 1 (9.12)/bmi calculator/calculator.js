var heightInput = document.getElementById("height");
var weightInput = document.getElementById("weight");
var calculateButton = document.querySelector(".btn");
var result = document.getElementById("results");

var BMI, height, weight;

calculateButton.addEventListener("click", () => {

    height = heightInput.value / 100;
    weight = weightInput.value;
    
    BMI = (weight/(height**2)).toFixed(1); 
    
    result.innerText = BMI;

    if(BMI > 0){
        result.innerText = "Your BMI is" + " " + (BMI);    
    } else if (BMI == 0){
        result.innerText = "Please enter values"
    } else {
        result.innerText = "Negative values are not allowed"
    }
});