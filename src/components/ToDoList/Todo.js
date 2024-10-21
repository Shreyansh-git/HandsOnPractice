import "./Todo.css";

function Todo({ listData, checkboxClicked, deleteFromList }) {
  return (
    <div key={listData.id} className="mainDiv">
      <input
        className="checkbox"
        type="checkbox"
        checked={listData.checked}
        onChange={() => checkboxClicked(listData.id)}
      />
      <div className="inputText">{listData.text} </div>
      <button
        style={{ margin: "10px" }}
        onClick={() => deleteFromList(listData.id)}
        disabled={!listData.checked}
      >
        delete
      </button>
    </div>
  );
}
export default Todo;
