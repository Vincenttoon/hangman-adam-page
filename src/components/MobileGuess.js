import React, { useRef } from "react";

const MobileGuess = ({ onGuess }) => {
  const inputRef = useRef(null);

  const handleInput = (event) => {
    let inputValue = event.target.value;

    // Remove any non-alphabetic characters
    inputValue = inputValue.replace(/[^a-zA-Z]/g, "");

    // Limit the input to one character
    inputValue = inputValue.slice(0, 1);

    // Update the input value
    inputRef.current.value = inputValue;
  };

  const handleGuessButtonClick = () => {
    const inputValue = inputRef.current.value.toLowerCase();
    onGuess(inputValue); // Call the onGuess callback with the input value

    // Clear the input value after guessing
    inputRef.current.value = "";
  };

  return (
    <div className="mobile-container">
      <div className="mobile-guess">
        <input
          ref={inputRef}
          type="text"
          className="guess-input"
          onInput={handleInput}
        />
        <button className="guess-button" onClick={handleGuessButtonClick}>
          Guess Letter
        </button>
      </div>
    </div>
  );
};

export default MobileGuess;
