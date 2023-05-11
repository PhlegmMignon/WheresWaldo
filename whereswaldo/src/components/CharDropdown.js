import React from "react";

export default function CharDropdown(props) {
  if (props.dropdownOpen == true)
    return (
      <div id="charDropdown" data-testid="charDropdown">
        <div className="charDrop" id="luffyDrop">
          Luffy
        </div>
        <div className="charDrop" id="konDrop">
          Kon
        </div>
        <div className="charDrop" id="zimDrop">
          Zim
        </div>
      </div>
    );
}
