import { useEffect } from "react";

export default function Dropdown({ gameImage, setFoundStatus, coordinate }) {
  return (
    <div
      id="dropdown"
      className="absolute"
      style={{ left: coordinate[0] + "px", top: coordinate[1] - 120 + "px" }}
    >
      <li className="list-none">
        {gameImage.characters.map((char) => {
          return <ul key={char.id}>{char.name}</ul>;
        })}
      </li>
    </div>

    // return (
    //   <div
    //     id="dropdown"
    //     className="absolute"
    //   >
    //     ASDASD
    //     {/* {dropdown ? <div >asd</div> : ""} */}
    //   </div>
  );
}
