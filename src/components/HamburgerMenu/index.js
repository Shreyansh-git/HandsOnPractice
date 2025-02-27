import { useState } from "react";
import { Link } from "react-router-dom";
import "./index.css";

const HamburgerMenu = ({ setValue }) => {
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
        <li>
          <Link to="/language">
            <select
              className="dropDown"
              onChange={(e) => setValue(e.target.value)}
            >
              <option value="english">english</option>
              <option value="hindi">hindi</option>
              <option value="marathi">marathi</option>
            </select>
          </Link>
        </li>
        <li>
          <Link to="/autoComplete">AutoComplete</Link>
        </li>
        <li>
          <Link to="/folderStructure">FolderStructure</Link>
        </li>
        <li>
          <Link to="/multiCheckbox">Multi Checkbox</Link>
        </li>
        <li>
          <Link to="/statusTracker">Status Tracker</Link>
        </li>
        <li>
          <Link to="/trafficSignal">Traffic Signal</Link>
        </li>
        <li>
          <Link to="/infiniteComment">Infinite Comment</Link>
        </li>
        <li>
          <Link to="/ticTacToe">Tic Tac Toe</Link>
        </li>
        <li>
          <Link to="/slidingWindow">Sliding Window</Link>
        </li>
        <li>
          <Link to="/infiniteScroll">Infinite Scroll</Link>
        </li>
      </ul>
    </nav>
  );
};
export default HamburgerMenu;
