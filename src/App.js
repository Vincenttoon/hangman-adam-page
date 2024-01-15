// App.js
import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import Homepage from "./components/Homepage";
import Rules from "./pages/Rules";
import GameBox from "./pages/GameBox";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/rules" element={<Rules />} />
          <Route path="/game-box" element={<GameBox />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
