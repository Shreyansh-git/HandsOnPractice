import { useState } from "react";
import "./index.css";
import Todo from "./Todo";

export default function ToDoList() {
  const [arr, setArr] = useState([
    { id: 1, text: "this is the first form data", checked: false },
    { id: 2, text: "this is the second", checked: false },
  ]);
  const [inputValue, setInputValue] = useState("");

  function addToList() {
    setArr([...arr, { id: Date.now(), text: inputValue, checked: false }]);
    setInputValue("");
  }
  function deleteFromList(id) {
    setArr(arr.filter((list) => list.id !== id));
  }
  function checkBoxClicked(id) {
    setArr(
      arr.map((list) => {
        if (list.id === id) {
          return { ...list, checked: !list.checked };
        } else return list;
      })
    );
  }
  return (
    <div className="App">
      <div className="input-section">
        <input
          style={{ margin: "10px" }}
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button disabled={!inputValue} onClick={addToList}>
          Add
        </button>
      </div>
      <div>
        {arr.map((list) => {
          return (
            <Todo
              listData={list}
              checkboxClicked={checkBoxClicked}
              deleteFromList={deleteFromList}
            />
          );
        })}
      </div>
    </div>
  );
}
