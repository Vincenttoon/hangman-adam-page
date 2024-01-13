// Layout.js
import React from "react";
import Header from "./Header";
import Homepage from "./Homepage";

const Layout = ({ children }) => {
  return (
    <div className="App">
      <div className="top-page">
        <Header />
        <Homepage />
      </div>
    </div>
  );
};

export default Layout;
