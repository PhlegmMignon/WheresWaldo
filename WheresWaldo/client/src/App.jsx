import { useState, useEffect } from "react";
import Header from "./components/Header";
import Timer from "./components/Timer";
import Gameboard from "./components/Gameboard";
import BoardSelect from "./components/BoardSelect";
import DuringGame from "./components/DuringGame";
import PostGame from "./components/PostGame";
import BoardImages from "./BoardImages.jsx";

export default function App() {
  //DB setup

  const gameImages = BoardImages().getImages();

  useEffect(() => {
    console.log(gameImages);
  }, [gameImages]);

  const [gameState, setGameState] = useState("start");
  const [gameImage, setGameImage] = useState(gameImages[0]);
  const [found, setFound] = useState([false]);

  const setInitialFound = () => {
    let foundStatuses = [];
    gameImage.characters.forEach(() => {
      foundStatuses.push(false);
    });
    setFound(foundStatuses);
  };

  // const setFoundStatus = async (charId, clickPosition) => {
  //   if (charId < 0 || charId > found.length - 1) return false;
  //   // const valid = db.validatePosition(gameImage.id, charId, clickPos);
  //   if (!valid) {
  //     shakeGamePanel();
  //     return false;
  //   } else {
  //     let newFound = found.slice();
  //     newFound[charId] = true;
  //     setFound(newFound);
  //     checkGameWon();
  //     return true;
  //   }
  // };

  //May need to change timer later
  const renderGameState = () => {
    switch (gameState) {
      case "start":
        return (
          <BoardSelect
            images={gameImages}
            selectedImgSrc={gameImage.src}
            setGameImage={setGameImage}
            setInitialFound={setInitialFound}
            setStartTime={setStartTime}
          />
        );
      case "inProgress":
        return (
          <DuringGame
            gameImage={gameImage}
            found={found}
            // setFoundStatus={setFoundStatus}
          />
        );
      case "end":
        return <PostGame />;
    }
  };

  const toggleGameState = () => {
    switch (gameState) {
      case "start":
        setGameState("inProgress");
        break;
      case "inProgress":
        setGameState("end");
        break;
      case "end":
        setGameState("start");
    }
  };

  //Name for highscore prompt
  // const [name, setName] = useState("test");

  // //Timer states
  // const [ms, setMs] = useState("");
  const [startTime, setStartTime] = useState(0);

  // //Dropdown states
  // const [dropdownOpen, setDropdownOpen] = useState(false);
  // const [position, setPosition] = useState([0, 0]);

  return (
    <>
      <div className="App">
        <Gameboard
          gameState={gameState}
          characters={gameImage.characters}
          found={found}
        ></Gameboard>
        {renderGameState()}
      </div>
    </>
  );
}

//Character states

//Timer states
