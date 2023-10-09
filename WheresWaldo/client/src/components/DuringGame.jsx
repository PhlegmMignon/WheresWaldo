import { useEffect } from "react";

export default function DuringGame({
  gameImage,
  found,
  setFoundStatus,
  setGameState,
  setTime,
  startTime,
}) {
  useEffect(() => {
    console.log(gameImage);

    let mouseDown = false;
    let startX, scrollLeft;
    const slider = document.getElementById("imageContainer");

    //Makes image draggable

    const move = (e) => {
      e.preventDefault();
      if (!mouseDown) return;
      // console.log("move");
      console.log(e.pageX);
      const x = e.pageX - slider.offsetLeft;
      const scroll = x - startX;
      slider.scrollLeft = scrollLeft - scroll;

      console.log(scroll);
    };

    const startDragging = (e) => {
      // console.log("dragging");

      mouseDown = true;
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    };

    const stopDragging = () => {
      // console.log("stopDrag");

      mouseDown = false;
    };

    slider.addEventListener("mousemove", move, false);
    slider.addEventListener("mousedown", startDragging, false);
    slider.addEventListener("mouseup", stopDragging, false);
    slider.addEventListener("mouseleave", stopDragging, false);

    console.log(slider);

    return () => {
      let newSlider = slider.cloneNode(true);
      slider.parentNode.replaceChild(newSlider, slider);
    };
  }, [gameImage]);

  return (
    <div id="imageContainer" draggable="true" className="">
      <img
        id="image"
        src={gameImage.src}
        draggable="true"
        alt=""
        className="overflow-hidden"
      />
    </div>
  );
}
