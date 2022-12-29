const buttonstart = document.getElementById("button-start");
const buttonstop = document.getElementById("button-stop");
const buttonreset = document.getElementById("button-reset");
const AAseconds = document.getElementById("seconds");
const BBtens = document.getElementById("tens");
let seconds = 00;
let tens = 00;
function Stoper() {
  tens++;
  //tens = tens + 1
  if (tens <= 9) {
    BBtens.innerHTML = "0" + tens;
  }
  if (tens > 9) {
    BBtens.innerHTML = tens;
  }
  if (seconds > 9) {
    AAseconds.innerHTML = seconds;
  }
  if (tens > 99) {
    seconds++;
    AAseconds.innerHTML = "0" + seconds;
    tens = 0;
    BBtens.innerHTML = "0" + 0;
  }
}

function RESET() {
  tens = "00";
  seconds = "00";
  BBtens.innerHTML = tens;
  AAseconds.innerHTML = seconds;
}

let interval;
function START() {
  clearInterval(interval);
  interval = setInterval(Stoper, 10);
}

function STOP() {
  clearInterval(interval);
}
