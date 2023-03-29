import React from "react";

function Navbar() {
  return (
    <header>
      <img
        class="logo"
        src="https://www.albaik.com/ar/media/get/20111220_logo-albaik.png"
        alt="Logo"
      ></img>
      <nav class="navbar">
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
      <a class="btn" href="#">
        Sign in
      </a>
    </header>
  );
}

export default Navbar;
