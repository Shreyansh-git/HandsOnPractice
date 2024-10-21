import { useState } from "react";
import { Link } from "react-router-dom";
import "./index.css";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(true);
  function toggleMenu() {
    setIsOpen(!isOpen);
  }
  return (
    <nav className="navbar">
      <div className="menu-toggle" onClick={toggleMenu}>
        <div className={`bar ${isOpen ? "open" : ""}`}></div>
        <div className={`bar ${isOpen ? "open" : ""}`}></div>
        <div className={`bar ${isOpen ? "open" : ""}`}></div>
      </div>

      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        <li>
          <Link to="/">Main</Link>
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
        <li>
          <Link to="/todo">ToDoList</Link>
        </li>
      </ul>
    </nav>
  );
};
export default HamburgerMenu;
