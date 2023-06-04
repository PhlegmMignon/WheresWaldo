import React, { useState, useEffect } from "react";
import { loadMessages, signIn } from "../firebaseOrders.js";

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
    width: "10%",
    top: "50%",
    left: "50%",
    fontSize: "1.5rem",
    padding: "50px",
    backgroundColor: "#d3d3d3",
    zIndex: 200,
  };

  const [scoreUpload, setScoreUpload] = useState(null);
  const [scoreList, setScoreList] = useState([]);

  useEffect(() => {
    if (!props.gameOngoing) {
      // getScores()
      //Sort top 5 scores
      let scores, currentScore;
      if (scores[5] < currentScore) {
        return (
          <div
            id="modalContainer"
            data-testid="modalContainer"
            onClick={onClick}
            style={MODAL_STYLE}
          >
            <div id="modal" style={MODAL_TEXT_STYLE}>
              <p>
                New highscore! Enter your name below to register your score.
              </p>
              <form action="">
                <input type="text" maxLength="3" />
              </form>
              <btn id="submitBtn">Submit</btn>
              <btn id="skipBtn" onClick={onClick}>
                Skip
              </btn>
            </div>
          </div>
        );
      } else {
        return (
          <div
            id="modalContainer"
            data-testid="modalContainer"
            onClick={onClick}
            style={MODAL_STYLE}
          >
            <div id="modal" style={MODAL_TEXT_STYLE}>
              <p>You found everyone in x seconds!</p>
            </div>
          </div>
        );
      }
    }
  }, [props.gameOngoing]);

  const onClick = () => {
    let ele = document.getElementById("winModal");
    ele.style.display = "none";
  };

  return (
    <div
      id="winModal"
      data-testid="winModal"
      onClick={onClick}
      style={MODAL_STYLE}
    >
      <div
        id="modalText"
        onClick={(e) => e.stopPropagation()}
        style={MODAL_TEXT_STYLE}
      >
        You found everyone!
      </div>
    </div>
  );
}

//Leaderboard
//Prompt to sign in to register high score
//Code to store high score time in firebase
//Request from firebase

//Check is highscore
//Load top 5 from firebase then verify if

//If highscore
//You scored a new highscore! Show leaderboard of top 5
//Prompt sign in to register your time.
//Yes/no button

//If not highscore, display you cleared in x time, + show leaderboard of top 5

//Get high scores -> check if score is better than last place -> prompt user entry
