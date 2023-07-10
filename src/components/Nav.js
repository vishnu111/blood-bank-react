import React from "react";
import { Link } from "react-router-dom";
function Nav() {
  return (
    <nav className="navbar">
      <div>
        <Link to="/">Add Details</Link>
        <Link to="/search">Search for blood</Link>
      </div>
    </nav>
  );
}
export default Nav;
