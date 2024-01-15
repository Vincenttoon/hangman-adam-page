import React from "react";
import { NavLink } from "react-router-dom";

const GameBox = () => {
  return (
    <div className="game-box">
      <h1> Coming soon! </h1>
      <div className="nav-div">
        <NavLink to="/" activeClassName="active-btn">
          <button className="back-btn">Hangman</button>
        </NavLink>
      </div>
    </div>
  );
};

export default GameBox;
