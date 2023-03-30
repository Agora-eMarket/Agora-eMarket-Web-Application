import React from "react";

function Navbar() {
  return (
    <div className="navbar">
      <a href="/">
        <img
          className="logo"
          src="https://www.albaik.com/ar/media/get/20111220_logo-albaik.png"
          alt="Logo"
        ></img>
      </a>
      <nav>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Menu</a>
          </li>
          <li>
            <a href="#">About us</a>
          </li>
          <li>
            <a href="#">Contact us</a>
          </li>
        </ul>
      </nav>
      <a className="btn" href="#">
        Order Now
      </a>
    </div>
  );
}

export default Navbar;
