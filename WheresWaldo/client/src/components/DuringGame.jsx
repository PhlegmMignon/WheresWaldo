import { useState, useEffect } from "react";
import Dropdown from "./Dropdown.jsx";

export default function DuringGame({
  gameImage,
  found,
  setFoundStatus,
  updateTimer,
  getScores,
}) {
  const [coordinate, setCoordinate] = useState([0, 0]);
  const [dropdown, toggleDropdown] = useState(false);

  useEffect(() => {
    let interval = setInterval(() => {
      updateTimer();
    }, [1000]);

    getScores();

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    console.log(gameImage);

    //Makes image draggable
    let isDragged = false;
    let mouseDown = false;
    let startX, scrollLeft, startY, scrollTop;
    const slider = document.getElementById("imageContainer");

    const startDragging = (e) => {
      isDragged = false;
      // console.log("dragging");
      mouseDown = true;

      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;

      startY = e.pageY - slider.offsetTop;
      scrollTop = slider.scrollTop;
    };

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
      handleClick(e, slider);

      if (isDragged == false && mouseDown == false) {
        toggleDropdown(true);
      } else {
        toggleDropdown(false);
      }
    });

    const handleClick = (e, slider) => {
      // e.preventDefault();
      let dim = e.target.getBoundingClientRect();
      let x = e.pageX - dim.left;
      let y = e.pageY - dim.top;
      // console.log(x + " " + y);
      setCoordinate([x, y]);
    };

    // return () => {
    //   let newSlider = slider.cloneNode(true);
    //   slider.parentNode.replaceChild(newSlider, slider);
    // };
  }, [gameImage]);

  return (
    <div id="imageContainer">
      <img id="image" src={gameImage.src} alt="picture of convention" />
      {dropdown ? (
        <Dropdown
          gameImage={gameImage}
          setFoundStatus={setFoundStatus}
          coordinate={coordinate}
        />
      ) : (
        ""
      )}
    </div>
  );
}
