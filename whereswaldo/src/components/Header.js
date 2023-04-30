import React from "react";

export default function Header(props) {
  return (
    <div id="header">
      <div id="container">
        <div id="char1Box"></div>
        <div id="char2Box"></div>
        <div id="char3Box"></div>
      </div>
      <div id="found?">
        <div id="found1"></div>
        <div id="found2"></div>
        <div id="found3"></div>
      </div>
      {props.timer}
    </div>
  );
}
