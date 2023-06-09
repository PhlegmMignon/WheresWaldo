import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Start from "./components/Start";
import Main from "./components/Main";
import Header from "./components/Header";
import Timer from "./components/Timer";
import WinModal from "./components/WinModal";
import {
  getAuth,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { app } from "./firebase-config.js";

export default function App() {
  const auth = getAuth(app);

  //Timer states
  const [ms, setMs] = useState("");
  const [startTime, setStartTime] = useState(0);

  //Detects when game is started
  const [gameOngoing, setGameOngoing] = useState(false);
  let checkInterval = setInterval(() => {
    if (gameOngoing) return true;
  }, 100);

  //Unmounts start when start is clicked
  useEffect(() => {
    if (gameOngoing) {
      clearInterval(checkInterval);
    }
  }, [gameOngoing]);

  //Dropdown states
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [position, setPosition] = useState([0, 0]);

  //Modal states
  const [showModal, setShowModal] = useState(false);

  //Character found states
  const [luffyFound, setLuffyFound] = useState(false);
  const [konFound, setKonFound] = useState(false);
  const [zimFound, setZimFound] = useState(false);

  //Leaderboard & WinModal states
  const [scoreList, setScoreList] = useState([{ name: "", score: "", id: "" }]);

  return (
    <>
      <div className="App">
        <Header
          timer={
            <Timer
              ms={ms}
              setMs={setMs}
              gameOngoing={gameOngoing}
              startTime={startTime}
            />
          }
          luffyFound={luffyFound}
          konFound={konFound}
          zimFound={zimFound}
        />
        <Routes>
          <Route
            path="/"
            element={
              <Start
                setGameOngoing={setGameOngoing}
                ms={ms}
                setMs={setMs}
                setStartTime={setStartTime}
                startTime={startTime}
                luffyFound={luffyFound}
                konFound={konFound}
                zimFound={zimFound}
              />
            }
          />
          <Route
            path="/image"
            element={
              <Main
                modal={
                  <WinModal
                    setShowModal={setShowModal}
                    gameOngoing={gameOngoing}
                    ms={ms}
                    scoreList={scoreList}
                  />
                }
                setScoreList={setScoreList}
                gameOngoing={gameOngoing}
                setGameOngoing={setGameOngoing}
                showModal={showModal}
                setShowModal={setShowModal}
                position={position}
                setPosition={setPosition}
                dropdownOpen={dropdownOpen}
                setDropdownOpen={setDropdownOpen}
                setLuffyFound={setLuffyFound}
                setKonFound={setKonFound}
                setZimFound={setZimFound}
                luffyFound={luffyFound}
                konFound={konFound}
                zimFound={zimFound}
              />
            }
          />
        </Routes>
      </div>
    </>
  );
}
