import dbConn from "../config/db.js";
import util from "util";
import asyncHandler from "express-async-handler";

const getMovies = asyncHandler(async (req, res) => {
  const query = util.promisify(dbConn.query).bind(dbConn);
  try {
    const movies = await query(`
      SELECT
        id,
        tmdb_id,
        title,
        release_date,
        original_language,
        poster_path,
        vote_average,
        vote_count,
        popularity,
        overview
      FROM
        u932593839_seawitch.movie_details
      ORDER by popularity desc, release_date DESC
      LIMIT 20;
    `);
    res.json(movies);
  } catch (error) {
    res.status(400);
    throw new Error(error);
  }
});

const getProductById = (req, res) => {
  const id = req.params.id;
  id == 1 ? res.json(products[0]) : res.json([]);
};

export { getMovies, getProductById };
