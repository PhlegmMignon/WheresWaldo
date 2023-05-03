import React, { useEffect } from "react";

export default function Timer(props) {
  useEffect(() => {}, [props.ms]);

  let time;

  if (Math.round(props.ms / 1000) < 60) {
    return (
      <div data-testid="testTimer1" id="timer1">
        {Math.round(props.ms / 1000)}s
      </div>
    );
  } else {
    let mins = Math.trunc(Math.round(props.ms / 1000) / 60);
    let secs = Math.round(props.ms / 1000) % 60;
    return (
      <div id="timer2">
        {mins}mins {secs}secs
      </div>
    );
  }
}
