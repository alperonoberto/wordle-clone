import '../css/gameboard.css'
import { gameboard_state } from '../../../constants/gameboard_state';
import Letter from './../../letter/jsx/letter';


function Gameboard() {

  // Sustituir estructura de divs por un array de objetos
  // que contenga el estado de la casilla en concreto, algo
  // así como: 
  //      [ 
  //        [
  //          {
  //            id: number, state: empty/(value) 
  //          }
  //        ], [], []... 
  //      ]

  return (
      <div className="gameboard">
        {
          gameboard_state.map((row, i) => {
            return(
              <div className="row" key={i}>
                {
                  row.map((square, j) => {
                    return(
                      <Letter key={j} guessNum={i} letterPos={j} >{square}</Letter>
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
  
  export default Gameboard
