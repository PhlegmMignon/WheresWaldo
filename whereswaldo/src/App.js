import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Start from "./components/Start";
import Main from "./components/Main";
import Header from "./components/Header";
import Timer from "./components/Timer";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { getFirebaseConfig } from "./firebase-config.js";

export default function App() {
  const config = getFirebaseConfig();
  const app = initializeApp(config);

  //Timer states
  const [ms, setMs] = useState("");
  const [numFound, setNumFound] = useState(0);

  const [gameStart, setGameStart] = useState(false);
  let checkInterval = setInterval(() => {
    if (gameStart) return true;
  }, 100);

  //Unmounts start when start is clicked
  useEffect(() => {
    if (gameStart) {
      clearInterval(checkInterval);
    }
  }, [gameStart]);

  //Dropdown states
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [position, setPosition] = useState([0, 0]);

  //Character found states
  const [luffyFound, setLuffyFound] = useState(false);
  const [konFound, setKonFound] = useState(false);
  const [zimFound, setZimFound] = useState(false);

  return (
    <>
      <div className="App">
        <Header timer={<Timer ms={ms} />} />
        <Routes>
          {/* <Route
          path="/cart"
          element={
            <Cart
              cart={cart}
            
            />
          }
        />
        <Route
          path="/shop"
          element={
            <Shop
              setItems={setItems}
              
            />
          }
        /> */}
          <Route
            path="/"
            element={
              <Start
                setGameStart={setGameStart}
                ms={ms}
                setMs={setMs}
                numFound={numFound}
              />
            }
          />
          <Route
            path="/image"
            element={
              <Main
                position={position}
                setPosition={setPosition}
                dropdownOpen={dropdownOpen}
                setDropdownOpen={setDropdownOpen}
                setNumFound={setNumFound}
                setLuffyFound={setLuffyFound}
                setKonFound={setKonFound}
                setZimFound={setZimFound}
              />
            }
          />
        </Routes>
      </div>
    </>
  );
}

//Figure out what fxs you need to make sure firebase loads
//Add sign in btn and see if you can call the fx

//Have start btn component that loads the image
//    When last char is found, end timer is called

//Verification of character

//When a char is found, add found text under it in header
//If wrong char, have small pop up that fades after 3 secs (sticky property)

//Leaderboard info is stored in firebase.
//If not high score, show leaderboard top 5 when end timer is called and display current time
//   If high score, prompt name then show leaderboard
//When end timer is called, take current time and compare to firebase
//
