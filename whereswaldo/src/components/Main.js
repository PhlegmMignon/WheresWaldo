import React, { useState, useEffect } from "react";
import mainImg from "../images/nMpQXwq.jpg";
import CharDropdown from "./CharDropdown";

export default function Main(props) {
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
    console.log("main" + x, y);
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
          />
        }
      </div>
    </div>
  );
}

//WIP props for dropdown to work
