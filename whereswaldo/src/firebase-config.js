// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const config = {
  apiKey: "AIzaSyBPs099jylm7cJQwrUQjMbKde3yiSXoRqE",
  authDomain: "library-db4f9.firebaseapp.com",
  projectId: "library-db4f9",
  storageBucket: "library-db4f9.appspot.com",
  messagingSenderId: "996636755591",
  appId: "1:996636755591:web:04f5d0a50db94991441a22",
};

function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error(
      "No Firebase configuration object provided." +
        "\n" +
        "Add your web app's configuration object to firebase-config.js"
    );
  } else {
    return config;
  }
}
const app = initializeApp(config);

const storage = getStorage(app);

const firestore = getFirestore();

export { app, storage, firestore, getFirebaseConfig };
