import { useState, useEffect } from "react";
// import Header from "./components/Header";
import Header from "./components/Header";
import StageSelect from "./components/StageSelect";
import DuringGame from "./components/DuringGame";
import PostGame from "./components/PostGame";
import BoardImages from "./BoardImages.jsx";

// import Dropdown from "./components/Dropdown";

export default function App() {
  //DB setup

  const gameImages = BoardImages().getImages();

  // useEffect(() => {
  //   console.log(gameImages);
  // }, [gameImages]);

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
          <StageSelect
            images={gameImages}
            // selectedImgSrc={gameImage.src}
            setGameImage={setGameImage}
            setGameState={setGameState}
            setInitialFound={setInitialFound}
            setStartTime={setStartTime}
          />
        );
      case "inProgress":
        return (
          <DuringGame
            gameImage={gameImage}
            found={found}
            setFoundStatus={setFound}
            setGameState={setGameState}
            updateTimer={updateTimer}
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
  const [time, setTime] = useState({ minutes: 0, seconds: 0 });

  const updateTimer = () => {
    let currentTime = Math.round((Date.now() - startTime) / 1000);
    let seconds = currentTime % 60;
    let minutes = Math.trunc(currentTime / 60);
    setTime({ minutes, seconds });
  };

  // //Dropdown states
  // const [dropdownOpen, setDropdownOpen] = useState(false);
  // const [position, setPosition] = useState([0, 0]);

  return (
    <>
      <div className="flex flex-col flex-grow ">
        <Header
          gameState={gameState}
          characters={gameImage.characters}
          found={found}
          time={time}
        ></Header>
        {renderGameState()}
      </div>
    </>
  );
}

//Character states

//Timer states
