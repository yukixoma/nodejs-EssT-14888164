const waitTime = 3000;
console.log(`Setting a ${waitTime / 1000} second delay`);

const waitInterval = 500;
let currentTime = 0;

const interval = setInterval(() => {
  currentTime += waitInterval;
  console.log(`Waiting ${currentTime / 1000} seconds`);
}, waitInterval);

const timerFinished = () => {
  clearInterval(interval);
  console.log(`Done after ${waitTime / 1000} seconds`);
};

setTimeout(timerFinished, waitTime);
