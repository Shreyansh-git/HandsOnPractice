import { useState } from "react";
import "./index.css";

function AutoComplete() {
  const [value, setValue] = useState("");
  const [inputClicked, setInputClicked] = useState(false);
  const [list, setList] = useState([
    "pizza",
    "burger",
    "Fries",
    "Coke",
    "Chocolate",
  ]);
  const [filteredList, setFilteredList] = useState([]);

  function showList() {
    setInputClicked(true);
    setFilteredList(list);
  }
  function addItemToInput(index) {
    setValue(list[index]);
  }
  function onSubmit(val) {
    setList([...list, val]);
    setValue("");
    setFilteredList([...list, val]);
  }
  function handleInput(e) {
    setValue(e.target.value);
    setFilteredList(
      list.filter((val) =>
        val.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
  }
  return (
    <div className="main-container">
      <input
        type="text"
        value={value}
        onChange={(e) => handleInput(e)}
        onFocus={showList}
      ></input>
      <button onClick={() => onSubmit(value)}>Submit</button>
      <div className="list-view">
        {inputClicked &&
          filteredList.map((allvalue, index) => {
            return (
              <div
                style={{ border: "0.5px solid black", "padding-left": "10px" }}
                key={index}
                onClick={() => addItemToInput(index)}
              >
                {allvalue}
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default AutoComplete;
