# BMI calculator

1. Do wykonania jest kalkulator BMI - na podstawie podanego wzrostu i wagi, po naciśnięciu przycisku w komunikacie pod formularzem ma się znaleźć "Your BMI is {bmi}". BMI ma być podane z dokładnością do jednego miejsca po przecinku.
2. Jeżeli któreś z pól otrzyma wartość "0" - w komunikacie wrzućcie informację: "Please enter values".
3. Jeżeli któreś z pól otrzyma ujemną wartość - w komunikacie wrzućcie informację: "Negative values are not allowed".


<!DOCTYPE html>
<html>

<head>
	<!-- Include JS files -->
	<script src="app.js"></script>
</head>

<body>
	<div class="container">
		<h1>BMI Calculator</h1>

		<!-- Option for providing height
			and weight to the user-->
		<p>Height (in cm)</p>

		<input type="text" id="height">

		<p>Weight (in kg)</p>

		<input type="text" id="weight">

		<button id="btn">Calculate</button>

		<div id="result"></div>
	</div>
</body>

</html>
