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
import AutoComplete from "./components/AutoComplete";
import FolderStructure from "./components/FolderStructure";
import { folderData } from "./components/FolderStructure/data";
import MultiCheckbox from "./components/multiCheckbox";
import StatusTracker from "./components/StatusTracker";
import TrafficSignal from "./components/TrafficSignal";
import InfiniteComment from "./components/InfiniteComment";
import TicTacToe from "./components/TicTacToe";
import SlidingWindow from "./components/SlidingWindow";
import InfiniteScroll from "./components/InfiniteScroll";
import InfiniteScrollUsingIO from "./components/InfiniteScroll/InfiniteScrollUsingIO";

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
          <Route path="/autoComplete" element={<AutoComplete />} />
          <Route
            path="/folderStructure"
            element={<FolderStructure folderData={folderData} />}
          />
          <Route path="/multiCheckbox" element={<MultiCheckbox />} />
          <Route path="/statusTracker" element={<StatusTracker />} />
          <Route path="/trafficSignal" element={<TrafficSignal />} />
          <Route path="/infiniteComment" element={<InfiniteComment />} />
          <Route path="/ticTacToe" element={<TicTacToe />} />
          <Route path="/slidingWindow" element={<SlidingWindow />} />
          <Route path="/infiniteScroll" element={<InfiniteScrollUsingIO />} />
        </Routes>
      </Router>
    </UserProvider.Provider>
  );
}

export default App;
