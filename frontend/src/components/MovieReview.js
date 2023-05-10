import React from "react";
import UserScore from "./mini/UserScore";
import { movieReviews } from "../utils/movies";
import LikeComponent from "./mini/LikeComponent";

const MovieReview = ({ movie }) => {
  const movieReviewsArr = movieReviews.result;
  return (
    <>
      <h4>User Reviews</h4>
      {movieReviewsArr &&
        movieReviewsArr.map((mov) => (
          <div className="review" key={mov.review_id}>
            <div className="review-title">
              <h6 className="review-title-user">
                <i className="fa fa-user px-1" aria-hidden="true" />
                {mov.user_name}
              </h6>
              <UserScore score={mov.rating} size={"small"} />
            </div>
            <div className="review-content">{mov.review}</div>
            <div className="review-footer">
              <div className="review-footer-buttons">
                <LikeComponent extraCls="review-footer-btn" />
              </div>
              <div className="review-footer-date">
                Reviewed on - {mov.created_date}
              </div>
            </div>
          </div>
        ))}
    </>
  );
};

export default MovieReview;
