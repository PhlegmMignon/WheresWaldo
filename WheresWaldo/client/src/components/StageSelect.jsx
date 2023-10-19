// import { useEffect } from "react";

export default function StageSelect({
  images,
  setGameImage,
  setGameState,
  setInitialFound,
  setStartTime,
}) {
  const startGame = () => {
    setGameState("inProgress");
    setInitialFound();
    setStartTime(Date.now());
  };

  return (
    <div className="flex flex-col justify-center p-12  ">
      {images.map((image) => {
        return (
          <div
            key={image.id}
            className="flex flex-col items-center text-xl max-w-2xl flex-grow min-h-full"
            onClick={() => setGameImage(image)}
          >
            <img src={image.src} alt="Picture of stage" />
            <div>Convention</div>
          </div>
        );
      })}
      <button onClick={startGame}>Start</button>
    </div>
  );
}
