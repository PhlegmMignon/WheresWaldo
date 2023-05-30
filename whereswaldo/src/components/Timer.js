import React, { useState, useEffect } from "react";

export default function Timer(props) {
  const updateTimer = () => {
    props.setMs(Date.now() - props.startTime);
  };

  const endTimer = (interval) => {
    if (interval) clearInterval(interval);
  };

  useEffect(() => {
    let interval;
    if (props.gameOngoing) {
      interval = setInterval(updateTimer, 1000);
    } else {
      endTimer(interval);
    }

    return () => endTimer(interval);
  }, [props.gameOngoing, props.ms]);

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
