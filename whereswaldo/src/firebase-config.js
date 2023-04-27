// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

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

export function getFirebaseConfig() {
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
