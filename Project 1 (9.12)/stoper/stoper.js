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

  buttonReset.onclick = function () {
    clearInterval(Interval);
    tens = 0;
    seconds = 0;
    countingTens.innerText = "0" + tens;
    countingSeconds.innerText = "0" + seconds;
  };

  function startTimer() {
    tens++;
    if (tens <= 9) {
      countingTens.innerHTML = "0" + tens;
    }
    if (tens > 9) {
      countingTens.innerHTML = tens;
    }
    if (tens > 99) {
      seconds++;
      countingSeconds.innerHTML = "0" + seconds;
      tens = 0;
      countingTens.innerHTML = "0" + 0;
    }
    if (seconds > 9) {
      countingSeconds.innerHTML + seconds;
    }
  }
}

Stoper();
