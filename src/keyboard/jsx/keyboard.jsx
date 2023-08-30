// import { useState } from "react";
import "../css/keyboard.css";

function Keyboard() {
  // const [letter, setLetter] = useState('')

  const keyboard = [
    ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
    ["a", "s", "d", "f", "g", "h", "j", "k", "l", "ñ"],
    ["delete", "z", "x", "c", "v", "b", "n", "m", "enter"],
  ];

  return (
    <div className="keyboard">
      {keyboard.map((row, i) => {
        return (
          <div className="row" key={i}>
            {row.map((key, i) => {
              return (
                <div className="letter" key={i}>
                  {key != "delete" ? (
                    key
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="32"
                      viewBox="0 -960 960 960"
                      width="48"
                      fill="#464a5e"
                    >
                      <path d="M360-200q-22 0-40-11.5T289-241L120-480l169-239q13-18 31-29.5t40-11.5h420q24.75 0 42.375 17.625T840-700v440q0 24.75-17.625 42.375T780-200H360Zm420-60v-440 440Zm-431 0h431v-440H349L195-480l154 220Zm99-66 112-112 112 112 43-43-113-111 111-111-43-43-110 112-112-112-43 43 113 111-113 111 43 43Z" />
                    </svg>
                  )}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

export default Keyboard;
