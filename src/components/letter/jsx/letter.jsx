import { PropTypes } from "prop-types";
import { useContext } from "react";
import { AppContext } from "../../../App";

Letter.propTypes = {
  guessNum: PropTypes.number.isRequired,
  letterPos: PropTypes.number.isRequired,
};

function Letter({ guessNum, letterPos }) {
  const { gameboard } = useContext(AppContext);
  const letter = gameboard[guessNum][letterPos];

  return <div className="square">{letter}</div>;
}

export default Letter;
