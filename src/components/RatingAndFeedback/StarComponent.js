import { FaStar } from "react-icons/fa";

export default function StarComponent({
  arr,
  starHover,
  starValue,
  setStarHover,
  setStarValue,
  handleMouseOver,
}) {
  return (
    <div className="starComp">
      {arr.map((val, index) => {
        return (
          <FaStar
            key={index}
            className="starss"
            color={(starHover || starValue) > index ? "gold" : "grey"}
            onMouseOver={() => handleMouseOver(index)}
            onMouseLeave={() => setStarHover(0)}
            onClick={() => setStarValue(index + 1)}
          />
        );
      })}
    </div>
  );
}
