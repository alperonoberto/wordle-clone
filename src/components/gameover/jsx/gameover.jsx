import { useContext } from "react";
import { AppContext } from "../../../App";

function Gameover() {
  const { gameover, currAttempt, correctWord } = useContext(AppContext);

  return (
    <div className="gameover">
      <h3>{gameover.win ? "¡Has ganado!" : "Has perdido."}</h3>
      <h1>La palabra es: { correctWord }</h1>
      {gameover.win && (<h3>Has acertado la palabra en { currAttempt.attempt } intentos.</h3>)}
    </div>
  );
}

export default Gameover;
