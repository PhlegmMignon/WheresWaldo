import { useEffect } from "react";
// import Leaderboard from "./Leaderboard.jsx";

export default function PostGame({ time, gameImage, setGameState }) {
  // useEffect(() => {
  //   console.log(time);
  // }, [time]);

  return (
    <div id="imageContainer">
      <img id="image" src={gameImage.src} alt="picture of convention" />
      {/* <Leaderboard /> */}
    </div>
  );
}
