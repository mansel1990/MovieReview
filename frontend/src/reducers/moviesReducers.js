import {
  MOVIE_LIST_FAIL,
  MOVIE_LIST_REQUEST,
  MOVIE_LIST_SUCCESS,
} from "../constants/moviesConstants";

export const moviesListReducers = (state = { movies: [] }, action) => {
  switch (action.type) {
    case MOVIE_LIST_REQUEST:
      return {
        loading: true,
        movies: [],
      };
    case MOVIE_LIST_SUCCESS:
      return {
        loading: false,
        movies: action.payload,
      };
    case MOVIE_LIST_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
