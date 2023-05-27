import React, { useState, useEffect } from "react";
import mainImg from "../images/nMpQXwq.jpg";
import CharDropdown from "./CharDropdown";
import { timerFactory, makeTimer } from "../timerControl";

export default function Main(props) {
  // useEffect(() => {
  //   // props.setTimerObj(timerFactory());

  //   let tempTimer = props.timerObj;
  //   console.log(tempTimer);
  //   // let tempTimer = timerFactory();
  //   // tempTimer.startTime = Date.now();
  //   // let timerInterval = tempTimer.updateTimer(props.setMs);
  //   // tempTimer.timerInterval = timerInterval;
  // }, [props.gameStart]);

  useEffect(() => {
    if (
      props.luffyFound == true &&
      props.konFound == true &&
      props.zimFound == true
    ) {
      props.setGameOngoing(false);

      // clearInterval(props.timerObj.timerInterval);
    }
  }, [props.luffyFound, props.konFound, props.zimFound]);

  const [isListening, setIsListening] = useState(false);

  //Removes event listeners
  // useEffect(() => {
  //   return () => {
  //     if (ele) {
  //       const newEle = ele.cloneNode(true);
  //       ele.parentNode.replaceChild(newEle, ele);
  //       console.log("hi");
  //     }
  //   };
  // }, []);

  let ele;
  const handleListener = (e) => {
    let x = e.pageX;
    let y = e.clientY + window.pageYOffset;

    // console.log(e.clientY);
    // console.log(window.pageYOffset);
    // console.log("main" + x, y);
    //pageYOffset, screenY, scrollY,

    props.setPosition([x, y]);
  };

  const handleClick = (e) => {
    if (!isListening) {
      ele = document.getElementById("mainImg");
      ele.addEventListener("click", handleListener(e));

      // setIsListening(true);
    }

    props.dropdownOpen
      ? props.setDropdownOpen(false)
      : props.setDropdownOpen(true);
  };

  //Handle timer states

  return (
    <div id="main">
      {/* <img src={mainImg} id="mainImg" alt="Where's waldo board" /> */}
      <div onClick={handleClick} id="mainImg" data-testid="mainImg">
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

//WIP props for dropdown to work
