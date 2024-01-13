// RulesAndBox.js
import React from "react";
import { Link } from "react-router-dom";

const RulesAndBox = () => {
  return (
    <div className="rba">
      <Link to="/rules">
        <button className="main-button bottom-button">Rules</button>
      </Link>
      <Link to="/game-box">
        <button className="main-button bottom-button">Game Box</button>
      </Link>
    </div>
  );
};

export default RulesAndBox;
