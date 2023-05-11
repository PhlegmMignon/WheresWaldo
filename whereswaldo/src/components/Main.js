import React, { useState, useEffect } from "react";
import mainImg from "../images/nMpQXwq.jpg";
import CharDropdown from "./CharDropdown";

export default function Main(props) {
  const handleClick = () => {
    props.dropdownOpen
      ? props.setDropdownOpen(false)
      : props.setDropdownOpen(true);
  };

  return (
    <div id="main">
      {/* <img src={mainImg} id="mainImg" alt="Where's waldo board" /> */}
      <div onClick={handleClick} id="mainImg">
        <CharDropdown dropdownOpen={props.dropdownOpen} />
      </div>
    </div>
  );
}

//WIP props for dropdown to work
