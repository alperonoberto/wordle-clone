import { PropTypes } from "prop-types";
import "../../keyboard/css/keyboard.css";
import { useContext } from "react";
import { AppContext } from "../../../App";

Key.propTypes = {
  keyVal: PropTypes.string.isRequired,
};

function Key({ keyVal }) {
  const { onSelectLetter, onDelete, onEnter } = useContext(AppContext);

  const selectLetter = () => {
    if (keyVal === "enter") {
      onEnter();
    } else if (keyVal === "delete") {
      onDelete();
    } else {
      onSelectLetter(keyVal);
    }
  };

  return (
    <div className="letter" onClick={selectLetter}>
      {keyVal != "delete" ? (
        keyVal
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
}

export default Key;
