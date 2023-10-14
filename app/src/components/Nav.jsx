import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="top-nav" >
      <ul>
        <div className="Home">
          <Link to="/">home</Link>
        </div>
        <div className="Add">
          <Link to="/add">add</Link>
        </div>
      </ul>
    </nav>
  );
}

export default Nav;
