// import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Rating from "./components/RatingAndFeedback/Rating";
import Home from "./components/Home";
import Dummy from "./dummy";
import HamburgerMenu from "./components/HamburgerMenu/index.js";
import ToDoList from "./components/ToDoList";

function App() {
  return (
    <Router>
      <HamburgerMenu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rating" element={<Rating />} />
        <Route path="/home" element={<Home />} />
        <Route path="/dummy" element={<Dummy />} />
        <Route path="/todo" element={<ToDoList />} />
      </Routes>
    </Router>
  );
}

export default App;
