import React from "react";
import Navbar from "./Navbar.jsx";

function Header() {
  return (
    <div id="wrapper">
      <header>
        <Navbar />
        <div className="hero">
          <div className="content">
            <h1>Agorá is your Neighbor</h1>
            <p>Your go-to supermarket for all your grocery needs</p>
            <a className="btn" href="/menu">
              Order Now
            </a>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
