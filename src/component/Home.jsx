import React from "react";
import Navbar from "./Navbar/Navbar";
import Upload from "./Upload/Upload";
import "./Navbar/Navbar.css"
import "./Upload/Upload.css"

const Home = () => {
  return (
    <>
      <div className="nav">
        <Navbar />
      </div>
      <div className="upload">
        <Upload />
      </div>
    </>
  );
};

export default Home;
