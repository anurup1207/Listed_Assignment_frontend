import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./component/Navbar/Navbar.css";
import "./component/Upload/Upload.css";
import LeftPanel from "./component/Panel/leftPanel";
import RightPanel from "./component/Panel/rightPanel";
import Home from "./component/Home";

const App = () => {
  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={[<LeftPanel />, <RightPanel />]}></Route>
            <Route path="/home" element={<Home/>}>
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
};

export default App;
