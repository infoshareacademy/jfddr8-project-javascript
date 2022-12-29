const GUZIK = document.querySelector(".btn");
let WAGA = document.getElementById("weight");
let WZROST = document.getElementById("height");
let WYNIK = document.getElementById("results");

GUZIK.onclick = function () {
  let WAGAWARTOSC = WAGA.value;
  let WZROSTWARTOSC = WZROST.value;

  if (WAGAWARTOSC == 0 || WZROSTWARTOSC == 0) {
    alert("Please enter values");
  } else if (WAGAWARTOSC < 0 || WZROSTWARTOSC < 0) {
    alert("Negative values are not allowed");
  } else {
    let NASZWYNIKBMI = WAGAWARTOSC / Math.pow(WZROSTWARTOSC, 2);
    WYNIK.innerHTML = Number.parseFloat(NASZWYNIKBMI).toFixed(1);
  }
};
