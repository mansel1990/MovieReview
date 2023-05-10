import { useState } from "react";
import { FaPlus } from "react-icons/fa";

const WishList = () => {
  const [isLiked, setIsLiked] = useState(false);

  const handleClick = () => {
    setIsLiked(!isLiked);
  };

  return (
    <div
      onClick={handleClick}
      className={`wish-icon ${isLiked ? "liked" : ""}`}
    >
      {isLiked ? <FaPlus color="#3498db" /> : <FaPlus />}
    </div>
  );
};

export default WishList;
