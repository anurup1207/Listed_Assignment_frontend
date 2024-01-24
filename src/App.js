import React from "react";
import Navbar from "./component/Navbar/Navbar";
import "./component/Navbar/Navbar.css"

const App = () => {
  return (
    <>
      <div className="nav">
        <Navbar />
      </div>
      <div className="upload">
        <Upload/>
      </div>
    </>
  );
};

export default App;
