import { useState } from "react";
import "./index.css";

const StatusTracker = () => {
  const total = new Array(5).fill(0);
  const [active, setActive] = useState(0);
  return (
    <div>
      <div className="container-status">
        {total.map((value, index) => {
          return (
            <div className="parent">
              <div
                className={`circle ${active === index ? "active" : ""}`}
              ></div>
              <div className={`line ${active === index ? "active" : ""}`}></div>
            </div>
          );
        })}
      </div>
      <div className="btn">
        <button onClick={() => setActive(active + 1)}>Increment Status</button>
      </div>
    </div>
  );
};

export default StatusTracker;
