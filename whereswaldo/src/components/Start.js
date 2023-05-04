import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Start(props) {
  useEffect(() => {
    if (props.numFound == 3) endTimer();
  }, [props.numFound]);

  const [timer, setTimer] = useState(0);

  let startTime;
  let interval;

  const handleClick = () => {
    startTimer();
  };

  const updateTimer = async () => {
    console.log("update");
    props.setMs(Date.now() - startTime);
  };

  const startTimer = () => {
    props.setGameStart(true);
    startTime = Date.now();
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
