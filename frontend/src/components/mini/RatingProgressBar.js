import React from "react";
import { ProgressBar } from "react-bootstrap";

const RatingProgressBar = ({ ratingName, percent }) => {
  return (
    <div className="rating">
      <div className="rating__group">
        <div className="rating__group-name">{ratingName}</div>
        <div className="rating__group-progress">
          <ProgressBar className="rating__group-progress-bar" now={percent} />
        </div>
        <div className="rating__group-percent">{percent}%</div>
      </div>
    </div>
  );
};

export default RatingProgressBar;
