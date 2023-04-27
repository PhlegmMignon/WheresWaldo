import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
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

  return (
    <>
      <div className="App">
        {/* <Navbar cart={cart} /> */}
        <Routes>
          {/* <Route
          path="/cart"
          element={
            <Cart
              cart={cart}
              setCart={setCart}
              shop={items}
              cartItems={cartItems}
              setCartItems={setCartItems}
            />
          }
        />
        <Route
          path="/shop"
          element={
            <Shop
              setItems={setItems}
              items={items}
              setCart={setCart}
              cart={cart}
              lengthRef={lengthRef}
            />
          }
        /> */}
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </>
  );
}

//Figure out what fxs you need to make sure firebase loads
//Add sign in btn and see if you can call the fx

//Header contains 3 chars
//Have start btn component that loads the image
//    Start timer when start btn is clicked.
//    When last char is found, end timer is called

//Main contains section with image
// Image has its own div where you can click on it. Onchange fx checks if modal is open.
//           If oepn close modal
//Click shows the modal with dropdown box and targetting circle
//Save the pointer x y location on click

//When a char is found, add found text under it in header
//If wrong char, have small pop up that fades after 3 secs (sticky property)

//Leaderboard info is stored in firebase.
//If not high score, show leaderboard top 5 when end timer is called and display current time
//   If high score, prompt name then show leaderboard
//When end timer is called, take current time and compare to firebase
//