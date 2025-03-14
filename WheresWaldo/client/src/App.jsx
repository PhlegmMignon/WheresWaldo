import { useState } from "react";
import Header from "./components/Header";
import StageSelect from "./components/StageSelect";
import DuringGame from "./components/DuringGame";
import PostGame from "./components/PostGame";
import BoardImages from "./BoardImages.jsx";

export default function App() {
  const gameImages = BoardImages().getImages();

  const [gameState, setGameState] = useState("start");
  const [gameImage, setGameImage] = useState(gameImages[0]);
  const [found, setFound] = useState([false]);
  const [modalFound, setModalFound] = useState(false);

  const setInitialFound = () => {
    let foundStatuses = [];
    gameImage.characters.forEach(() => {
      foundStatuses.push(false);
    });
    setFound(foundStatuses);
  };

  const setFoundStatus = async (map, charName, coordinate, id) => {
    const details = { map, charName, coordinate, id };

    fetch("http://localhost:3100/", {
      method: "POST",
      mode: "cors",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "http://localhost:5173",
      },
      body: JSON.stringify(details),
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        if (!res.found) {
          setModalFound(res.found);
        } else {
          let tempFound = found;
          tempFound[res.charPosition] = res.found;
          setFound(tempFound);
          setModalFound(res.found);
          checkWin(found);
        }
      });
  };

  const checkWin = (found) => {
    for (let i = 0; i < found.length; i++) {
      if (!found[i]) return;
    }
    setGameState("end");
  };

  const [scores, setScores] = useState("");
  const getScores = (map) => {
    const details = { map };

    fetch("http://localhost:3100/getScores", {
      method: "POST",
      mode: "cors",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "http://localhost:5173",
      },
      body: JSON.stringify(details),
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setScores(res);
        return;
      })
      .catch((err) => console.log("error on score get" + err));
  };

  //May need to change timer later
  const renderGameState = () => {
    switch (gameState) {
      case "start":
        return (
          <StageSelect
            images={gameImages}
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
            setFoundStatus={setFoundStatus}
            updateTimer={updateTimer}
            getScores={getScores}
            modalFound={modalFound}
          />
        );
      case "end":
        return (
          <PostGame
            time={time}
            gameImage={gameImage}
            setGameState={setGameState}
            scores={scores}
            getScores={getScores}
          />
        );
    }
  };

  //Timer states
  const [startTime, setStartTime] = useState(0);
  const [time, setTime] = useState({ minutes: 0, seconds: 0 });

  const updateTimer = () => {
    let currentTime = Math.round((Date.now() - startTime) / 1000);
    let seconds = currentTime % 60;
    let minutes = Math.trunc(currentTime / 60);
    setTime({ minutes, seconds });
  };

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
