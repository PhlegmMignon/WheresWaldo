import { useEffect, useState } from "react";
import Leaderboard from "./Leaderboard.jsx";
import ScorePrompt from "./ScorePrompt.jsx";

export default function PostGame({
  time,
  gameImage,
  setGameState,
  scores,
  getScores,
}) {
  const [isHighscore, setIsHighscore] = useState(false);

  useEffect(() => {
    detectHighScore(time, scores);
  }, []);

  function detectHighScore(time, scores) {
    let position;
    let seconds = time.minutes * 60 + time.seconds;

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
    if (position != undefined) {
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

//Questions:
//What would be a better way to handle detectHighscore and getScores?
