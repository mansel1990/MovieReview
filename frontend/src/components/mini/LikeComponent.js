import React, { useState } from "react";
import { FaThumbsDown, FaThumbsUp } from "react-icons/fa";

const LikeComponent = ({ extraCls }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isDisliked, setIsDisliked] = useState(false);

  const handleLikeClick = () => {
    if (isDisliked) {
      setIsDisliked(false);
    }
    setIsLiked(!isLiked);
  };
  const handleDislikeClick = () => {
    if (isLiked) {
      setIsLiked(false);
    }
    setIsDisliked(!isDisliked);
  };
  return (
    <div>
      <button
        className={`movie__banner_button like-icon ${
          extraCls ? extraCls : ""
        } ${isLiked ? "liked" : ""}`}
        onClick={handleLikeClick}
      >
        <FaThumbsUp color={isLiked ? "gold" : ""} />
      </button>
      <button
        className={`movie__banner_button dislike-icon ${
          extraCls ? extraCls : ""
        } ${isDisliked ? "disLiked" : ""}`}
        onClick={handleDislikeClick}
      >
        <FaThumbsDown color={isDisliked ? "gold" : ""} />
      </button>
    </div>
  );
};

export default LikeComponent;
