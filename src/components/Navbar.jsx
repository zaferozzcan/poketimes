import React from "react";

function Navbar() {
  return (
    <nav className="nav-wrapper red darkened-3">
      <div className="container">
        <a href="\" className="brand-logo">
          Poke'Times
        </a>
        <ul class="right hide-on-med-and-down">
          <li>
            <a href="\">Home</a>
          </li>
          <li>
            <a href="\about">About</a>
          </li>
          <li>
            <a href="\content">Content</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
