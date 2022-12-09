// let bmi = document.querySelector('#results');
// const btn = document.querySelector('.btn')
// btn.addEventListener('click', calculateBMI)


// function calculateBMI (weight, height){
//     let weight = document.querySelector('#weight').value
//     let height = document.querySelector('#height').value
//     console.log((weight) / (height * height) *10000);


// };



// calculateBMI(168, 55);

// if (height === '' || isNaN(height))
// bmi.innerHTML = 

// const button = document.querySelector(".btn");
// button.addEventListener('click', myFunction);
// function myFunction(){
//     let kg = document.querySelector('#weight').value;
//     let cm = document.querySelector('#height').value;
//     let bmi = kg / ((cm /100) ** 2);
//     document.querySelector('#results').innerText = bmi.toFixed[1];
//     console.log(bmi);
// };
    

const button = document.querySelector(".btn");
button.addEventListener('click', myFunction);
function myFunction(){
    let kg = document.querySelector('#weight').value;
    let cm = document.querySelector('#height').value;
    let bmi = kg / ((cm / 100) ** 2);
    if (kg < 0) {
        document.querySelector('#results').innerText = "negative value";
    } else if (cm < 0){
        document.querySelector('#results').innerText = "negative value";
    } else if (cm == 0) {
        document.querySelector('#results').innerText = "Please enter values";
    }
     else if (kg == 0) {
        document.querySelector('#results').innerText = "Please enter values";
    }
    
    else {
    document.querySelector('#results').innerText = bmi.toFixed(1);
    };
    console.log(bmi);
};