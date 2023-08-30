import { useState, useEffect } from "react";
import "./App.css";
import Gameboard from "./gameboard/jsx/gameboard";
import Keyboard from "./keyboard/jsx/keyboard";

function App() {
  const [letters, setLetters] = useState([]);

  useEffect(() => {
    function handleKeyDown(e) {
      console.log(e.key);
      setLetters(letters => [...letters, e.key]);
    }

    document.addEventListener("keydown", handleKeyDown);

    return function cleanup() {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div>
      <h1>Wordle-clone</h1>
      <Gameboard letters={letters}></Gameboard>
      <Keyboard></Keyboard>
    </div>
  );
}

export default App;
