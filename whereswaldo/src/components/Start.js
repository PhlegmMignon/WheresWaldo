import React, { useState } from "react";

export default function Start() {
  const [startTime, setStartTime] = useState(0);
  const [ms, setMs] = useState("");
  const [timer, setTimer] = useState(0);

  const updateTimer = () => {
    setMs(Date.now() - startTime);
    // console.log(ms);
  };

  const startTimer = () => {
    setStartTime(Date.now());

    let interval = setInterval(updateTimer, 1000);
  };

  const endTimer = () => {};

  return (
    <div id="start">
      <button onClick={startTimer} id="startBtn">
        Start
      </button>
    </div>
  );
}
