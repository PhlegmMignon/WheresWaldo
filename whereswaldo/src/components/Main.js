import React, { useState, useEffect } from "react";
import mainImg from "../images/nMpQXwq.jpg";
import CharDropdown from "./CharDropdown";
import makeWinModal from "./WinModal";
import { getScores } from "../utils/scoreHandler";

export default function Main(props) {
  useEffect(() => {
    if (
      props.luffyFound == true &&
      props.konFound == true &&
      props.zimFound == true
    ) {
      //Preps scoreList for leaderboard
      let scores = getScores();
      scores.then((res) => {
        res.sort((a, b) => a.score - b.score);
        res.slice(0, 5);
        console.log(res);
        props.setScoreList(res);
      });

      props.setGameOngoing(false);
      props.setShowModal(true);
    }
  }, [props.luffyFound, props.konFound, props.zimFound]);

  const [isListening, setIsListening] = useState(false);

  let ele;
  const handleListener = (e) => {
    let x = e.clientX;
    let y = e.clientY + window.pageYOffset;

    props.setPosition([x, y]);
  };

  const handleClick = (e) => {
    if (!isListening) {
      ele = document.getElementById("mainImg");
      ele.addEventListener("click", handleListener(e));
    }

    props.dropdownOpen
      ? props.setDropdownOpen(false)
      : props.setDropdownOpen(true);
  };

  return (
    <div id="main" data-testid="main">
      <div onClick={handleClick} id="mainImg" data-testid="mainImg">
        {props.showModal ? props.modal : ""}

        {
          <CharDropdown
            position={props.position}
            dropdownOpen={props.dropdownOpen}
            setLuffyFound={props.setLuffyFound}
            setKonFound={props.setKonFound}
            setZimFound={props.setZimFound}
            luffyFound={props.luffyFound}
            konFound={props.konFound}
            zimFound={props.zimFound}
          />
        }
      </div>
    </div>
  );
}
