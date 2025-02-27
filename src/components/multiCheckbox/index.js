import React, { useEffect, useState } from "react";
import "./index.css";
const MultiCheckbox = () => {
  const [checked, setChecked] = useState(new Array(5).fill(false));
  const [selectall, setSelectall] = useState(false);

  function handleCheckboxClick(index) {
    setChecked(
      checked.map((value, newIndex) => (newIndex === index ? !value : value))
    );
  }
  function selectAll() {
    setSelectall(!selectall);
  }
  useEffect(() => {
    if (selectall) setChecked(checked.map(() => true));
    else setChecked(checked.map(() => false));
  }, [selectall]);

  return (
    <div className="checkbox-container">
      <div>
        <input
          className="checkboxes"
          type="checkbox"
          checked={selectall}
          onChange={selectAll}
        />
        <label>Select em all</label>
      </div>
      {checked.map((isChecked, index) => {
        return (
          <div>
            <input
              className="checkboxes"
              type="checkbox"
              checked={isChecked}
              onChange={() => handleCheckboxClick(index)}
            />
            <label>{index}</label>
          </div>
        );
      })}
    </div>
  );
};
export default MultiCheckbox;
