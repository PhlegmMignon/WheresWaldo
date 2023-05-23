import React, { useEffect } from "react";

export default function CharVerify(
  name,
  position,
  setLuffyFound,
  setKonFound,
  setZimFound,
  luffyFound,
  konFound,
  zimFound
) {
  if (name == "Luffy") {
    if (781 < position[0] && position[0] < 837) {
      if (1429 < position[1] && position[1] < 1531) {
        console.log("found Luffy");
        setLuffyFound(true);
      }
    }
  } else if (name == "Kon") {
    if (1212 < position[0] && position[0] < 1289) {
      if (1335 < position[1] && position[1] < 1460) {
        console.log("found Kon");

        setKonFound(true);
      }
    }
  } else {
    if (1598 < position[0] && position[0] < 1643) {
      if (332 < position[1] && position[1] < 400) {
        console.log("found Zim");

        setZimFound(true);
      }
    }
  }

  return <></>;
}

//Zim 1598 < x < 1643        332 < y < 400
//Kon  1212 < x < 1289    1335< y < 1460
//Luffy   781 < x < 837    1429< y < 1531
