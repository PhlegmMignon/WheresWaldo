import React, { useState, useEffect } from "react";
import { storage } from "../firebase-config";
import { ref, uploadString, listAll, getDownloadURL } from "firebase/storage";

function submitScore(name, ms) {
  if (name == null || name == undefined) return;

  let nameScore = name + ms;
  const nameRef = ref(storage, `scores/${nameScore}`);
  uploadString(nameRef, nameScore).then(() => {
    alert("Uploaded");
  });
}

function getScores() {
  const scoreListRef = ref(storage, `scores`);
  let scoreList = [];
  listAll(scoreListRef).then((res) => {
    res.items.forEach((item) => {
      getDownloadURL(item).then((url) => {
        scoreList = [...scoreList, url];
      });
    });
  });

  let newScoreList;
  for (let item in scoreList) {
    let name, score;

    newScoreList.push({ name: name, score: score });
  }

  return newScoreList;
}

function sortScores(scoreList) {
  scoreList.sort((a, b) => {
    let keyA = a.score;
    let keyB = b.score;
    //log a.score in the above function to make sure it gives a value

    return keyA < keyB ? -1 : 1;
  });
}

export { submitScore, getScores, sortScores };
