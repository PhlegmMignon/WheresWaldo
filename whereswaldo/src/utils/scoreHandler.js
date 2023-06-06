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

async function getScores() {
  const scoreListRef = ref(storage, `scores/`);
  // let scoreList = [];
  let string;

  let scoreList = [];
  listAll(scoreListRef).then((res) => {
    res.items.forEach((item) => {
      string = item._location.path;

      let counter = 0;
      while (string.charAt(counter) != "/") {
        counter++;
      }
      string = string.slice(counter + 1, -1);

      scoreList.push(string);
    });
  });

  await Promise.all(scoreList).then((val) => {
    console.log(val);
  });
  console.log(scoreList);

  let newScoreList;
  for (let i = 0; scoreList[i] != undefined; i++) {
    console.log("hi");
    let name, score;
    let counter = 0;
    while (isNaN(scoreList[i].charAt(counter))) {
      counter++;
    }
    name = scoreList[i].slice(0, counter);
    score = scoreList[i].slice(counter, -1);
    // console.log(name);
    // console.log(score);
    newScoreList.push({ name: name, score: score });
    console.log(newScoreList);
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
