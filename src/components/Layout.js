// Layout.js
import React from "react";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <div className="App">
      <div className="top-page">
        <Header />
        {children}
      </div>
    </div>
  );
};

export default Layout;
