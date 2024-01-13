import React from "react";

const Word = ({ selectedWord, correctLetters }) => {
  // Check if selectedWord is a string
  if (typeof selectedWord === "string") {
    return (
      <div className="word-container">
        <div className="word">
          {selectedWord.split("").map((letter, i) => {
            return (
              <span className="letter" key={i}>
                {correctLetters.includes(letter) ? letter : ""}
              </span>
            );
          })}
        </div>
      </div>
    );
  } else {
    // Handle the case where selectedWord is not a string (e.g., empty string or undefined)
    return null;
  }
};

export default Word;
