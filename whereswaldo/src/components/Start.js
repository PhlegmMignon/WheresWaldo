import React from "react";
import { Link } from "react-router-dom";

export default function Start(props) {
  const handleClick = () => {
    props.setGameOngoing(true);
    props.setStartTime(Date.now());
  };

  // const updateTimer = async () => {
  //   props.setMs(Date.now() - startTime);

  //   console.log(props.luffyFound);

  //   // if (
  //   //   props.luffyFound == true &&
  //   //   props.konFound == true &&
  //   //   props.zimFound == true
  //   // ) {
  //   //   endTimer();
  //   // }
  // };

  // const startTimer = () => {
  //   startTime = Date.now();
  //   interval = setInterval(updateTimer, 1000);
  // };

  // const endTimer = () => {
  //   console.log("end");
  //   clearInterval(interval);
  // };

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
