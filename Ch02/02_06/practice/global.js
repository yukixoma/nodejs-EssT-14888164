const waitTime = 3000;
console.log(`Set delay time to ${waitTime / 1000} seconds.`);
setTimeout(() => {
  console.log("Time out!");
}, waitTime);
