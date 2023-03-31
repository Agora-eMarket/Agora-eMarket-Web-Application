import React from "react";
import Navbar from "./Navbar.jsx";

function Header() {
  return (
    <header>
      <Navbar />
      <div className="hero">
        <div className="content">
          <h1>ALBAIK is your Neighbor</h1>
          <h2>Made in Saudi</h2>
          <a className="btn" href="#">
            Order Now
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
