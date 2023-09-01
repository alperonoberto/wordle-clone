/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useState, useEffect, useCallback } from "react";
import "./App.css";
import Gameboard from "./components/gameboard/jsx/gameboard";
import Keyboard from "./components/keyboard/jsx/keyboard";
import { gameboard_state, selectWord } from "./constants/gameboard_state";
import { createContext } from "react";
import { keyboard } from "./constants/qwerty";
import Gameover from "./components/gameover/jsx/gameover";

export const AppContext = createContext();

function App() {
  const [gameboard, setGameboard] = useState(gameboard_state);
  const [currAttempt, setCurrAttempt] = useState({ attempt: 0, letterPos: 0 });
  const [wordSet, setWordSet] = useState(new Set());
  const [disabledLetters, setDisabledLetters] = useState([]);
  const [gameover, setGameover] = useState({ gameover: false, win: false });
  const [correctWord, setCorrectWord] = useState("");

  useEffect(() => {
    selectWord().then((words) => {
      setWordSet(words.wordSet);
      setCorrectWord(words.wordToGuess);
    });
  }, [correctWord]);

  const onSelectLetter = (keyVal) => {
    if (currAttempt.letterPos > 4) return;
    const newBoard = [...gameboard];
    newBoard[currAttempt.attempt][currAttempt.letterPos] = keyVal;
    setGameboard(newBoard);
    setCurrAttempt({ ...currAttempt, letterPos: currAttempt.letterPos + 1 });
  };

  const onDelete = () => {
    if (currAttempt.letterPos === 0) return;
    const newBoard = [...gameboard];
    newBoard[currAttempt.attempt][currAttempt.letterPos - 1] = "";
    setGameboard(newBoard);
    setCurrAttempt({ ...currAttempt, letterPos: currAttempt.letterPos - 1 });
  };

  const onEnter = () => {
    if (currAttempt.letterPos !== 5) return;

    let currentWord = "";
    for (let i = 0; i < 5; i++) {
      currentWord += gameboard[currAttempt.attempt][i];
    }

    if (wordSet.has(currentWord)) {
      setCurrAttempt({ attempt: currAttempt.attempt + 1, letterPos: 0 });
    } else {
      setCurrAttempt({ attempt: currAttempt.attempt, letterPos: currAttempt.letterPos})
      alert("Esa palabra no existe");
      return
    }

    if (currentWord === correctWord) {
      setGameover({ gameover: true, win: true });
      return;
    }

    if (currAttempt.attempt === 5) {
      setGameover({ gameover: true, win: false });
    }

    setCurrAttempt({ attempt: currAttempt.attempt + 1, letterPos: 0 });
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleKeyDown = useCallback((e) => {
    if (e.key === "Enter") {
      onEnter();
    } else if (e.key === "Backspace") {
      onDelete();
    } else {
      keyboard.forEach((row) =>
        row.forEach((key) => {
          if (e.key.toLowerCase() === key.toLowerCase()) {
            onSelectLetter(e.key);
          }
        })
      );
    }
  });

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);

    return function cleanup() {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  return (
    <div>
      <h1>Wordle-clone</h1>
      <AppContext.Provider
        value={{
          gameboard,
          setGameboard,
          currAttempt,
          setCurrAttempt,
          onSelectLetter,
          onDelete,
          onEnter,
          disabledLetters,
          setDisabledLetters,
          gameover,
          setGameover,
          correctWord
        }}
      >
        <Gameboard></Gameboard>
        {gameover.gameover ? <Gameover></Gameover> : <Keyboard></Keyboard>}
      </AppContext.Provider>
    </div>
  );
}

export default App;
