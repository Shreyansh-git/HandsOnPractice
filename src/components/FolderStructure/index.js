import { useState } from "react";
import "./index.css";
const FolderStructure = ({ folderData }) => {
  const [isOpen, setIsOpen] = useState(folderData.isOpen);
  const [inputValue, setInputValue] = useState("");
  const [onAddFolderClick, setOnAddFolderClick] = useState(false);
  function addFolder() {
    if (!inputValue) setOnAddFolderClick(!onAddFolderClick);
    else {
      folderData.child.push({
        name: inputValue,
        id: "25",
        type: "Folder",
        parent: folderData.id,
        isOpen: true,
        child: [],
      });
      setInputValue("");
      setOnAddFolderClick(false);
    }
  }

  if (folderData.type === "Folder")
    return (
      <div className="folder-div">
        <div className="folder-name">
          <h1 onClick={() => setIsOpen(!isOpen)} key={folderData.id}>
            {folderData.name}
          </h1>
          {onAddFolderClick && (
            <input
              className="add-folder-btn"
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
          )}
          <button onClick={addFolder} className="add-folder-btn">
            Add Folder
          </button>
        </div>
        {isOpen &&
          folderData.child.map((val) => {
            return <FolderStructure key={val.id} folderData={val} />;
          })}
      </div>
    );
};
export default FolderStructure;
