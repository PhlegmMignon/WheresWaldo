import React from "react";
import { Link } from "react-router-dom";

export default function Start(props) {
  const handleClick = () => {
    props.setGameOngoing(true);
    props.setStartTime(Date.now());
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
