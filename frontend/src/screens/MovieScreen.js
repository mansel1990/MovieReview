import React, { useState, useEffect } from "react";
import { movies } from "../utils/movies";

import MovieBanner from "./MovieBanner";
import StarRating from "../components/mini/StarRating";
import { Col, Row } from "react-bootstrap";
import MovieReview from "../components/MovieReview";
import WordCloud from "../components/mini/WordCloud";

const MovieScreen = () => {
  const [movie, setMovie] = useState({});

  useEffect(() => {
    setMovie(
      movies.results[Math.floor(Math.random() * movies.results.length - 1)]
    );
  }, []);
  return (
    <div className="movie-screen">
      <MovieBanner movie={movie} />
      <Row className="review-container">
        <Col className="user-ratings" xs={12} md={4}>
          <StarRating movie={movie} />
          <div>
            <WordCloud />
          </div>
        </Col>
        <Col className="user-review" xs={12} md={8}>
          <MovieReview movie={movie} />
          <button className="star__rating-btn">View all Reviews</button>
        </Col>
      </Row>
    </div>
  );
};

export default MovieScreen;
