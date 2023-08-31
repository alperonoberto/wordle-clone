import { PropTypes } from "prop-types";
import { useContext } from "react";
import { AppContext } from "../../../App";
import "../css/letter.css";

Letter.propTypes = {
  guessNum: PropTypes.number.isRequired,
  letterPos: PropTypes.number.isRequired,
};

function Letter({ guessNum, letterPos }) {
  const { gameboard, correctWord, currAttempt } = useContext(AppContext);
  const letter = gameboard[guessNum][letterPos];

  const correct = correctWord[letterPos] === letter;
  const almost = !correct && letter !== "" && correctWord.includes(letter);

  const letterState =
    (currAttempt.attempt > guessNum) ? (correct
      ? "correct"
      : almost
      ? "almost"
      : "incorrect") : "regular";

  return (
    <div className="square" id={letterState}>
      {letter}
    </div>
  );
}

export default Letter;
