import { useState, useEffect } from "react";
import Dropdown from "./Dropdown";

export default function DuringGame({
  gameImage,
  found,
  setFoundStatus,
  setGameState,
  updateTimer,
}) {
  const [coordinate, setCoordinate] = useState([0, 0]);
  const [dropdown, toggleDropdown] = useState(false);

  //Dropdown controls
  const handleClick = (e, slider) => {
    // e.preventDefault();
    let x = e.pageX + slider.scrollLeft;
    let y = e.pageY + slider.scrollTop;
    // console.log(x + " " + y);
    setCoordinate([x, y]);
  };

  // const assignPosition = () => {};

  useEffect(() => {
    console.log(gameImage);

    //Makes image draggable
    let isDragged = false;
    let mouseDown = false;
    let startX, scrollLeft, startY, scrollTop;
    const slider = document.getElementById("imageContainer");

    const move = (e) => {
      e.preventDefault();

      if (!mouseDown) return;
      isDragged = true;
      // console.log("move");
      const x = e.pageX - slider.offsetLeft;
      const scroll = x - startX;
      slider.scrollLeft = scrollLeft - scroll;

      const y = e.pageY - slider.offsetTop;
      const Yscroll = y - startY;
      slider.scrollTop = scrollTop - Yscroll;
    };

    const startDragging = (e) => {
      isDragged = false;
      // console.log("dragging");
      mouseDown = true;

      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;

      startY = e.pageY - slider.offsetTop;
      scrollTop = slider.scrollTop;
    };

    const stopDragging = () => {
      // console.log("stopDrag");
      mouseDown = false;
    };

    slider.addEventListener("mousemove", move, false);
    slider.addEventListener("mousedown", startDragging, false);
    slider.addEventListener("mouseup", stopDragging, false);
    slider.addEventListener("mouseleave", stopDragging, false);

    //Dropdown controls
    let ele = document.getElementById("imageContainer");
    ele.addEventListener("mouseup", (e) => {
      handleClick(e);
      dropdown ? toggleDropdown(false) : toggleDropdown(true);
    });

    return () => {
      let newSlider = slider.cloneNode(true);
      slider.parentNode.replaceChild(newSlider, slider);
    };
  }, [gameImage]);

  setInterval(() => {
    updateTimer();
  }, [1000]);

  return (
    <div id="imageContainer" className="">
      <img id="image" src={gameImage.src} alt="" className="" />
      <Dropdown />
    </div>
  );
}

//click - dragFalse - openModal -
