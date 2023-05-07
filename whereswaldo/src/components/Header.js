import React from "react";
import luffy from "../images/luffy.png";
import zim from "../images/Zim.yelling.svg";
import kon from "../images/kon.webp";

export default function Header(props) {
  return (
    <div id="header">
      <div id="container">
        <div id="luffyBox" className="charBox">
          <img src={luffy} id="luffy" alt="Luffy"></img>
          <div>Luffy</div>
        </div>
        <div id="konBox" className="charBox">
          <img src={kon} id="kon" alt="Kon"></img>
          <div>Kon</div>
        </div>
        <div id="zimBox" className="charBox">
          <img src={zim} id="zim" alt="Zim"></img>
          <div>Zim</div>
        </div>
      </div>
      {/* <div id="found?">
        <div id="found1"></div>
        <div id="found2"></div>
        <div id="found3"></div>
      </div> */}
      {props.timer}
    </div>
  );
}
