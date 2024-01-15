import React, { useState, useEffect } from "react";

import Figure from "./Figure";
import WrongLetters from "./WrongLetters";
import Word from "./Word";
import Popup from "./Popup";
import Notification from "./Notification";
import PlayButtons from "./PlayButtons";
import RulesAndBox from "./RulesAndBox";
import MobileGuess from "./MobileGuess";
import { showNotification as show } from "../helpers/helpers";
import words from "../helpers/words";

let initialRandomWord = words[Math.floor(Math.random() * words.length)];

function Homepage() {
  const [playable, setPlayable] = useState(true);
  const [correctLetters, setCorrectLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [showNotification, setShowNotification] = useState(false);
  const [selectedWord, setSelectedWord] = useState(initialRandomWord);

  useEffect(() => {
    const handleKeyDown = (event) => {
      const { key, keyCode } = event;

      // Check if the input is not focused
      if (
        playable &&
        keyCode >= 65 &&
        keyCode <= 90 &&
        !document.activeElement.tagName.toLowerCase().match(/input|textarea/)
      ) {
        const letter = key.toLowerCase();

        if (selectedWord.includes(letter)) {
          if (!correctLetters.includes(letter)) {
            setCorrectLetters((currentLetters) => [...currentLetters, letter]);
          } else {
            show(setShowNotification);
          }
        } else {
          if (!wrongLetters.includes(letter)) {
            setWrongLetters((wrongLetters) => [...wrongLetters, letter]);
          } else {
            show(setShowNotification);
          }
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [correctLetters, wrongLetters, playable, selectedWord]);

  const handleGuess = (letter) => {
    if (playable && selectedWord.includes(letter)) {
      if (!correctLetters.includes(letter)) {
        setCorrectLetters((currentLetters) => [...currentLetters, letter]);
      } else {
        show(setShowNotification);
      }
    } else {
      if (!wrongLetters.includes(letter)) {
        setWrongLetters((wrongLetters) => [...wrongLetters, letter]);
      } else {
        show(setShowNotification);
      }
    }
  };

  function playAgain() {
    setPlayable(true);
    setCorrectLetters([]);
    setWrongLetters([]);

    const random = Math.floor(Math.random() * words.length);
    setSelectedWord(words[random]);
  }

  let onEnterCustomWord = (customWord) => {
    console.log("Entered custom word:", customWord);
    setSelectedWord(customWord.toLowerCase());
  };

  let onGenerateRandomWord = () => {
    const random = Math.floor(Math.random() * words.length);
    setSelectedWord(words[random]);
    playAgain();
  };

  return (
    <div>
      <div className="game-container">
        <PlayButtons
          onEnterCustomWord={onEnterCustomWord}
          onGenerateRandomWord={onGenerateRandomWord}
        />
        <WrongLetters wrongLetters={wrongLetters} />
        <Figure wrongLetters={wrongLetters} />
        <Word selectedWord={selectedWord} correctLetters={correctLetters} />
        <MobileGuess onGuess={handleGuess} /> {/* Pass the callback function */}
        <RulesAndBox />
      </div>
      <Popup
        correctLetters={correctLetters}
        wrongLetters={wrongLetters}
        selectedWord={selectedWord}
        setPlayable={setPlayable}
        playAgain={playAgain}
      />
      <Notification showNotification={showNotification} />
    </div>
  );
}

export default Homepage;
