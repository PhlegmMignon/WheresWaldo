const timerFactory = () => {
  let startTime;
  let interval;

  const startTimer = (setMs) => {
    interval = setInterval(updateTimer(setMs), 1000);
  };

  const updateTimer = async (setMs) => {
    setMs(Date.now() - startTime);
  };

  const endTimer = (interval) => {
    clearInterval(interval);
  };

  return { startTimer, updateTimer, endTimer, interval, startTime };
};

function makeTimer(setMs) {
  let timer = timerFactory();
  // timer.startTime = Date.now();
  // timer.startTimer(setMs);

  return timer;
}

export { timerFactory, makeTimer };

//Cuz you're calling it twice the interval is still active
//Maybe make a state of it so you can remove it
