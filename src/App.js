import React from "react";
import "./App.css";

import Header from "./components/Header";
import Figure from "./components/Figure";
import WrongLetters from "./components/WrongLetters";
import Word from "./components/Word";

function App() {
  const words = ["application", "programming", "interface", "wizard"];

  let selectedWord = words[Math.floor(Math.random() * words.length)];

  let playable = true;

  const correctLetters = [];
  const wrongLetters = [];

  return (
    <div className="App">
      <Header />
      <div className="game-container">
        <Figure />
        <WrongLetters />
        <Word />
      </div>
    </div>
  );
}

export default App;
