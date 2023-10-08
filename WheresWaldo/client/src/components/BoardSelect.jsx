// import { useEffect } from "react";

export default function StageSelect({
  images,
  // selectedImgSrc,

  setGameImage,
  setGameState,
  setInitialFound,
  setStartTime,
}) {
  // useEffect(() => {
  //   console.log(images);
  // }, [images]);

  //Might need proptypes or something to fix map error

  const startGame = () => {
    setGameState("inProgress");
    setInitialFound();
    setStartTime(Date.now());
  };

  return (
    <div className="flex p-12 flex-grow justify-center ">
      {images.map((image) => {
        return (
          <div
            key={image.id}
            className="flex flex-col items-center text-xl max-w-2xl flex-grow"
            onClick={() => setGameImage(image)}
          >
            <img src={image.src} alt="Picture of stage" />
            <div>Convention</div>
          </div>
        );
      })}
      <button onClick={startGame()}>Start</button>
    </div>
  );
}
