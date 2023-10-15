import { useEffect } from "react";

export default function Dropdown({ gameImage, setFoundStatus, coordinate }) {
  return (
    <div
      id="dropdown"
      className="absolute"
      style={{ left: coordinate[0] + "px", top: coordinate[1] - 110 + "px" }}
    >
      <li className="list-none">
        {gameImage.characters.map((char) => {
          return (
            <ul key={char.id}>
              <img className="h-16" src={char.src} alt="" />
            </ul>
          );
        })}
      </li>
    </div>
  );
}
