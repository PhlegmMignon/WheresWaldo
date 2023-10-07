// import { useEffect } from "react";

export default function BoardSelect({
  images,
  selectedImgSrc,
  setGameImage,
  setInitialFound,
  setStartTime,
}) {
  // useEffect(() => {
  //   console.log(images);
  // }, [images]);

  //Might need proptypes or something to fix map error

  return (
    <div className="">
      {images.map((image) => {
        return (
          <div
            key={image.id}
            className="max-w-xl"
            onClick={() => setGameImage(image)}
          >
            <img src={image.src} alt="Picture of stage" />
          </div>
        );
      })}
    </div>
  );
}
