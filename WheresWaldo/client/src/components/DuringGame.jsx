import { useState, useEffect } from "react";
import Dropdown from "./Dropdown.jsx";
import Modal from "./Modal.jsx";

export default function DuringGame({
  gameImage,
  setFoundStatus,
  updateTimer,
  getScores,
  modalFound,
}) {
  const [coordinate, setCoordinate] = useState([0, 0]);
  const [dropdown, toggleDropdown] = useState(false);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    let interval = setInterval(() => {
      updateTimer();
    }, [1000]);

    getScores(gameImage.name);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    //Makes image draggable
    let isDragged = false;
    let mouseDown = false;
    let startX, scrollLeft, startY, scrollTop;
    const slider = document.getElementById("imageContainer");

    const startDragging = (e) => {
      e.preventDefault();
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
      mouseDown = false;
      // console.log("stopDrag");
    };

    slider.addEventListener("mousemove", move, false);
    slider.addEventListener("mousedown", startDragging, false);
    slider.addEventListener("mouseup", stopDragging, false);
    slider.addEventListener("mouseleave", stopDragging, false);

    //Dropdown controls
    let ele = document.getElementById("imageContainer");
    ele.addEventListener("mouseup", (e) => {
      mouseDown = false;

      handleClick(e, slider);

      if (isDragged == false && mouseDown == false) {
        toggleDropdown(true);
      } else {
        toggleDropdown(false);
      }
    });

    const handleClick = (e) => {
      let dim = e.target.getBoundingClientRect();
      let x = e.clientX - dim.left;
      let y = e.clientY - dim.top;

      // console.log(x, y);
      setCoordinate([x, y]);
    };
  }, [gameImage]);

  return (
    <div id="imageContainer">
      <img id="image" src={gameImage.src} alt="picture of convention" />
      {modal ? (
        <Modal modalFound={modalFound} modal={modal} setModal={setModal} />
      ) : (
        ""
      )}
      {dropdown ? (
        <Dropdown
          gameImage={gameImage}
          setFoundStatus={setFoundStatus}
          coordinate={coordinate}
          setModal={setModal}
        />
      ) : (
        ""
      )}
    </div>
  );
}
