import { useEffect, useState } from "react";
import Leaderboard from "./Leaderboard.jsx";
import ScorePrompt from "./ScorePrompt.jsx";

export default function PostGame({
  time,
  gameImage,
  setGameState,
  scores,
  setScores,
  getScores,
}) {
  const [isHighscore, setIsHighscore] = useState(false);

  useEffect(() => {
    detectHighScore(time, scores);
  }, []);

  function detectHighScore(time, scores) {
    let position;
    let seconds = time.minutes * 60 + time.seconds;
    // console.log("scores", scores);

    if (scores.length < 5) {
      position = scores.length;
    } else {
      for (let i = 0; i < scores.length; i++) {
        if (seconds < scores[i].score) {
          position = i;
          break;
        }
      }
    }
    // console.log(position);
    if (position != undefined) {
      // let tempArr = scores;
      // tempArr.splice(position, 0, time);
      // tempArr = tempArr.slice(0, 6);
      // console.log(tempArr);
      // setScores(tempArr);
      setIsHighscore(true);
    }
  }

  return (
    <div id="imageContainer">
      <img id="image" src={gameImage.src} alt="picture of convention" />
      {isHighscore ? (
        <ScorePrompt
          setIsHighscore={setIsHighscore}
          time={time}
          gameImage={gameImage}
          getScores={getScores}
        />
      ) : (
        <Leaderboard scores={scores} setGameState={setGameState} />
      )}
    </div>
  );
}

//Handle incorrect char select
//Start new game

//Questions:
//What would be a better way to handle detectHighscore and getScores?
