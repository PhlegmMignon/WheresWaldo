import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Start(props) {
  useEffect(() => {
    console.log(props.luffyFound);
  }, [props.luffyFound]);

  const [timer, setTimer] = useState(0);

  let startTime;
  let interval;

  const handleClick = () => {
    startTimer();
  };

  const updateTimer = async () => {
    props.setMs(Date.now() - startTime);

    console.log(props.luffyFound);

    // if (
    //   props.luffyFound == true &&
    //   props.konFound == true &&
    //   props.zimFound == true
    // ) {
    //   endTimer();
    // }
  };

  const startTimer = () => {
    props.setGameStart(true);
    startTime = Date.now();
    interval = setInterval(updateTimer, 1000);
  };

  const endTimer = () => {
    console.log("end");
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

//Turn startTime into a state and pass it to timer.
//Move updatetimer and endTimer to timer.js
