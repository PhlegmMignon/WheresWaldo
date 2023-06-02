import React, { useEffect } from "react";
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
  };

  useEffect(() => {
    if (!props.gameOngoing) {
      // checkIsHighscore();
      // loadMessages();
      // signIn();
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
      <div id="modalText" style={MODAL_TEXT_STYLE}>
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
