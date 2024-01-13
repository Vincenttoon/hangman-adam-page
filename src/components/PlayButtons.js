import React, { useState } from "react";
import { BsFillEyeFill } from "react-icons/bs";

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
    <div className="button-container">
      <div className="button-div">
        <button className="main-button" onClick={handleCustomWordClick}>
          Enter Custom Word
        </button>
        <button className="main-button" onClick={handleRandomWordClick}>
          Random Word
        </button>
      </div>
      <div className="hidden-div">
        {showInput && (
          <div className="hidden-buttons">
            <input
            className="hidden-input"
              type={isPassword ? "password" : "text"}
              value={customWord}
              onChange={(e) => setCustomWord(e.target.value)}
            />
            <div className="h-button-div">
              <button className="eye-sub" onClick={togglePasswordVisibility}>
                <BsFillEyeFill />
              </button>
              <button className="main-button submit" onClick={handleSubmit}>
                Submit
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PlayButtons;
