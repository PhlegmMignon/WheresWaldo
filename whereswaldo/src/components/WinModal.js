import React, { useState, useEffect } from "react";
import { loadMessages, signIn } from "../firebaseOrders.js";
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

  // console.log(props.scoreList[props.scoreList.length - 1].score);

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
  // return (
  //   <div
  //     id="winModal"
  //     data-testid="winModal"
  //     onClick={onClick}
  //     style={MODAL_STYLE}
  //   >
  //     <div
  //       id="modalText"
  //       onClick={(e) => e.stopPropagation()}
  //       style={MODAL_TEXT_STYLE}
  //     >
  //       You found everyone!
  //     </div>
  //   </div>
  // );
}

//Add handlers for submit/skip btns for after highscore name is entered.
//It will automatically upload score to firebase

//If no ms, show leaderboard

//Leaderboard
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

//You can write to storage?
//You can pull from storage?
