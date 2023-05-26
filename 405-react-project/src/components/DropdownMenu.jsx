import React from "react";

function DropdownMenu({ handleLogout }) {
  return (
    <div id="dropdown">
      <a href="/Orders">My Orders</a>
      <hr />
      <a onClick={handleLogout}>Sign Out</a>
    </div>
  );
}

export default DropdownMenu;
