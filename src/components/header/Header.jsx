import React from "react";
import "./header.scss";
import Navbar from "../navbar/Navbar";
// import Title from '../title/Title'
function Title() {
  return (
    <div className="Tile-container">
      <div className="title">
        <span>IMMERSIVE</span>
        <span>EXPERIENCE</span>
        <span>THAT DELIVER</span>
      </div>
    </div>
  );
}

function Header() {
  return (
    <div>
      <div className="Header">
        <div className="img-box">
          <Navbar />
          <Title />
        </div>
      </div>
    </div>
  );
}

export default Header;
