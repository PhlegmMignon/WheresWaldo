import React, { useState, useEffect } from "react";
import { storage } from "../firebase-config";
import { ref, uploadString } from "firebase/storage";

function submitScore(name, ms) {
  if (name == null || name == undefined) return;

  let nameScore = name + ms;
  const nameRef = ref(storage, `scores/${nameScore}`);
  uploadString(nameRef, nameScore).then(() => {
    alert("Uploaded");
  });
}

export { submitScore };
