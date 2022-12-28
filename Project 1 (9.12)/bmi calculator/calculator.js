const button = document.querySelector(".btn");

button.addEventListener("click", function() {
    let weight = Number(document.getElementById("weight").value);
	let height = document.getElementById("height").value;
	height /= 100;
	const squaredHeight = height * height;
	const bmi = weight/squaredHeight;
	const fixedBmi = bmi.toFixed(1);

    const measure = "Your BMI is " + fixedBmi;

	if (weight === 0 || height === 0) {
		document.getElementById("results").innerHTML = "Please enter values";
	} else if (weight < 0 || height < 0) {
        document.getElementById("results").innerHTML = "Negative Values not Allowed";
    } 
    else {
		document.getElementById("results").innerHTML = measure;
	}
})