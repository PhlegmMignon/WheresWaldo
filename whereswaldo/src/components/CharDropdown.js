import React from "react";
import CharVerify from "../CharVerify";

export default function CharDropdown(props) {
  const handleClick = (name) => {
    CharVerify(
      name,
      props.position,
      props.setLuffyFound,
      props.setKonFound,
      props.setZimFound
    );
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
        >
          Luffy
        </li>
        <li
          onClick={() => handleClick("Kon")}
          className="charDrop"
          id="konDrop"
        >
          Kon
        </li>
        <li
          onClick={() => handleClick("Zim")}
          className="charDrop"
          id="zimDrop"
        >
          Zim
        </li>
      </ul>
    );
}
