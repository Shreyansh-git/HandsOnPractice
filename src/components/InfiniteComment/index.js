import { useState } from "react";
import "./index.css";
const InfiniteComment = () => {
  const [value, setValue] = useState("");
  const [comments, setComments] = useState([]);

  function addComment() {
    if (value) setComments([...comments, value]);
    setValue("");
  }
  return (
    <div className="main-container-comment">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={addComment}>Reply</button>
      <div>
        {comments.map((comment, index) => {
          return (
            <div>
              <div className={` child-container-comment `}>
                <div className="circle-comment"></div>
                {comment}
                <InfiniteComment />
              </div>
              <div
                className={` random-content ${
                  comments.length > 0 && index !== comments.length - 1
                    ? "line-comment"
                    : ""
                }`}
              >
                <div className="someContent"></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default InfiniteComment;

// ${
//     comments.length > 0 && index > 0 ? "line-comment" : ""
//   }`

// className={`${comments.length > 0 ? "line-comment" : ""}`}
