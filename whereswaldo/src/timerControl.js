const startTimer = (setMs, startTime, updateTimer) => {
  let interval = setInterval(updateTimer(setMs, startTime), 1000);
  return interval;
};

const updateTimer = async (setMs, startTime) => {
  setMs(Date.now() - startTime);
};

const endTimer = (interval) => {
  clearInterval(interval);
};

export { startTimer, updateTimer, endTimer };

//Cuz you're calling it twice the interval is still active
//Maybe make a state of it so you can remove it
