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
    <div className="flex flex-col justify-center items-center">
      <div className="flex p-12 gap-12   ">
        {images.map((image) => {
          return (
            <div
              key={image.id}
              className="flex flex-col items-center text-xl flex-grow "
              onClick={() => setGameImage(image)}
            >
              <img
                src={image.src}
                alt="Picture of stage"
                className="max-w-2xl max-h-72"
              />
              <div className="text-lg">{image.name}</div>
            </div>
          );
        })}
      </div>
      <button className="text-xl " onClick={startGame}>
        Start
      </button>
    </div>
  );
}
