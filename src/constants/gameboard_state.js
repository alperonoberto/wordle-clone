/* eslint-disable no-unused-vars */
import words from "./words.txt";

export const gameboard_state = [
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
];

export const selectWord = async () => {
  let wordSet;
  let wordToGuess;

  await fetch(words)
    .then((response) => response.text())
    .then((text) => {
      const wordArr = text.split("\r\n");
      wordToGuess = wordArr[Math.floor(Math.random() * wordArr.length)]
      wordSet = new Set(wordArr);
    });

  return { wordSet, wordToGuess };
};
