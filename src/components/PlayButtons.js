import React, { useState } from "react";

const PlayButtons = ({ onEnterCustomWord, onGenerateRandomWord }) => {
  const [customWord, setCustomWord] = useState("");

  const handleCustomWordClick = () => {
    const enteredWord = prompt("Enter your custom word:", customWord);
    if (enteredWord !== null) {
      setCustomWord(enteredWord);
      onEnterCustomWord(enteredWord);
    }
  };

  const handleRandomWordClick = () => {
    setCustomWord(""); // Reset custom word
    onGenerateRandomWord();
  };

  return (
    <div>
      <button onClick={handleCustomWordClick}>Enter Custom Word</button>
      <button onClick={handleRandomWordClick}>Random Word</button>
    </div>
  );
};

export default PlayButtons;
