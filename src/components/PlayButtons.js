import React, { useState } from "react";

const PlayButtons = ({ onEnterCustomWord, onGenerateRandomWord }) => {
  const [customWord, setCustomWord] = useState("");
  const [isPassword, setIsPassword] = useState(true);
  const [showInput, setShowInput] = useState(false);

  const toggleInput = () => {
    setShowInput((prevShowInput) => !prevShowInput);
  };

  const handleCustomWordClick = () => {
    toggleInput();
  };

  const handleRandomWordClick = () => {
    setCustomWord(""); // Reset custom word
    onGenerateRandomWord();
  };

  const togglePasswordVisibility = () => {
    setIsPassword((prevIsPassword) => !prevIsPassword);
  };

  const handleSubmit = () => {
    onEnterCustomWord(customWord);
    toggleInput();
  };

  return (
    <div>
      <button onClick={handleCustomWordClick}>Enter Custom Word</button>
      {showInput && (
        <div>
          <input
            type={isPassword ? "password" : "text"}
            value={customWord}
            onChange={(e) => setCustomWord(e.target.value)}
          />
          <button onClick={togglePasswordVisibility}>
            Toggle Password Visibility
          </button>
          <button onClick={handleSubmit}>Submit</button>
        </div>
      )}
      <button onClick={handleRandomWordClick}>Random Word</button>
    </div>
  );
};

export default PlayButtons;
