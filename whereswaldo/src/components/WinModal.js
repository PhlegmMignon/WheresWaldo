import React, { useState, useEffect } from "react";
import { submitScore } from "../utils/scoreHandler.js";
import Leaderboard from "./Leaderboard.js";

export default function WinModal(props) {
  const MODAL_STYLE = {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    height: "100%",
    width: "100%",
    zIndex: 100,
    borderRadius: "8px",
  };

  const MODAL_TEXT_STYLE = {
    position: "relative",
    width: "11%",
    top: "50%",
    left: "50%",
    fontSize: "1.5rem",
    padding: "50px",
    backgroundColor: "#d3d3d3",
    zIndex: 200,
  };

  const [input, setInput] = useState();
  const [update, setUpdate] = useState(false);

  useEffect(() => {}, [update]);

  if (
    props.scoreList[props.scoreList.length - 1].score > props.ms ||
    update == true
  ) {
    return (
      <div
        id="modalContainer"
        data-testid="modalContainer"
        onClick={() => props.setShowModal(false)}
        style={MODAL_STYLE}
      >
        <div
          id="modal"
          style={MODAL_TEXT_STYLE}
          onClick={(e) => e.stopPropagation()}
        >
          <p>You found everyone!</p>
          <Leaderboard scoreList={props.scoreList} />
        </div>
      </div>
    );
  } else {
    return (
      <div
        id="modalContainer"
        data-testid="modalContainer"
        onClick={() => props.setShowModal(false)}
        style={MODAL_STYLE}
      >
        <div
          id="modal"
          style={MODAL_TEXT_STYLE}
          onClick={(e) => e.stopPropagation()}
        >
          <p>New highscore! Enter your name below to register your score.</p>
          <form action="">
            <input
              id="input"
              type="text"
              maxLength="3"
              onChange={(e) => setInput(e.target.value)}
            />
          </form>
          <button
            id="submitBtn"
            onClick={() => {
              submitScore(input, props.ms);
              setUpdate(true);
            }}
          >
            Submit
          </button>
          <button id="skipBtn" onClick={() => setUpdate(true)}>
            Skip
          </button>
        </div>
      </div>
    );
  }
}
