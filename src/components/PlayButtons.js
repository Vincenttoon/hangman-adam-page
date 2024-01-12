import React from "react";

const PlayButtons = ({ onSelectChances, onEnterCustomWord }) => {
  return (
    <div>
      <button onClick={onEnterCustomWord}>Enter Custom Word</button>
    </div>
  );
};

export default PlayButtons;
