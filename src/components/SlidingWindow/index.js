import { useEffect, useState } from "react";
import "./index.css";
const SlidingWindow = () => {
  const images = [
    "https://picsum.photos/id/1/700/300",
    "https://picsum.photos/id/7/700/300",
    "https://picsum.photos/id/13/700/300",
    "https://picsum.photos/id/17/700/300",
  ];
  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    let timer = setInterval(() => {
      setActiveIndex((activeIndex + 1) % images.length);
      // handleRightClick();/
    }, 2000);

    return () => clearInterval(timer);
  }, []);

  const handleRightClick = () => {
    setActiveIndex((prev) => (prev + 1) % images.length);
  };
  const handleLeftClick = () => {
    let value = activeIndex === 0 ? 3 : activeIndex - 1;
    setActiveIndex(value % images.length);
  };

  return (
    <div className="main-sliding-window">
      <img className="image-SW" alt="imageWindow" src={images[activeIndex]} />
      <div className="leftArrow-SW" onClick={handleLeftClick}>
        {"<"}
      </div>
      <div className="rightArror-SW" onClick={handleRightClick}>
        {">"}
      </div>
    </div>
  );
};

export default SlidingWindow;
