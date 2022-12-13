function Stoper() {
  let seconds = 0;
  let tens = 0;
  let countingTens = document.getElementById("tens");
  let countingSeconds = document.getElementById("seconds");
  let buttonStart = document.getElementById("button-start");
  let buttonStop = document.getElementById("button-stop");
  let buttonReset = document.getElementById("button-reset");
  let Interval;

  buttonStart.onclick = function () {
    clearInterval(Interval); //lub po naciśnięciu ustawiamy go jako disabled
    Interval = setInterval(startTimer, 10);
  };

  buttonStop.onclick = function () {
    clearInterval(Interval);
  };

  function startTimer() {
    tens++;
    if (tens <= 9) {
      countingTens.innerHTML = "0" + tens;
    }
    if (tens > 9) {
      countingTens.innerHTML = tens;
    }
  }
}

Stoper();
