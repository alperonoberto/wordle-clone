import { useState, useEffect, useCallback } from "react";
import "./App.css";
import Gameboard from "./components/gameboard/jsx/gameboard";
import Keyboard from "./components/keyboard/jsx/keyboard";
import { gameboard_state } from "./constants/gameboard_state";
import { createContext } from "react";
import { keyboard } from "./constants/qwerty";

export const AppContext = createContext();

function App() {
  const [gameboard, setGameboard] = useState(gameboard_state);
  const [currAttempt, setCurrAttempt] = useState({ attempt: 0, letterPos: 0 });

  const correctWord = "porra";

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
          correctWord
        }}
      >
        <Gameboard></Gameboard>
        <Keyboard></Keyboard>
      </AppContext.Provider>
    </div>
  );
}

export default App;
