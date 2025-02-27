import { useState } from "react";
import "./dummy.css";

const Dummy = () => {
  const [value, setValue] = useState("");
  const [listData, setListData] = useState(["this is first list", "lets go"]);
  const [starValue, setStarValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(0);

  const arr = new Array(5).fill(0);
  function handleSubmit() {
    console.log(value);
    setListData([...listData, value]);
    setValue("");
  }
  return (
    <>
      <input value={value} onChange={(e) => setValue(e.target.value)} />
      <button onClick={handleSubmit}>Submit</button>
      <div className="topDummy">
        {arr.map((ar, index) => {
          return (
            <div className="mainDummy" key={index}>
              <div
                className={`dummyChild ${
                  (hoverValue || starValue) >= index ? "activeDummy" : ""
                }`}
                onClick={() => setStarValue(index)}
                onMouseOver={() => setHoverValue(index)}
                onMouseLeave={() => setHoverValue(0)}
              >
                *
              </div>
            </div>
          );
        })}
      </div>
      <ul className="listDummy">
        {listData.map((list) => {
          return <li>{list}</li>;
        })}
      </ul>
    </>
  );
};

export default Dummy;
