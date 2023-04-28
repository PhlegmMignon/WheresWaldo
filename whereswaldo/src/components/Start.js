import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Start(props) {
  const [startTime, setStartTime] = useState(0);
  const [ms, setMs] = useState("");
  const [timer, setTimer] = useState(0);

  let interval;

  const handleClick = () => {
    startTimer();
  };

  const updateTimer = () => {
    setMs(Date.now() - startTime);
    console.log(ms);
  };

  const startTimer = () => {
    props.setGameStart(true);
    setStartTime(Date.now());

    interval = setInterval(updateTimer, 1000);
  };

  const endTimer = () => {
    clearInterval(interval);
  };

  return (
    <div id="start">
      <Link to="/image">
        <button onClick={handleClick} id="startBtn">
          Start
        </button>
      </Link>
    </div>
  );
}

//Function that calls end timer will be passed down thru props
