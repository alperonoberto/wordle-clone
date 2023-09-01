import "../css/keyboard.css";
import { keyboard } from "../../../constants/qwerty"
import Key from "../../key/jsx/key";
import { useContext } from "react";
import { AppContext } from "../../../App";

function Keyboard() {
  const { disabledLetters } = useContext(AppContext)

  return (
      <div className="keyboard">
        {
          keyboard.map((row, i) => {
            return(
              <div className="row" key={i}>
                {
                  row.map((key, j) => {
                    return(
                      <Key keyVal={key} key={j} disabled={disabledLetters.includes(key)}></Key>
                    )
                  })
                }
              </div>
            )
          })
        }
      </div>
    );
  }
  
  export default Keyboard;
