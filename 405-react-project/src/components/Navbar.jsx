import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCartShopping } from "@fortawesome/free-regular-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
//is this working
function Navbar() {
  return (
    <div className="navbar">
      <a className="logo" href="/">
        <FontAwesomeIcon
          icon={faCartShopping}
          size="2xl"
          style={{ color: "#005aff" }}
          className="logo-img"
        />
        <span className="logo-text">Agorá</span>
      </a>
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/Menu">Menu</a>
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
