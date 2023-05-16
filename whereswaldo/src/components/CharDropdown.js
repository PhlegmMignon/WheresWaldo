import React from "react";

export default function CharDropdown(props) {
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
        <li className="charDrop" id="luffyDrop">
          Luffy
        </li>
        <li className="charDrop" id="konDrop">
          Kon
        </li>
        <li className="charDrop" id="zimDrop">
          Zim
        </li>
      </ul>
    );
}
