import RatingProgressBar from "./RatingProgressBar";

const StarRating = ({ movie }) => {
  return (
    <div>
      <h4>User Rating</h4>
      <p className="rating-total">400 global ratings</p>
      <RatingProgressBar ratingName="5 star" percent="85" />
      <RatingProgressBar ratingName="4 star" percent="10" />
      <RatingProgressBar ratingName="3 star" percent="1" />
      <RatingProgressBar ratingName="2 star" percent="1" />
      <RatingProgressBar ratingName="1 star" percent="3" />
      <button className="star__rating-btn">Write a Review</button>
    </div>
  );
};

export default StarRating;
