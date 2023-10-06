import { useState } from "react";
import Header from "./components/Header";
import Timer from "./components/Timer";
import Gameboard from "./components/Gameboard";
import BoardImages from "./BoardImages.jsx";

export default function App() {
  //DB setup

  const gameImages = BoardImages().getImages();

  const [gameState, setGameState] = useState("start");
  const [gameImage, setGameImage] = useState(gameImages[0]);

  //Timer states
  const [ms, setMs] = useState("");
  const [startTime, setStartTime] = useState(0);

  //Dropdown states
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [position, setPosition] = useState([0, 0]);

  return (
    <>
      <div className="App">
        <Gameboard></Gameboard>
      </div>
    </>
  );
}

//Character states

//Timer states
