import axios from "axios";
import {
  MOVIE_LIST_FAIL,
  MOVIE_LIST_REQUEST,
  MOVIE_LIST_SUCCESS,
} from "../constants/moviesConstants";

export const getMovies = () => async (dispatch) => {
  try {
    dispatch({
      type: MOVIE_LIST_REQUEST,
    });

    const { data } = await axios.get("/api/movies/");
    dispatch({
      type: MOVIE_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: MOVIE_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
