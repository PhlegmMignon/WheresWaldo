import React, { useState, useEffect } from "react";
import luffy from "../images/luffy.png";
import zim from "../images/Zim.yelling.svg";
import kon from "../images/kon.webp";

export default function Header(props) {
  const [luffyStyle, setLuffyStyle] = useState("none");
  const [konStyle, setKonStyle] = useState("none");
  const [zimStyle, setZimStyle] = useState("none");

  useEffect(() => {
    if (props.luffyFound) {
      setLuffyStyle("line-through");
    }
    if (props.konFound) {
      setKonStyle("line-through");
    }
    if (props.zimFound) {
      setZimStyle("line-through");
    }
  }, [props.luffyFound, props.konFound, props.zimFound]);

  return (
    <div id="header">
      <div id="container">
        <div id="luffyBox" className="charBox">
          <img src={luffy} id="luffy" alt="Luffy"></img>

          <div style={{ textDecoration: luffyStyle }}>Luffy</div>
        </div>
        <div id="konBox" className="charBox">
          <img src={kon} id="kon" alt="Kon"></img>
          <div style={{ textDecoration: konStyle }}>Kon</div>
        </div>
        <div id="zimBox" className="charBox">
          <img src={zim} id="zim" alt="Zim"></img>
          <div style={{ textDecoration: zimStyle }}>Zim</div>
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
