function Stoper() {
  let seconds = 00;
  let tens = 00;
  let countingTens = document.getElementById("tens").innerHTML;
  let countingSeconds = document.getElementById("seconds").innerHTML;
  let buttonStart = document.getElementById("button-start");
  let buttonStop = document.getElementById("button-stop");
  let buttonReset = document.getElementById("button-reset");
  let Interval;

  buttonStart.onclick = function () {
    Interval = setInterval(startTimer, 10);
  };
  function startTimer() {
    tens++;
  }
}

Stoper();
