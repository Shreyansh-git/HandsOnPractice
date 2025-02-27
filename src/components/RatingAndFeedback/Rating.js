import "./rating.css";
import { useState, useRef } from "react";
import StarComponent from "./StarComponent";

export default function Rating() {
  let arr = new Array(5).fill(0);
  const [starValue, setStarValue] = useState(0);
  const [starHover, setStarHover] = useState(0);
  const inputRef = useRef(0);

  function handleMouseOver(index) {
    setStarHover(index + 1);
  }
  function handleSubmit() {
    console.log("Rating:", starValue, "Feedback:", inputRef.current.value);
    inputRef.current.value = null;
    setStarValue(0);
  }

  return (
    <div className="main-div">
      <h1> Submit your rating</h1>
      <StarComponent
        arr={arr}
        starHover={starHover}
        starValue={starValue}
        setStarHover={setStarHover}
        setStarValue={setStarValue}
        handleMouseOver={handleMouseOver}
      />
      <textarea
        className="textarea"
        placeholder="what's your feedback"
        ref={inputRef}
      />
      <button onClick={handleSubmit}>submit</button>
    </div>
  );
}
