import { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const HeartIcon = () => {
  const [isLiked, setIsLiked] = useState(false);

  const handleClick = () => {
    setIsLiked(!isLiked);
  };

  return (
    <div
      onClick={handleClick}
      className={`heart-icon ${isLiked ? "liked" : ""}`}
    >
      {isLiked ? <FaHeart color="red" /> : <FaRegHeart />}
    </div>
  );
};

export default HeartIcon;
