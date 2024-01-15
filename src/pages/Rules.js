import React from "react";
import { Link, NavLink } from "react-router-dom";

const Rules = () => {
  return (
    <div className="rules-div">
      <ol>
        <li>
          <h2 className="rules">
            User can make their own word and play with friends or select a
            random word.
          </h2>
        </li>
        <li>
          <h2 className="rules two-rules">
            Player gets 9 guesses to guess the correct word
          </h2>
          <h4> Top hat, shoes, and mustache included!</h4>
        </li>
        <li>
          <h2 className="rules">Player cannot guess the same letter twice!</h2>
        </li>
        <li>
          <h2 className="rules">Remember, have fun!</h2>
        </li>

        <li>
          <h3 className="rules">
            Check out Vincent's Game Box for more games!
          </h3>
        </li>
      </ol>

      <div className="rules-btn-div">
        {/* Use NavLink instead of Link */}
        <NavLink to="/" activeClassName="active-btn">
          <button className="rules-btn">Hangman</button>
        </NavLink>

        {/* Use NavLink instead of Link */}
        <NavLink to="/game-box" activeClassName="active-btn">
          <button className="rules-btn">Game Box</button>
        </NavLink>
      </div>
    </div>
  );
};

export default Rules;
