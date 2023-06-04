import React, { useEffect } from "react";
import CharVerify from "../utils//CharVerify";

export default function CharDropdown(props) {
  // useEffect(() => {
  //   console.log(props.luffyFound);
  // }, [props.luffyFound]);

  const handleClick = (name) => {
    if (name == "Luffy") {
      if (781 < props.position[0] && props.position[0] < 837) {
        if (1429 < props.position[1] && props.position[1] < 1531) {
          console.log("found Luffy");
          props.setLuffyFound(true);
        }
      }
    } else if (name == "Kon") {
      if (1212 < props.position[0] && props.position[0] < 1289) {
        if (1335 < props.position[1] && props.position[1] < 1460) {
          console.log("found Kon");

          props.setKonFound(true);
        }
      }
    } else {
      if (1598 < props.position[0] && props.position[0] < 1643) {
        if (332 < props.position[1] && props.position[1] < 400) {
          console.log("found Zim");

          props.setZimFound(true);
        }
      }
    }

    // console.log(props.luffyFound);
  };

  if (props.dropdownOpen == true)
    return (
      <ul
        id="charDropdown"
        data-testid="charDropdown"
        style={{
          position: "absolute",
          left: props.position[0] + "px",
          top: props.position[1] + "px",
        }}
      >
        <li
          onClick={() => handleClick("Luffy")}
          className="charDrop"
          id="luffyDrop"
          data-testid="luffyDrop"
        >
          Luffy
        </li>
        <li
          onClick={() => handleClick("Kon")}
          className="charDrop"
          id="konDrop"
          data-testid="konDrop"
        >
          Kon
        </li>
        <li
          onClick={() => handleClick("Zim")}
          className="charDrop"
          id="zimDrop"
          data-testid="zimDrop"
        >
          Zim
        </li>
      </ul>
    );
}
