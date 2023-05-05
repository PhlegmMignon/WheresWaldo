import React from "react";
import luffy from "../images/luffy.png";
import zim from "../images/Zim.yelling.svg";
import kon from "../images/kon.webp";

export default function Header(props) {
  return (
    <div id="header">
      <div id="container">
        <img src={luffy} id="luffy"></img>
        <img src={kon} id="kon"></img>
        <img src={zim} id="zim"></img>
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
