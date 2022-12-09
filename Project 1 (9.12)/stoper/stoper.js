const startBtn = document.querySelector("#button-start");
const stopBtn = document.querySelector("#button-stop");
const resetBtn = document.querySelector("#button-reset");
const secondsBtn = document.querySelector("#seconds");
const tensBtn = document.querySelector("#tens");
function Stoper() {
  let tens = 0;
  let seconds = 0;
  let interval;
  let start = () => {
    tens = tens + 1;
    tensBtn.innerHTML = "0" + tens;
    if (tens == 9) {
      tens = -1;
    }
    seconds = seconds + 1;
  };
  setInterval(start, 1000);
}
// Stoper();
startBtn.addEventListener("click", Stoper);
// stopBtn.addEventListener("click");
// resetBtn.addEventListener("click");
