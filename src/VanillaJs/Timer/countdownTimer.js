const counter = document.getElementById("count");
const start = document.getElementById("start");
const stop = document.getElementById("stop");
const reset = document.getElementById("reset");
let running;

function getCountValue() {
  return document.getElementById("count").innerHTML;
}

let interval;

const startCounter = () => {
  if (running) return;
  interval = setInterval(() => {
    counter.innerHTML = 1 + Number(getCountValue());
  }, 1000);
  running = true;
};

const stopCounter = () => {
  running = false;
  if (interval) {
    clearInterval(interval);
  } else {
    return;
  }
};
const resetCounter = () => {
  running = false;
  if (interval) {
    clearInterval(interval);
  }
  counter.innerHTML = 0;
  return;
};

start.addEventListener("click", () => startCounter());
stop.addEventListener("click", () => stopCounter());
reset.addEventListener("click", () => resetCounter());
