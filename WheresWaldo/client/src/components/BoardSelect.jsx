import { useEffect } from "react";

export default function BoardSelect({
  images,
  selectedImgSrc,
  setGameImage,
  setInitialFound,
  setStartTime,
}) {
  useEffect(() => {
    console.log(images);
  }, [images]);

  return (
    <div id="stageSelect">
      {images.map((image) => {
        return (
          <div
            key={image.id}
            className="imageSelect"
            onClick={() => setGameImage(image)}
          >
            <img src={image.src} alt="Picture of stage" />
          </div>
        );
      })}
    </div>
  );
}
