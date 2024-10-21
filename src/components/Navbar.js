import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div>
        <ul>
          <li>
            <Link to="  ">Main</Link>
          </li>
          <li>
            <Link to="/rating">Rating</Link>
          </li>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/dummy">Dummy</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
