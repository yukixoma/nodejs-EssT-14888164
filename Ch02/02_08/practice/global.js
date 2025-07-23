const waitTime = 3000;
console.log(`Setting a ${waitTime / 1000} second delay`);

const waitInterval = 500;
let currentTime = 0;
const incTime = () => {
  currentTime += waitInterval;
  const percentage = Math.floor((currentTime / waitTime) * 100);
  process.stdout.clearLine();
  process.stdout.cursorTo(0);
  process.stdout.write(`Waiting.....${percentage}`);
};

const interval = setInterval(incTime, waitInterval);

const timerFinished = () => {
  clearInterval(interval);
  process.stdout.clearLine();
  process.stdout.cursorTo(0);
  console.log("Done");
};

setTimeout(timerFinished, waitTime);
