import "../css/keyboard.css";
import { keyboard } from "../../../constants/qwerty"
import Key from "../../key/jsx/key";

function Keyboard() {

  return (
      <div className="keyboard">
        {
          keyboard.map((row, i) => {
            return(
              <div className="row" key={i}>
                {
                  row.map((key, j) => {
                    return(
                      <Key keyVal={key} key={j}></Key>
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
