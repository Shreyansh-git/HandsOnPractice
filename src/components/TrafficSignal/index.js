import { useState, useEffect } from "react";
import "./index.css";

const TrafficSignal = () => {
  const [light, setLight] = useState("red");

  useEffect(() => {
    if (light === "red") setTimeout(() => setLight("yellow"), 4000);
    else if (light === "yellow") setTimeout(() => setLight("green"), 500);
    else if (light === "green") setTimeout(() => setLight("red"), 3000);
  }, [light]);
  return (
    <div className="container">
      <div className={`grey ${light === "red" ? "red" : ""}`}></div>
      <div className={`grey ${light === "yellow" ? "yellow" : ""}`}></div>
      <div className={`grey ${light === "green" ? "green" : ""}`}></div>
    </div>
  );
};
export default TrafficSignal;
