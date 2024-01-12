import React from "react";

const Word = ({ selectedWord, correctLetters }) => {
  return (
    <div>
      <div className="word">
        {selectedWord.split("").map((letter, i) => {
          return (
            <span class="letter">
              {correctLetters.includes(letter) ? letter : ""}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default Word;
