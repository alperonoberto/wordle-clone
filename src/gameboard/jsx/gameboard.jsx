/* eslint-disable react/prop-types */
// import { useState } from 'react';
// import PropTypes from 'prop-types';
import '../css/gameboard.css'


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
      <div className="row">
        <div className="square"></div>
        <div className="square"></div>
        <div className="square"></div>
        <div className="square"></div>
        <div className="square"></div>
      </div>
      <div className="row">
        <div className="square"></div>
        <div className="square"></div>
        <div className="square"></div>
        <div className="square"></div>
        <div className="square"></div>
      </div>
      <div className="row">
        <div className="square"></div>
        <div className="square"></div>
        <div className="square"></div>
        <div className="square"></div>
        <div className="square"></div>
      </div>
      <div className="row">
        <div className="square"></div>
        <div className="square"></div>
        <div className="square"></div>
        <div className="square"></div>
        <div className="square"></div>
      </div>
      <div className="row">
        <div className="square"></div>
        <div className="square"></div>
        <div className="square"></div>
        <div className="square"></div>
        <div className="square"></div>
      </div>
      <div className="row">
        <div className="square"></div>
        <div className="square"></div>
        <div className="square"></div>
        <div className="square"></div>
        <div className="square"></div>
      </div>
    </div>
  );
}

export default Gameboard
