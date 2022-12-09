const startBtn = document.querySelector("#button-start");
const stopBtn = document.querySelector("#button-stop");
const resetBtn = document.querySelector("#button-reset");
const secondsBtn = document.querySelector("#seconds");
const tensBtn = document.querySelector("#tens");

function Stoper() {
  let tens = 0;
  let seconds = 0;
  let startCounting;
  let stopCounting;

  let start = () => {
    tens = tens + 1;
    tensBtn.innerHTML = "0" + tens;
    secondsBtn.innerHTML = "0" + seconds;
    if (tens === 9) {
      tens = -1;
      seconds = seconds + 1;
      startBtn.disabled = true;
    }
    if (seconds >= 10) {
      secondsBtn.innerHTML = seconds;
    }
    if (seconds == 60 && tens == 0){
      stop();
    };
 
  };
  startCounting = setInterval(start, 10);


 
 
  let stop = () => {
    clearInterval(startCounting);
    startBtn.disabled = false;
 
  };




  let reset = () => {
    stop();
    tensBtn.innerHTML = "00";
    secondsBtn.innerHTML = "00";
    tens = 0;
    seconds = 0;
    startBtn.disabled = false;
  };
  stopBtn.addEventListener("click", stop);
  resetBtn.addEventListener("click", reset);
  // startBtn.addEventListener("click", start);
}
startBtn.addEventListener("click", Stoper);
