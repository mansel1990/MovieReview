import React from "react";

import { generateImageUrl, getYear, ImageSizes } from "../utils/tmdb";
import classNames from "classnames";
import { Col, Row } from "react-bootstrap";
import UserScore from "../components/mini/UserScore";
import HeartIcon from "../components/mini/HeartIcon";
import WishList from "../components/mini/WishList";
import LikeComponent from "../components/mini/LikeComponent";

const MovieBanner = ({ movie }) => {
  return (
    <div className="movie">
      <div
        className="movie__banner"
        style={
          movie?.backdrop_path && {
            backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.8), rgba(0,0,0,0.4)),url(${generateImageUrl(
              movie?.backdrop_path || "",
              ImageSizes.backdrop
            )})`,
          }
        }
      >
        <Row className="movie__contents">
          <Col xs={12} md={5} className="movie__contents-poster">
            <img
              className={classNames("movie__contents-poster-image")}
              src={generateImageUrl(movie.poster_path, ImageSizes.poster)}
              alt={movie.title}
            />
          </Col>
          <Col className="movie__contents-data">
            <h1 className="movie__banner_title">
              {movie?.title || movie?.name || movie?.original_name}
              <span className="movie__banner_year">
                {" ("} {getYear(movie?.release_date || movie?.first_air_date)}{" "}
                {")"}
              </span>
            </h1>
            <div className="movie__banner_subtitle">
              <span className="movie__banner_subtitle-rating">16+</span>
              <span className="movie__banner_subtitle-content">
                {movie?.release_date || movie?.first_air_date} (
                <span className="movie__banner_subtitle-content-lang">
                  {movie?.original_language})
                </span>
                <span className="movie__banner_subtitle-content">
                  <span className="movie__banner_subtitle-content-dot">|</span>{" "}
                  <span className="movie__banner_subtitle-content-genre">
                    {movie?.genre_ids}
                  </span>
                </span>
                <span className="movie__banner_subtitle-content">
                  <span className="movie__banner_subtitle-content-dot">|</span>{" "}
                  <span className="movie__banner_subtitle-content-genre">
                    {movie?.duration}1h 43m
                  </span>
                </span>
              </span>
            </div>
            <div className="movie__banner_score">
              <UserScore score={2} />
              <HeartIcon />
              <WishList />
            </div>
            <h1 className="movie__banner_description">{movie?.overview}</h1>

            <div className="movie__banner_buttons my-3 like-container">
              <button className="movie__banner_button">Write a Review</button>
              <LikeComponent />
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default MovieBanner;
