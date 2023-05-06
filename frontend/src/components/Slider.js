import React, { useEffect } from "react";

import Cards from "./Cards";

import { useDispatch, useSelector } from "react-redux";
import { getMovies } from "../actions/moviesAction";

import Message from "../components/Message";
import DottedLoader from "./DottedLoader";

const Slider = ({ mediaType, title, path, params = {}, isLarge }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMovies());
  }, [dispatch]);

  const moviesList = useSelector((state) => {
    return state.moviesList;
  });
  const { loading, movies, error } = moviesList;

  return (
    <>
      {loading ? (
        <DottedLoader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <div className="media-slider">
          <h4 className="media-slider__title">{title}</h4>
          <div className="media-slider__cards">
            {movies.map((media) => (
              <Cards
                isLarge={isLarge}
                key={media.id}
                media={media}
                mediaType={media.media_type || mediaType}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Slider;
