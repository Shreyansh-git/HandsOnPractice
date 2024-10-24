// import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Rating from "./components/RatingAndFeedback/Rating";
import Home from "./components/Home";
import Dummy from "./dummy";
import HamburgerMenu from "./components/HamburgerMenu/index.js";
import ToDoList from "./components/ToDoList";
import Language from "./components/contextAPI/Language";
import UserProvider from "./components/contextAPI";
import { useState } from "react";

function App() {
  const [value, setValue] = useState("english");

  return (
    <UserProvider.Provider value={{ chosenLanguage: `${value}` }}>
      <Router>
        <HamburgerMenu setValue={setValue} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rating" element={<Rating />} />
          <Route path="/home" element={<Home />} />
          <Route path="/dummy" element={<Dummy />} />
          <Route path="/todo" element={<ToDoList />} />
          <Route path="/language" element={<Language />} />
        </Routes>
      </Router>
    </UserProvider.Provider>
  );
}

export default App;
