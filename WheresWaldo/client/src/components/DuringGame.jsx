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
    let startX, scrollLeft, startY, scrollTop;
    const slider = document.getElementById("imageContainer");

    //Makes image draggable

    const move = (e) => {
      e.preventDefault();
      if (!mouseDown) return;
      // console.log("move");
      // console.log(e.pageX);
      const x = e.pageX - slider.offsetLeft;
      const scroll = x - startX;
      slider.scrollLeft = scrollLeft - scroll;

      const y = e.pageY - slider.offsetTop;
      const Yscroll = y - startY;
      slider.scrollTop = scrollTop - Yscroll;

      // window.scrollBy(scroll);
    };

    const startDragging = (e) => {
      console.log("dragging");
      // console.log("scrollX" + window.scrollX);

      mouseDown = true;

      //X-axis
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;

      //Y-axis
      startY = e.pageY - slider.offsetTop;
      scrollTop = slider.scrollTop;
      // console.log(slider);
      // window.scrollBy(window.scrollX + scrollLeft);
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
    <div id="imageContainer" className="">
      <img id="image" src={gameImage.src} alt="" className="" />
    </div>
  );
}
